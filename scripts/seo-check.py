#!/usr/bin/env python3
"""Check static SEO, structured data syntax, discovery, and internal links.

Run: python3 scripts/seo-check.py
Uses only the standard library. Does not submit forms or contact live services.
Deployment redirects and Google's rich-result eligibility need separate checks.
"""
from collections import Counter, deque
from html.parser import HTMLParser
import json
from pathlib import Path
import re
from urllib.parse import unquote, urljoin, urlsplit
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
ORIGIN = "https://ymeventvendors.ca"
NS = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9",
      "i": "http://www.google.com/schemas/sitemap-image/1.1"}


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path = path
        relative = path.relative_to(ROOT).as_posix()
        self.url = ORIGIN + "/" + relative
        self.title = ""
        self.h1 = 0
        self.meta = {}
        self.canonicals = []
        self.ids = []
        self.refs = []
        self.anchors = []
        self.schemas = []
        self.alt_missing = []
        self._title = False
        self._schema = None
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "title":
            self._title = True
        if tag == "h1":
            self.h1 += 1
        if "id" in a:
            self.ids.append(a["id"])
        if tag == "meta":
            key = a.get("name", a.get("property", ""))
            self.meta.setdefault(key, []).append(a.get("content", ""))
        if tag == "link" and a.get("rel") == "canonical":
            self.canonicals.append(a.get("href"))
        if tag == "script" and a.get("type") == "application/ld+json":
            self._schema = ""
        if tag == "img" and "alt" not in a:
            self.alt_missing.append(a.get("src"))
        for key in ("href", "src", "poster", "data-src"):
            if a.get(key):
                self.refs.append(a[key])
        if tag == "a" and a.get("href"):
            self.anchors.append(a["href"])
        for candidate in a.get("srcset", "").split(","):
            if candidate.strip():
                self.refs.append(candidate.strip().split()[0])

    def handle_data(self, data):
        if self._title:
            self.title += data
        if self._schema is not None:
            self._schema += data

    def handle_endtag(self, tag):
        if tag == "title":
            self._title = False
        if tag == "script" and self._schema is not None:
            self.schemas.append(json.loads(self._schema))
            self._schema = None


def local_target(url):
    parsed = urlsplit(url)
    if parsed.scheme not in ("http", "https") or parsed.hostname != "ymeventvendors.ca":
        return None
    target = ROOT / unquote(parsed.path).lstrip("/")
    if target.is_dir():
        target /= "index.html"
    return target.resolve()


def main():
    errors = []
    pages = {}
    for path in sorted(ROOT.glob("*.html")) + sorted((ROOT / "blog").glob("*.html")):
        try:
            pages[path.resolve()] = Page(path)
        except (ValueError, json.JSONDecodeError) as error:
            errors.append(f"{path.name}: invalid JSON-LD: {error}")
    sitemap = ET.parse(ROOT / "sitemap.xml")
    urls = [n.text for n in sitemap.findall("s:url/s:loc", NS)]
    if len(urls) != len(set(urls)):
        errors.append("Duplicate sitemap URLs")
    titles, descriptions = [], []
    for url in urls:
        page = pages.get(local_target(url))
        if page is None:
            errors.append(f"Missing sitemap page: {url}")
            continue
        name = page.path.relative_to(ROOT)
        if page.canonicals != [url]:
            errors.append(f"{name}: canonical does not match sitemap URL")
        if page.h1 != 1:
            errors.append(f"{name}: expected one H1, found {page.h1}")
        if not page.title.strip():
            errors.append(f"{name}: missing title")
        desc = page.meta.get("description", [])
        if len(desc) != 1 or not desc[0].strip():
            errors.append(f"{name}: expected one nonempty description")
        titles.append(page.title.strip())
        descriptions.extend(desc)
        if "noindex" in " ".join(page.meta.get("robots", [])).lower():
            errors.append(f"{name}: sitemap includes noindex page")
        if page.meta.get("og:url") != [url]:
            errors.append(f"{name}: social URL does not match canonical")
        if not page.meta.get("og:image"):
            errors.append(f"{name}: missing social image")
    for field, values in [("titles", titles), ("descriptions", descriptions)]:
        for value, count in Counter(values).items():
            if count > 1:
                errors.append(f"Duplicate {field}: {value}")
    checked_links = 0
    graph = {}
    for path, page in pages.items():
        name = page.path.relative_to(ROOT)
        graph[path] = set()
        # This retired authoring template has intentional [slug] placeholders
        # and is excluded from the sitemap and served as 404 in production.
        if name.as_posix() == "blog/post-template.html":
            continue
        if len(page.ids) != len(set(page.ids)):
            errors.append(f"{name}: duplicate HTML ids")
        if page.alt_missing:
            errors.append(f"{name}: images missing alt: {page.alt_missing}")
        for ref in page.refs:
            url = urljoin(page.url, ref)
            target = local_target(url)
            if target is None:
                continue
            checked_links += 1
            if not target.is_file():
                errors.append(f"{name}: broken local target {ref}")
            fragment = unquote(urlsplit(url).fragment)
            if fragment and target in pages and fragment not in pages[target].ids:
                errors.append(f"{name}: missing anchor {ref}")
        for ref in page.anchors:
            target = local_target(urljoin(page.url, ref))
            if target in pages:
                graph[path].add(target)
    start = (ROOT / "index.html").resolve()
    depths, queue = {start: 0}, deque([start])
    while queue:
        page = queue.popleft()
        for target in graph.get(page, []):
            if target not in depths:
                depths[target] = depths[page] + 1
                queue.append(target)
    for url in urls:
        target = local_target(url)
        if target not in depths:
            errors.append(f"No static link path from home to {url}")
    images = ET.parse(ROOT / "image-sitemap.xml")
    for n in images.findall("s:url/s:loc", NS):
        if n.text not in urls:
            errors.append(f"Image sitemap uses noncanonical page: {n.text}")
    for n in images.findall("s:url/i:image/i:loc", NS):
        target = local_target(n.text)
        if target is None or not target.is_file():
            errors.append(f"Missing image sitemap image: {n.text}")
    robots = (ROOT / "robots.txt").read_text()
    for name in ("sitemap.xml", "image-sitemap.xml"):
        if f"Sitemap: {ORIGIN}/{name}" not in robots:
            errors.append(f"robots.txt missing {name}")
    if re.search(r"Disallow:\s*/\s*$", robots, re.M):
        errors.append("Production robots.txt disallows the whole site")
    if errors:
        print("FAILED:\n" + "\n".join(f"- {e}" for e in errors))
        return 1
    print(f"PASS: {len(pages)} HTML files, {len(urls)} canonical sitemap pages, "
          f"{checked_links} local references, {sum(len(p.schemas) for p in pages.values())} JSON-LD blocks.")
    print(f"All sitemap pages reachable by static links within {max(depths[local_target(u)] for u in urls)} clicks.")
    print("Deployment redirects, external links, field performance and rich-result eligibility are not tested here.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
