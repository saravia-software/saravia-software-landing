# Saravia Software

The official Saravia Software landing page, built with React, TypeScript, Vite, and Tailwind CSS. Its primary public URL is `https://saraviasoftware.com/`.

## Development

Requires Node.js 22.12 or later. If you use nvm, run `nvm use` before installing dependencies.

```bash
npm install
npm run dev
npm run lint
npm run build
```

The build generates `dist/index.html` with the main sections already rendered as HTML. React hydrates that content to enable the menu, language switcher, and other interactions. The published HTML starts in Spanish; a previously saved English preference is applied in the browser.

## SEO and brand assets

- `index.html` includes the title, description, canonical URL, Open Graph and Twitter/X Card metadata, and `Organization` structured data without relying on JavaScript.
- `public/robots.txt` allows crawling and points to `https://saraviasoftware.com/sitemap.xml`.
- `public/sitemap.xml` contains only `https://saraviasoftware.com/`.
- `public/favicon.svg` uses the brand symbol; `public/apple-touch-icon.png` reuses the supplied official logo.
- `public/og-image.png` is a 1200 × 630 social preview made from the supplied brand image. It preserves the original logo and typography, and is served at `https://saraviasoftware.com/og-image.png`.

The hero and example illustrations are built with HTML, SVG, and CSS. DM Sans, Manrope, and Geist Mono load from Google Fonts. The official WhatsApp and Instagram URLs are configured in `src/config.ts`.

## Vercel

Import this directory as a Vite project. Use `npm run build` as the build command and `dist` as the output directory.

## Google Search Console Setup

1. Deploy the site to Vercel.
2. Connect `saraviasoftware.com` to the project.
3. Confirm that `https://saraviasoftware.com/` loads the final version over HTTPS.
4. Add the `saraviasoftware.com` domain property in Google Search Console.
5. Verify ownership, preferably through DNS if Google requests it. No verification code is configured in advance.
6. Open **Sitemaps** and submit `https://saraviasoftware.com/sitemap.xml`.
7. Use **URL Inspection** for `https://saraviasoftware.com/` and request indexing after the final home page is live.
8. Validate the `Organization` structured data in production with **Google Rich Results Test**.

## Manual checklist after deployment

- [ ] Connect `saraviasoftware.com` in Vercel and confirm HTTPS works.
- [ ] Add and verify the domain in Google Search Console.
- [ ] Submit `/sitemap.xml` and request indexing for the home page.
- [ ] Validate `Organization` with Google Rich Results Test and review the social preview with the published `og-image.png`.
