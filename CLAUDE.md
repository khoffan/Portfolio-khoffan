# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Single-page personal portfolio for Khoffan Leemanan. Plain static HTML/CSS/vanilla JS — there is no package.json, build step, bundler, linter, or test suite. It is deployed to Vercel at `https://portfolio-khoffan.vercel.app/` (no `vercel.json`; the repo root is served as-is).

To preview locally, open `index.html` directly or serve the root with any static server (e.g. `python -m http.server`).

## Architecture

The whole site is three files that work together:

- `index.html` — all markup, plus an inline `<script>` at the bottom (mobile menu, contact form, project-card click handlers).
- `style.css` — all styling; theme tokens are CSS variables in `:root`. Responsive breakpoints at 991px and 768px.
- `asset/js/i18n.js` — EN/TH translation dictionary and runtime, exposed as `window.i18n` (`t`, `setLocale`, `locale`).

### Rule: where JavaScript goes

- By default, write JS inline in the `<script>` at the bottom of `index.html`, next to the HTML it drives. Don't create separate JS files for small behaviors.
- Move it to its own file only when the JS is too large for the inline script (for example, a big data dictionary or a self-contained module like `i18n.js`). Put the file in `asset/js/<name>.js` and load it with `<script src="asset/js/<name>.js"></script>` **before** the inline `<script>`, so the inline code can use what the file exposes (e.g. on `window`).

### i18n is the source of truth for visible text

On `DOMContentLoaded`, `i18n.js` walks the DOM and overwrites content based on attributes:

- `data-i18n` → `textContent`
- `data-i18n-placeholder`, `data-i18n-alt`, `data-i18n-title`, `data-i18n-href` → the matching attribute
- `data-i18n-mail-subject` → rewrites `href` to a Gmail compose URL with a translated subject
- `meta.title` key → `document.title`

Consequences when editing content:

- **Change copy in `i18n.js`, not only in `index.html`.** The HTML text is just a pre-JS fallback (useful for SEO/no-JS) and is replaced at runtime. Keep the HTML fallback in sync with the `en` strings when you change copy.
- Experience timeline keys are named per employer (`experience.<employer>.date/title/company/p1`), not by position, and entries are ordered newest first in the HTML. To add a job, add a new `.timeline-item` at the top and a matching key under both `en` and `th`.
- Because `data-i18n` sets `textContent`, inline markup like `<strong>` in the HTML fallback is stripped once translations apply. Translation strings are plain text.
- Lookup order is `translations[locale]` → `translations.en` → the key string itself. The `th` dictionary intentionally omits many keys (e.g. project `role` and `tech.N`), which fall back to English. A typo'd key renders the raw key on the page.
- When adding a new translatable element, add the key under `en` (required) and `th` (optional), then tag the element with `data-i18n="section.key"`.
- Locale detection: `localStorage.locale` → browser language starting with `th` → `en`. `html[lang="th"]` switches the body font to Sarabun (see `style.css`).
- In the `th` object, `contact` is declared twice; the second declaration wins, so the Thai `mailSubject` is lost and falls back to English.
- Some translation groups (`purchase`, `portfolio`, `skilllevel`, `experience.bullets`, `pages`, `skills.*.items`) are leftovers from the older multi-page layout and aren't referenced by `index.html`.

### Project cards and external behavior

- Project cards without a screenshot use `<div class="project-image project-image--placeholder">` containing a Material Symbols icon instead of an `<img>` (styled in `style.css`). Swap in an `<img>` once a screenshot exists in `image/contents/`.
- Project cards that link to a live app are made clickable in the inline script by element `id` (`project-jodnid`, `project-molldini`, `project-autoh`) using `window.open`. Adding a link to another card means giving it an `id` and adding a listener there.
- The contact form (`#my-google-form`) POSTs `FormData` to a Google Apps Script web app URL defined in the inline script. The response is not inspected — any completed fetch shows the success alert.

## Assets and SEO files

- Images live under `image/` (`contents/` for project screenshots and the profile photo `รูปถ่าย.jpg`, `icon/` for favicons). The Thai filename is referenced by the hero `<img>`, and as an absolute percent-encoded URL by `og:image`, `twitter:image`, and the JSON-LD `image` in `<head>` — keep all of them in sync if renamed.
- SEO lives in `<head>`: description/keywords, canonical URL, Open Graph/Twitter tags, and a schema.org `Person` JSON-LD block. The `<title>`, `og:title`, and `twitter:title` should match `meta.title` (en) in `i18n.js`, which overwrites `document.title` at runtime. Update `knowsAbout`/keywords when the skills or projects change, and bump `<lastmod>` in `sitemap.xml`.
- `KHOFFAN-resume-thai.pdf` is linked from the nav by filename; update the resume by replacing the file in place.
- `robots.txt` and `sitemap.xml` hardcode the Vercel domain. `google69a3806d4f00fee6.html` is a Google Search Console verification file and must stay at the root unchanged.
