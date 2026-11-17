# SEO Action Plan — November 16, 2026

Goal: be easy to find on Google for "photo booth rental Barrie" / Simcoe County searches, with GTA cities as secondary.
Full findings: [FULL-AUDIT-REPORT.md](FULL-AUDIT-REPORT.md). Previous pass: [seo-audit-2026-09-29.md](seo-audit-2026-09-29.md).

Who does it: **Code** = a change in this repo. **You** = account work only the owner can do.

## Critical — do now

| # | Fix | Who | Why |
|---|-----|-----|-----|
| C1 | **Deploy the local site.** Commit the pending changes and publish to Netlify. The live site still serves `shop.html` (200) and the homepage links to effects/shop pages that are deleted locally. | You + Code | None of the work since September (fixes, new 404 page, redirects, Backdrops nav, scroll fix) helps until Google can crawl it. |
| C2 | **Google Business Profile (GBP) is the #1 lever for local results.** Confirm category "Photo booth service", set service areas (Barrie, Innisfil, Orillia, Collingwood, Wasaga Beach, Bradford, plus GTA cities), link the website to `https://ymeventvendors.ca/`, add 20+ real event photos and post monthly. | You | Map pack ("photo booths near me") results come from GBP, not your website. |
| C3 | **Collect reviews.** Ask every past client for a Google review (send a direct review link after each event). Also ask for reviews on your existing WeddingWire listing. Do not incentivize or filter who you ask. | You | Barrie competitors show hundreds of reviews (e.g. 203 on WeddingWire for one). Review count and recency are a major local ranking factor. |
| C4 | **After deploy: Search Console.** Resubmit `sitemap.xml` and `image-sitemap.xml`, use URL Inspection → Request indexing for `/`, `/barrie.html`, `/services.html`, `/blog/`. Use Removals or let 404s age out for `/shop.html` and `/effects.html`. | You | Speeds up Google noticing the new version. |

## High — within 1 week

| # | Fix | Who | Why |
|---|-----|-----|-----|
| H1 | ✅ **Done Nov 16 (local): "Your Majesty Event Vendors"** in all titles, social tags, logo, schema; "YM Event Vendors"/"YM Events" kept as `alternateName`. Still to do: make sure your GBP name matches exactly. Original note: **Pick one brand name** and use it everywhere. The site uses "YM Event Vendors" (249×), "Your Majesty Event Vendors" (44×) and "YM Events" (41×). Match exactly what your GBP, Facebook and WeddingWire say. Keep the other names as `alternateName` in schema. | You decide, Code applies | Google ties your website, GBP and listings together by name. Mismatches weaken that link. |
| H2 | ✅ Done Nov 16 (local): WeddingWire and GBP (`kgmid=/g/11xt_1dpw2`) added. Note: GBP name is "Photo Booth Rental by Your Majesty Event Vendors" (keywords in name, against Google guidelines); rename to "Your Majesty Event Vendors". **Add your WeddingWire listing (and GBP URL) to schema `sameAs`.** Only Facebook, Instagram and TikTok are there now. | Code | Strengthens the business entity Google builds for you. |
| H3 | ✅ Done Nov 16 (local): Organization + LocalBusiness, no address, priceRange, areaServed expanded to towns named on the site. **Add `LocalBusiness` schema** (service-area business: city/region only, no street address, phone, hours, `areaServed`). It was removed in September because no address was confirmed. A service-area version doesn't need one. | Code (you confirm details) | Helps Google connect the site to your GBP and service areas. |
| H4 | Partly done Nov 16: package/price section added to each GTA page (~120 words). Still needs real local events + photos. **Expand the GTA city pages.** Toronto, Brampton, Mississauga and Vaughan have only 240–370 words and no photos. Add real events/venues in that city, travel notes, packages, a local FAQ and 2–3 photos from events there. | You supply facts/photos, Code writes | Thin city pages rarely rank. They aren't duplicates (similarity 12–28%), they just say too little. |
| H5 | ✅ Done Nov 16 (local). **Put the phone number on every page.** 21 pages have no `tel:` link (services, FAQ, gallery, about, all blog posts). | Code | Consistent contact info (NAP) on every page + easier calls from mobile search. |
| H6 | **Get listed in local directories** with the same name/phone/website: Bing Places, Apple Business Connect, Yelp, BBB Barrie, GigSalad, The Bash, Eventective, Barrie wedding/venue vendor lists. | You | Citations and backlinks raise local prominence; competitors appear on all of these. |

## Medium — within 1 month

| # | Fix | Who | Why |
|---|-----|-----|-----|
| M1 | **Add photos to blog posts.** None of the 14 posts has an image. Add 1–3 real event photos with descriptive alt text. | Code (your photos) | Image search traffic, better engagement, richer article results. |
| M2 | **Give the gallery page text** (currently ~40 words): short captions per event type, venue/city, a link to packages. | Code | Google can't rank a page it can't read. |
| M3 | **Shrink gallery images.** `pic5.webp` is 906 KB, `pic2.webp` 717 KB, `pic6.webp` 544 KB (some WebPs are *bigger* than the JPGs). Make ~1200px versions for the grid. | Code | Mobile speed is a ranking signal. Carried over from September. |
| M4 | **Write Barrie/Simcoe case studies** from real events (venue, package, setup, photos, with client permission). Link them from the Barrie page. | You supply, Code writes | Original, local, first-hand content is what Google rewards most (E-E-A-T). |
| M5 | **Link real testimonials to their source** (Google/WeddingWire) and confirm permission. | You | Verifiable reviews build trust. Never add self-written star-rating schema. |
| M6 | ✅ Done Nov 16 (local). **Refresh `<lastmod>` dates** in `sitemap.xml` for pages that change in this round. | Code | Tells Google which pages to recrawl. |

## Low — backlog

| # | Fix | Who |
|---|-----|-----|
| L1 | Delete the unused `location-content.js` (no page loads it; it holds stale titles mentioning "Your Majesty Events"). | Code |
| L2 | Two posts target photo-booth *business owners* ("business tips for new owners", "equipment checklist for beginners"), not your customers. Leave them, but don't write more like them. Put new effort into customer posts for Barrie/Simcoe. | You |
| L3 | ✅ Done Nov 16 (local). Lengthen short meta descriptions on Brampton, Toronto, Mississauga, Vaughan, Contact and FAQ (87–108 chars) to ~140–155 with price + area. | Code |
| L4 | Exclude `screenshots/` from the deploy (or add it to the redirect 404 list like `docs/`). | Code |
| L5 | Add a reviews/"as seen on WeddingWire" badge on the homepage once reviews exist. | Code |

## What to measure (Search Console, monthly)

Impressions and average position for queries containing *Barrie, Simcoe, Orillia, Innisfil, Collingwood* + "photo booth". Track the Barrie page and homepage separately. In GBP Insights, track calls, website clicks and direction requests. Expect weeks to months for local ranking changes. Reviews and GBP activity usually move results faster than site edits.
