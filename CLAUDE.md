# CLAUDE.md — AEM Insider
## Read this file fully before touching anything in this repo.

This is the single source of truth for the AEM Insider project.
It covers the website, the YouTube channel, the Substack, the PPT decks, and the full content pipeline.

---

## WHAT AEM INSIDER IS

A personal brand built around Adobe Experience Manager (AEM).
Goal: become the go-to resource for AEM developers and architects.
One tutorial per week ("new episode every Tuesday").
Long-term model: free newsletter now → paid Substack tier + sponsorships later.

**Faceless by design.** No webcam, no name shown on screen, no talking head.
Screen recordings only, fully captioned. Treat the faceless format as a strength, never a weakness.

Credibility hook: **Adobe Certified AEM Master with 13+ years on the platform.**
Stats used across the site: `13+ years on AEM · Certified Master · 5× AEM versions shipped · 0 fluff`

**Not affiliated with Adobe Inc.** Always include this disclaimer where relevant.

---

## WHO RUNS IT

Vasim Akram — Adobe Certified AEM Master, 13+ years on AEM, based in Amsterdam.
Email: aeminsider@gmail.com

---

## PLATFORMS AND LINKS

| Platform | URL | Notes |
|---|---|---|
| Website | https://aeminsider.com | Netlify, free tier, static HTML/CSS/JS |
| YouTube | https://youtube.com/@aeminsider | Primary discovery channel |
| Substack | https://aeminsider.substack.com | Newsletter + written walkthroughs |
| Domain | GoDaddy, 3-year purchase | DNS pointed to Netlify |

Netlify Pretty URLs is ON. Live URLs are extensionless lowercase:
`/`, `/about`, `/blog`, `/resources` — both `/blog` and `/blog.html` work, but `/blog` is canonical.
All `canonical`, `og:url`, and sitemap entries MUST use the extensionless lowercase form.

---

## AUDIENCE

Two learning tracks:
- **Developers** — building on AEM: Sling Models, OSGi, HTL, Maven, components, Cloud SDK
- **Content Authors & Marketers** — using AEM: page authoring, templates, assets, workflows

Beginner-friendly but credible for experienced practitioners.
Ramp: beginner → production ("from the ground up").

---

## BRAND IDENTITY — NEVER DEVIATE FROM THIS

### Colors
| Name | Hex | Usage |
|---|---|---|
| Dark background (primary) | `#121317` | Page bg, dark sections |
| Dark background (secondary) | `#16171A` | Cards on dark, nav |
| Dark background (tertiary) | `#191B20` | Nested cards, code blocks |
| Red accent | `#D32F2F` | CTAs, highlights, eyebrow labels, borders. Use sparingly. |
| White | `#FFFFFF` | Headlines on dark bg, card backgrounds |
| Off-white / paper | `#F4F4F1` | Light section backgrounds |
| Ink secondary | `#494D56` | Body text on light bg |
| Ink muted | `#727680` | Secondary text, captions |
| Hairlines | `rgba(22,23,26,0.10)` | Borders, dividers |

### Fonts — loaded from Google Fonts in every HTML file
- **Space Grotesk** — display, headlines, section titles
- **IBM Plex Sans** — body text, nav, labels
- **IBM Plex Mono** — eyebrow labels (`// CHAPTER 01`), code, tags, mono accents, chips

### Logo
- File: `assets/logo.svg`
- Red rounded-square badge with `</>` shield + "AEM INSIDER" text
- Used in nav (top left) and footer

### Design motifs
- Code-editor window (traffic-light dots + GitHub-dark syntax colors)
- Mono eyebrows: `// CHAPTER 01`, `// AEM TUTORIALS`, `// RESOURCES`
- Red `VS` circular badges for comparisons
- Mono "chip" pills for tags
- Simple node → arrow flow diagrams
- Stat grids
- Dashed "coming soon" cards
- No emoji (except inside the logo). No gradients as decoration. No particle effects. Keep it minimal.

