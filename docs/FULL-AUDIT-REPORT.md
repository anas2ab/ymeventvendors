# Full SEO Audit — November 16, 2026

Site: https://ymeventvendors.ca (static HTML on Netlify). Business type: local **service-area business**, photo booth rentals, primary market Barrie & Simcoe County, secondary GTA.
Method: source inspection of all 30 HTML files, `scripts/seo-check.py`, live HTTP checks, one web search for local competition. No Search Console, GBP or analytics data was available, so no ranking or traffic figures are claimed.

## SEO Health Score: 73 / 100 (diagnostic rubric, not a Google metric)

| Category | Score | Weight | Points |
|---|---:|---:|---:|
| Technical SEO | 80 | 25% | 20.0 |
| Content Quality | 60 | 25% | 15.0 |
| On-Page SEO | 80 | 20% | 16.0 |
| Schema | 75 | 10% | 7.5 |
| Performance | 75 | 10% | 7.5 |
| Images | 70 | 5% | 3.5 |
| AI Search Readiness | 70 | 5% | 3.5 |
| **Total** | | | **73** |

Not scored, but the biggest factor for local search: Google Business Profile completeness and review volume (see ACTION-PLAN C2/C3).

### Top 5 issues
1. Local changes since Aug/Sep are not deployed. Live still serves `shop.html` and links to removed pages.
2. Few reviews compared with Barrie competitors (owner action).
3. Brand name inconsistent across pages and schema (3 variants).
4. GTA city pages are thin (240–370 words, no images).
5. No `LocalBusiness` schema and WeddingWire listing missing from `sameAs`.

### Top 5 quick wins
1. Deploy + resubmit sitemaps.
2. Phone link on all pages.
3. Add WeddingWire/GBP to `sameAs`.
4. Lengthen 6 short meta descriptions.
5. Delete unused `location-content.js`.

## Technical SEO
- **Good:** HTTPS with HSTS preload, security headers, http/www → apex 301s, `/index.html` → `/` 301, custom 404 with `noindex`, `pretty_urls = false`, robots.txt allows all and lists both sitemaps, docs/scripts blocked from public, all canonicals match sitemap, checker passes (924 local refs, 27 JSON-LD blocks, all pages ≤2 clicks from home).
- **Issue:** live ≠ local. Live `/shop.html` returns 200, and the live homepage references effects/shop. Local `_redirects` already 404s these, so deploying fixes it.
- **Minor:** `screenshots/` would be published. Unused `location-content.js` contains stale meta copy.
- Today's fixes (in local only): removed `content-visibility` that broke anchor scrolling; Backdrops nav link added site-wide; `/backdrops` → `/#backdrops` redirect exists.

## Content Quality
| Page group | Words (approx, main content) | Note |
|---|---:|---|
| Home / Barrie / Services | 650–750 | Solid, Barrie-focused |
| Toronto / Brampton / Mississauga / Vaughan | 244 / 283 / 269 / 369 | Thin, no images, little city-specific detail |
| Gallery | ~42 | Almost no text |
| Contact | ~161 | Fine for purpose |
| Blog posts (14) | 225–725 | Mostly short; cost-Ontario post only ~225 |

- City pages are **not duplicates** (pairwise similarity 5–28%), only thin.
- E-E-A-T: no first-hand case studies, no owner/team bios with real names on About, testimonials lack linked source.
- Two posts target business operators rather than customers (low conversion value).

## On-Page SEO
- All indexable pages: unique title, one H1, canonical, description. Lengths fine except short descriptions on Contact (87), FAQ (96), Toronto (100), Brampton (102), Mississauga (105), Vaughan (108).
- Brand suffix varies: "| YM Events", "| YM Event Vendors", "| Your Majesty Event Vendors", "| YM".
- Phone `tel:` links missing on 21 pages.
- Internal linking good (blog index is static, all pages within 2 clicks).

## Schema
- Present: Organization, WebSite, Service + Offer (home, Barrie, Services), BreadcrumbList (city pages), BlogPosting (all posts), FAQPage (FAQ, Services, Barrie post), ImageGallery.
- All JSON-LD parses.
- Missing: `LocalBusiness` (service-area form), WeddingWire and GBP in `sameAs`.
- Note: FAQPage no longer earns rich results for most sites, but it's harmless and useful for AI answers.

## Performance
- Mobile skips hero videos (fixed in Sep). Desktop loads ~2.9 MB of hero video.
- Gallery images oversized: pic5.webp 906 KB, pic2.webp 717 KB, pic6.webp 544 KB, pic5.jpg 773 KB. Some WebPs are larger than their JPG.
- `optimized/bwglam.jpg` 2.2 MB (fallback; WebP is used in modern browsers).
- No field Core Web Vitals data checked. Look at Search Console → Core Web Vitals after deploy.

## Images
- All `<img>` have alt text. One gallery image lacks width/height (CLS risk).
- Zero images on blog posts and GTA city pages.
- Image sitemap present (18 images).

## AI Search Readiness
- Clear prices ($400 Signature Prints, $500 Glam Booth, 2 hours) and FAQ content make the site quotable.
- Weak: no named experts/owner, no case studies, limited third-party mentions (WeddingWire only found). More directory listings and reviews improve citations in AI Overviews/ChatGPT.

## Local competition snapshot
A search for Barrie photo booth rentals mostly returned directories (WeddingWire, GigSalad, The Bash, Eventective, BBB). Your WeddingWire listing appears. Competitors such as Take My Photo show 200+ reviews. Being listed and reviewed on these directories matters as much as the website.

Sources: weddingwire.ca/photobooth/your-majesty-event-vendors--e81904, weddingwire.ca/photobooth/ontario/barrie, gigsalad.com/Event-Services/All/ON/Barrie, bbb.org/ca/on/barrie/category/photo-booth-rental, thebash.com/search/photo-booths-barrie-on
