# Aldo Marcelino — Portfolio

An editorial, dual-theme portfolio built with Next.js 16.0.7, React 19, TypeScript, and Tailwind CSS 4. Fonts are bundled locally. No external image requests, backend, or animation dependencies.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000. Production: `npm run build && npm start`.

## Edit content

- `src/data/profile.ts`: summary, contact links, résumé, and grouped skills.
- `src/data/projects.ts`: add an object to `projects` to create another card. Types live in `src/data/types.ts`. Optional `liveUrl` and `sourceUrl` render links only when supplied.
- `src/data/experience.ts`: add an object to `experiences`; the timeline automatically adapts.
- `public/Aldo-Marcelino-CV.pdf`: replace to update the downloadable résumé.
- `src/app/page.tsx`: editorial copy and engineering approach.
- `src/app/globals.css`: design tokens, layout, responsive rules, and motion.

Project previews are explicitly labeled CSS concepts, not screenshots of the original products. Add authentic screenshots when available. Current preview variants are `streaming` and `marketplace`; extend the `Project` type and `Preview` component for a new visual. All work history and project facts come from the supplied CV. The current role/date reflects the CV and should be reviewed before publishing. No job availability status is assumed.

## Design and interactions

Charcoal `#131512`, off-white `#efefe7`, acid lime `#d2f780`. Manrope Variable for interface typography; Instrument Serif for editorial emphasis. Responsive layouts at desktop, tablet, and mobile sizes. Editable rotating headlines live in `src/data/headlines.ts`. They change every 5.5 seconds, offer manual selection and a pause/play control, and stop autoplay for reduced motion, hidden tabs, or when the headline is off screen. The heading keeps a stable screen-reader label and reserves space for all phrases to avoid layout jumps.

Hero layer tabs support arrow keys, Home, and End. Project notes use native accessible HTML. Experience allows at most one open item at a time; selecting another automatically closes the previous one. Clicking the active item closes it. Experience items use accessible buttons with `aria-expanded`, inert collapsed panels, and reversible CSS grid height transitions. Navigation supports Escape on mobile. The header résumé link uses a lime sweep and sliding hover label (interaction adapted from e-coders on Uiverse). Hover styles also apply to keyboard focus; reduced motion disables the transitions. CSS entrances, scroll reveals, and hover feedback respect reduced motion. Anchor navigation uses native scrolling.

The first visit defaults to dark, regardless of the system theme. The sun/moon button in the navigation saves an explicit choice in local storage (`portfolio-theme`), and theme changes sync across tabs. A small inline head script selects the theme before paint to avoid a color flash. Warm off-white and olive tokens live beside the dark tokens in `globals.css`.

The hero combines a pointer-reactive dot field, ambient light, and animated signals through its system diagram. An oversized outline “ALDO MARCELINO” sits behind the content and is revealed only inside the pointer spotlight. It fades out on pointer leave or window blur, is decorative and hidden from assistive technology, and stays disabled on touch and reduced motion. Pointer feedback uses requestAnimationFrame and CSS variables, without React updates on every movement. Touch devices use the ambient visual without pointer tracking. Reduced motion disables the animated signals and pointer response. Supporting copy is 14–16px, with larger navigation, metadata, and skill labels.

The About signature repeats the spotlight discovery interaction with a custom SVG musical-note motif behind and beneath Al1. Its local pointer coordinates are independent of the hero, and it is disabled on touch devices, small screens, and reduced motion.

Click the musical-note area (or use its keyboard-focusable button) to play a locally bundled recording of piano C4 / do, trimmed to 3.2 seconds with a gentle fade-out. Audio is fetched only on interaction, at a restrained volume, with no autoplay or additional audio library. Repeated clicks restart the same note instead of stacking playback. On small screens, a compact tap-to-play control replaces the hover area. Sample attribution is in `public/audio/ATTRIBUTION.txt`.

## Personal mark

The geometric `Al1` monogram spells Aldo as **Al + 1**, with **1 = do**, the first scale degree in numbered musical notation. Its three custom strokes represent A, lowercase l, and 1; a short underline gives the tonic a visual anchor. The shared React mark is in `src/components/icons.tsx`, the reusable SVG in `public/brand/al1-mark.svg`, and the matching favicon in `src/app/icon.svg`.

## SEO and launch configuration

SEO copy is centralized in `src/data/seo.ts`. The portfolio includes server-rendered title/description and author metadata, Open Graph and Twitter cards, ProfilePage/Person JSON-LD based on verified profile data, a generated 1200 × 630 sharing image at `/social-image`, and Next.js metadata routes for `/robots.txt` and `/sitemap.xml`. The main variable font is self-hosted and preloaded through `next/font/local`; editorial fonts remain self-hosted and load only when needed.

There is no assumed production domain. Until `SITE_URL` is configured, canonical URLs, absolute sharing-image metadata, WebSite schema, and sitemap URLs are omitted instead of inventing a domain or publishing localhost links. The empty sitemap is intentional. Development and Vercel preview pages emit `noindex`; production pages allow indexing. Robots allows crawling so search engines can read these page-level directives.

When a final domain is ready:

1. Copy `.env.example` to `.env.local` for local production testing, or set the same variables in the hosting dashboard.
2. Set `SITE_URL` to the final HTTPS origin, with no path, query, or fragment. Build again after changing this value.
3. Optionally set `GOOGLE_SITE_VERIFICATION` to a real Search Console HTML verification value. No verification code is fabricated.
4. Deploy, verify the domain in Google Search Console, and submit `/sitemap.xml`.
5. Check the deployed URL with Search Console URL Inspection, Google's Rich Results Test, and PageSpeed Insights. Review actual mobile Core Web Vitals once field data is available.

Only the homepage is included in the sitemap: `#projects`, `#about`, and other sections are fragments of the same page. No fictitious modification dates, ratings, or achievements are added to schema. Unique project case-study pages with authentic screenshots, technical decisions, and outcomes are the next content improvement when that material is available.

References: [Google title guidance](https://developers.google.com/search/docs/appearance/title-link), [profile structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page), [sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap). These changes improve technical readiness; they do not guarantee rankings or a specific audit score.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

Before public deployment, review contact details and role dates, configure `SITE_URL` and supply authentic project links, and update Next.js to the latest compatible security patch. The requested 16.0.7 version is pinned for this foundation.