### Analogies used across all content (maintain consistency)
- WordPress = bicycle, AEM = commercial aircraft
- Apache Sling = receptionist
- JCR = database / filing cabinet
- OSGi = power grid
- Author/Publish/Dispatcher = hotel back-of-house / front-of-house / front desk
- Maven = food delivery app (one command, it handles everything)
- Archetype = blueprint / scaffolding

---

## REPO STRUCTURE

```
aeminsider-website/
├── CLAUDE.md               ← this file
├── index.html              ← Home page
├── about.html              ← About page
├── blog.html               ← Episode index
├── resources.html          ← Downloads, cheat sheets, config files
├── contact.html            ← Contact page (Formspree form)
├── decks.html              ← Slide deck viewer index
├── assets/
│   ├── site.css            ← ALL shared styles — single stylesheet, no additions
│   ├── anim.js             ← Scroll reveal animations + count-up
│   ├── logo.svg            ← Square logo (red/white/black)
│   └── og-image.png        ← OG image for social (1200×630)
├── decks/
│   ├── deck.css            ← Shared deck styles
│   ├── deck-stage.js       ← Deck viewer JS
│   ├── video-1-what-is-aem.html
│   ├── video-2-how-aem-pages-are-built.html
│   ├── video-3-your-first-aem-maven-project.html
│   ├── video-4-build-your-first-aem-component.html
│   ├── video-5-aem-dialogs-deep-dive.html
│   └── video-6-editable-templates.html
├── resources/              ← each snippet = a raw file + an HTML viewer page (copy + download)
│   ├── settings.xml                 ← Maven settings for AEM (raw file)
│   ├── settings-xml.html            ← viewer: copy-to-clipboard + download
│   ├── aem-maven-commands.txt       ← Maven build/deploy cheat sheet (raw file)
│   ├── aem-maven-commands.html      ← viewer: copy-to-clipboard + download
│   ├── aem-archetype-command.txt    ← Archetype generate command (raw file)
│   └── aem-archetype-command.html   ← viewer: copy-to-clipboard + download
├── robots.txt
└── sitemap.xml
```

---

## PUBLISHED CONTENT — CURRENT STATE (July 2026)

### YouTube Videos
| EP | Title | YouTube ID | YouTube URL | Substack slug |
|---|---|---|---|---|
| EP01 | What is Adobe Experience Manager? Complete Overview 2026 | `uhxeVCX93jU` | `https://www.youtube.com/watch?v=uhxeVCX93jU` | `/p/what-is-adobe-experience-manager` |
| EP02 | How Are AEM Pages Built? Components, Templates & Local Setup Explained (2026) | `7a3dwv0oQNg` | `https://www.youtube.com/watch?v=7a3dwv0oQNg` | `/p/how-aem-pages-are-built-components` |
| EP03 | Your First AEM Maven Project — Built the Right Way | `7o9ecK87QzY` | `https://youtu.be/7o9ecK87QzY` | `/p/your-first-aem-maven-project-built` |
| EP04 | Build Your First AEM Component — No Java Needed | `XPfanQZlUGU` | `https://youtu.be/XPfanQZlUGU` | `/p/build-your-first-aem-component-no` |
| EP05 | AEM Dialogs — Deep Dive | `EMFzrGdn-5U` | `https://youtu.be/EMFzrGdn-5U` | `/p/aem-dialogs-deep-dive` |
| EP06 | Editable Templates — How Every Page Gets Its Structure | `xTqpS5bENCw` | `https://youtu.be/xTqpS5bENCw` | `/p/editable-templates-how-every-aem` |

YouTube thumbnail URL pattern: `https://i.ytimg.com/vi/<VIDEO_ID>/maxresdefault.jpg`
Fallback on error: `https://i.ytimg.com/vi/<VIDEO_ID>/hqdefault.jpg`

### Substack posts (non-video)
- Intro post (no slug): `https://aeminsider.substack.com`

### Resource files in resources/

Each copyable resource is an **HTML viewer page** (copy-to-clipboard + download) with a matching
**raw file** used for the Download button. resources.html cards link to the `.html` viewer
(`⧉ Copy or download →`), NOT straight to the raw file.

Snippets are embedded **inline** (never `fetch()`ed — the browser blocks that over `file://`).
Two layouts are in use:
- **Single-snippet pages** (`settings-xml.html`): the whole file sits in one
  `<script type="text/plain" id="src">` block, rendered into a `#snip` code-window via
  `textContent`. Keep this inline block identical to the raw `resources/<name>` download file.
- **Split pages** (`aem-maven-commands.html`, `aem-archetype-command.html`): each command is its own
  `.cmd-block` — a plain-text title + description, then the command alone inside its own `.editor`
  (with a unique id + Copy button). Descriptions stay OUT of the editor. Non-copyable reference
  (the archetype parameter meanings) goes in a `.param-list` (key → meaning), also outside editors.
  The `Download …` button points at the raw file, which still holds the full reference — keep the
  commands shown on the page and the raw file in sync.

The copy handler copies the target `pre`'s `innerText` (`&amp;&amp;` in the HTML decodes to `&&`;
multi-line commands keep their `\` continuations).

The viewer pages live in `resources/`, so their nav/footer/asset links use `../` and the raw
file download link is relative (e.g. `href="settings.xml"`). They are `noindex` (no sitemap entry).
The Copy button lives in the code-window bar (icon + "Copy"); no changes to anim.js.

| Raw file | Viewer page | Description |
|---|---|---|
| `resources/settings.xml` | `resources/settings-xml.html` | Maven settings — points Maven to Adobe's public Nexus repo at repo.adobe.com. Required for every AEM Maven project. |
| `resources/aem-maven-commands.txt` | `resources/aem-maven-commands.html` | Cheat sheet of daily AEM build/deploy Maven commands (EP03) — full build, single-module, Author vs Publish, and how to verify a deploy. |
| `resources/aem-archetype-command.txt` | `resources/aem-archetype-command.html` | The full `mvn archetype:generate` command that scaffolds a multimodule AEM project (EP03) — Mac/Linux + Windows, with every parameter explained. |

---

## VIDEO PIPELINE — COMING NEXT

| EP | Title | Track | What it covers |
|---|---|---|---|
| EP07 | Sling Resource Resolution | dev | How a URL becomes a resource becomes a script — types, super types, selectors, search paths. Locked in EP06's outro. Inherits the slide cut from EP06 ("the page component, up close" — no `page.html`, inheritance to core page v3, `customheaderlibs`/`customfooterlibs`). |

Backlog (no EP number yet): Clientlibs Explained (promised in EP04 + EP05, restated in EP06's outro) · Sling Models (deferred from EP04; EP05 points to it for clean multifield rendering) · AEM Sites, Assets & Forms · AEM as a Cloud Service — What's Different? (full script already written, July 2026).

Content Authors & Marketers track: planned but not started. No EP numbers assigned yet.

---

## PAGES — DETAILED BREAKDOWN

### blog.html — Episode Index

Lists all episodes newest first. Two filter tabs: Developers / Content Authors.
Each row has `data-track`:
- `"dev"` = developer content only
- `"author"` = content author content only
- `"dev author"` = both tracks

**Published episode card pattern:**
```html
<div class="post-row" data-track="dev">
  <div><div class="pkind">EP03 · Video</div><div class="pdate">Jul 2026</div></div>
  <div>
    <h3>Your First AEM Maven Project — Built the Right Way</h3>
    <p>Short description — 1-2 sentences max.</p>
  </div>
  <div class="plinks">
    <a href="https://youtu.be/7o9ecK87QzY" target="_blank" rel="noopener">▶ YouTube →</a>
    <a href="https://aeminsider.substack.com/p/your-first-aem-maven-project-built" target="_blank" rel="noopener">✎ Substack →</a>
  </div>
</div>
```

**Coming soon card pattern:**
```html
<div class="post-row is-soon" data-track="dev">
  <div><div class="pkind">EP04 · Coming</div><div class="pdate">Next Tuesday</div></div>
  <div>
    <h3>Build Your First AEM Component from Scratch</h3>
    <p>Short description.</p>
  </div>
  <div class="plinks"><span class="rsoon mono" style="color:var(--ink-3);font-size:13px;">Coming soon</span></div>
</div>
```

### resources.html — Downloads and References

Cards grid. Newest first.

**Video card:**
```html
<div class="res-card">
  <div class="rtype">Video · Free</div>
  <h3>Title</h3>
  <p>Description.</p>
  <div class="rfoot"><a href="https://youtu.be/VIDEO_ID" target="_blank" rel="noopener">▶ Watch on YouTube →</a></div>
</div>
```

**Downloadable file card:**
```html
<div class="res-card">
  <div class="rtype">Config File · Free</div>
  <h3>Title</h3>
  <p>Description.</p>
  <div class="rfoot"><a href="resources/filename.xml" download="filename.xml">⬇ Download →</a></div>
</div>
```

**Coming soon card:**
```html
<div class="res-card">
  <div class="rtype">Cheat sheet</div>
  <h3>Title</h3>
  <p>Description.</p>
  <div class="rfoot"><span class="rsoon">Coming soon · subscribers first</span></div>
</div>
```

### index.html — Home Page

Contains:
- Hero with particle animation background
- Video grid (`.vid-grid`) — live episodes with thumbnails + coming-soon placeholders
- Learning paths / roadmap section
- Newsletter signup form

Video grid card pattern (live):
```html
<div class="vid-card">
  <a href="https://youtu.be/VIDEO_ID" target="_blank" rel="noopener">
    <img src="https://i.ytimg.com/vi/VIDEO_ID/maxresdefault.jpg"
         onerror="this.src='https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg'"
         alt="Episode title" />
  </a>
  <div class="tag">EP03 · Developer</div>
  <h3>Episode title</h3>
  <div class="vlinks">
    <a href="https://youtu.be/VIDEO_ID" target="_blank" rel="noopener">▶ YouTube →</a>
    <a href="https://aeminsider.substack.com/p/SLUG" target="_blank" rel="noopener">✎ Substack →</a>
  </div>
</div>
```

---

## WHEN A NEW VIDEO SHIPS — FULL CHECKLIST

Run through this every time a new episode is published.
Required inputs: EP number, title, YouTube video ID, Substack slug, track (dev / author / both), publish date.

### 1. blog.html
- Find the `is-soon` row for this EP at the top of `#post-list`
- Remove `is-soon` class
- Change pkind from `EP0X · Coming` to `EP0X · Video`
- Change pdate to month + year (e.g. `Jul 2026`)
- Replace `<span class="rsoon">Coming soon</span>` with YouTube + Substack links
- Add a new `is-soon` row at the very top for the NEXT episode

### 2. index.html
- Find the coming-soon vid-card for this EP in `.vid-grid`
- Add thumbnail img tag with YouTube maxresdefault + hqdefault fallback
- Add YouTube and Substack links
- Add a new coming-soon card for the next episode
- **Cap the grid: keep only the 3 newest LIVE cards + 1 coming-soon card.**
  After adding the new episode, delete the oldest live vid-card so the count stays at 3 live + 1 soon.
  The homepage is a "latest" strip, not the full list — the full history lives on blog.html,
  and the `View all episodes →` button under `.vid-grid` already links there. Never let `.vid-grid` grow past 4 cards.

### 3. resources.html
- Add a Video card for the new episode (newest first in the grid)
- If the episode has a downloadable file, add a Config File card too
- Place the downloadable file in `resources/` folder

### 4. decks.html
- Find the `is-soon` deck row for this EP
- Make it a live link pointing to the deck file, kebab-case, no spaces: `decks/video-X-title.html` (e.g. `decks/video-3-your-first-aem-maven-project.html`)
- Add a new coming-soon row for the next episode

### 5. decks/ folder
- If a slide deck was built, add the deck HTML file here — kebab-case filename, no spaces (`video-X-title.html`)
- Copy structure from an existing deck, swap content

### 6. CLAUDE.md (this file)
- Move the episode from "Coming next" to "Published content" table
- Add YouTube ID and Substack slug
- Update the coming-next table

### DO NOT touch for new episodes
- `sitemap.xml` — only for actual site pages, not YouTube/Substack content
- `canonical` / `og:url` tags — same reason
- `robots.txt`

---

## SEO — ALREADY IN PLACE, KEEP CONSISTENT

Every live page has:
- `<link rel="canonical">` using extensionless lowercase URL
- Full Open Graph tags (og:type, og:title, og:description, og:url, og:image)
- Twitter card tags
- `og-image.png` (1200×630) for all pages

Homepage additionally has:
- Organization JSON-LD with `sameAs` → YouTube + Substack
- WebSite JSON-LD

`sitemap.xml` and `robots.txt` at project root — Netlify serves them at `/sitemap.xml` and `/robots.txt`.

**robots.txt** = crawl rules only (`Allow: /` + a `Sitemap:` pointer). It does NOT list pages and
needs no edit when pages are added. `noindex` pages (decks, resource viewers) stay *allowed* here —
never `Disallow` a page you're keeping out of search via meta, or the crawler can't read the noindex.

**sitemap.xml** = the list of indexable public pages (currently `/`, `/blog`, `/about`,
`/resources`, `/contact`), extensionless lowercase. UPKEEP RULE: when you add a NEW public page,
add its `<loc>` here and set `<lastmod>`. Do NOT add `noindex` pages (decks, resource viewers) or
YouTube/Substack/episode links — a sitemap is a "please index these" list only.

To get new pages into Google: Google Search Console → verify domain → submit sitemap → Request Indexing per URL. On-page SEO alone won't index a new domain. Takes days to weeks.

---

## SLIDE DECKS — PPT AND WEB FORMAT

### Web decks (in decks/ folder)
- Built with `decks/deck-stage.js` and `decks/deck.css`
- 1920×1080. Slide text minimum 24px at that resolution.
- Structure: dark grid title card → dark chapter dividers → paper content slides → dark outro with real links
- Animations: visible end-state is the BASE style. Animate FROM hidden, gated on `prefers-reduced-motion: no-preference` and `[data-deck-active]`. Never leave an element at `opacity:0` depending on animation timing — frozen-clock capture contexts (PDF/PPTX export) will render it blank.

### PPTX decks (built with pptxgenjs)
- Canvas size: 18,288,000 × 10,287,000 EMU (custom widescreen — NOT the default 13.33"×7.5")
- Content margin: x=1,066,800 EMU (~0.84") from left
- Fonts in PPTX: Arial = Space Grotesk substitute, Calibri = IBM Plex Sans substitute, Courier New = IBM Plex Mono substitute (pptxgenjs cannot embed Google Fonts directly)
- Build script: Node.js using pptxgenjs. QA: LibreOffice headless → pdftoppm → visual inspection per slide.
- Dark slides (`#121317` bg): title, chapter dividers, emphasis slides
- Light slides (`#F4F4F1` bg): content, comparison slides
- Eyebrow pattern: `// CHAPTER 0X · SECTION NAME` in mono, red, letter-spaced

### PPT type scale
| Element | Size | Font |
|---|---|---|
| Title headline | 78pt | Space Grotesk Bold |
| Content slide headline | 58.5pt | Space Grotesk Bold |
| Sub-headline / stat | 43.5–48pt | Space Grotesk Bold or IBM Plex Mono |
| Eyebrow label | 18.75pt | IBM Plex Mono |
| Card title | 22.5–25.5pt | IBM Plex Sans Bold |
| Body copy | 18pt | IBM Plex Sans |

---

## VIDEO PRODUCTION PIPELINE (for full context)

1. Script written in slide-by-slide format (Slide 1: script, Slide 2: script...)
2. PPTX deck built with pptxgenjs, QA'd with LibreOffice + pdftoppm
3. YouTube thumbnail created as SVG (1280×720 ratio)
4. Screen recorded with Zoom + Samsung Galaxy Buds 3 (ANC on, Equalizer: Clear)
5. Edited in CapCut — Deep & Clear voice filter. Export: 1080p, 30fps, MP4, H.264
6. Uploaded to YouTube: thumbnail, description with chapters, playlist added
7. Cross-posted to Substack as written walkthrough
8. Website updated: blog.html + index.html + resources.html + decks.html

---

## NEWSLETTER FORM — HOW IT WORKS

Every page has a newsletter signup form.
It does NOT post to a backend.
On submit it opens `https://aeminsider.substack.com/subscribe?email=...` in a new tab.
The JS is inline at the bottom of each HTML file.
Do not remove it, break it, or move it to an external file.

---

## CONTACT FORM — HOW IT WORKS

The contact form lives on **contact.html** (its own page) and as a "Get in touch" section on
**about.html**. Both are the same `.contact-card` markup (Name / Email / Message).

Delivery is **Formspree** (3rd-party — the site still has no backend of its own). On submit, the
inline JS does an AJAX `POST` to the form's `action` (`Accept: application/json`), then shows an
inline `.cf-ok` / `.cf-err` message — it does not navigate away.

- Endpoint is LIVE: `action="https://formspree.io/f/xrewrplw"` in **both contact.html and about.html**.
  If the endpoint ever changes, update it in both files (they post to the same Formspree form).
- Spam guard: a hidden honeypot field `name="_gotcha"` (`.cf-hp`, off-screen). If filled, JS silently drops it.
- `_subject` hidden field sets the notification email subject.
- Styles are in `site.css` under `/* contact form */`. Copy fallback: `mailto:aeminsider@gmail.com`.

Contact is now in the top nav (Home · About · Blog · Resources · Contact) and the footer "Site"
column on every standard page + the resource viewer pages. `/contact` is in `sitemap.xml`.

---

## HARD RULES — NEVER BREAK THESE

- **Fonts:** Space Grotesk, IBM Plex Sans, IBM Plex Mono only. Never add another font.
- **Colors:** use exact hex values above. Never hardcode a different hex. Use CSS variables from site.css.
- **CSS:** all styles in `assets/site.css`. Never create additional CSS files.
- **JS:** no frameworks. No React, no Vue, no jQuery, no Tailwind. Vanilla HTML/CSS/JS only.
- **anim.js:** do not modify unless specifically asked.
- **External links:** always `target="_blank" rel="noopener"`.
- **Nav and footer:** identical structure on every page. Never change the layout.
- **Newsletter form JS:** preserve exactly at the bottom of every page.
- **No emoji** in UI (except the logo SVG itself).
- **No gradients as decoration.** No particle effects on new elements.
- **Filenames:** all lowercase, no spaces (`about.html`, `resources.html`, `video-3-your-first-aem-maven-project.html`). Case-sensitive on Netlify — a link to `About.html` will 404 against a deployed `about.html`. Every internal link must match the lowercase filename exactly.
- **Tone:** no marketing fluff. Short sentences. Practitioner voice. Use the analogies listed above.
- **Disclaimer:** "Not affiliated with Adobe Inc." wherever relevant.

---

## EXTERNAL LINKS USED ACROSS THE SITE

| Destination | URL |
|---|---|
| YouTube channel | `https://youtube.com/@aeminsider` |
| Substack | `https://aeminsider.substack.com` |
| Email | `aeminsider@gmail.com` |
| AEM Project Archetype (GitHub) | `https://github.com/adobe/aem-project-archetype` |
| Maven download | `https://maven.apache.org/download.cgi` |
| Maven install guide | `https://maven.apache.org/install.html` |
| Maven install article | `https://medium.com/@zorozeri/install-maven-by-setting-up-maven-home-abb4d158fcc6` |

---

## DEFAULT BEHAVIOUR FOR NEW REQUESTS

When asked to make changes to the website:
1. Read this file first
2. Read the specific HTML file(s) you need to change before editing
3. Follow the card/row patterns exactly as shown above
4. Output all changed files
5. Do not commit or push — Vasim does that himself

When asked to build new slide decks:
- Reuse `decks/deck.css` and `decks/deck-stage.js`
- Copy structure from an existing deck, swap content
- Follow the PPT type scale and dark/light rhythm above

When asked to build a PPTX:
- Use pptxgenjs in Node.js
- Use the exact EMU canvas size
- QA with LibreOffice headless → pdftoppm → visual check per slide

---

*Last updated: 29 July 2026 — after EP06 shipped (blog, index with the 3-live cap, resources, decks, tables)*
*Maintained by Vasim Akram — aeminsider@gmail.com*
