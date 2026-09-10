# Kojo Akine — Portfolio

Requires Node.js 22.12 or newer; `.node-version` selects Node 24 for hosted builds.

Bilingual portfolio for [akinechan.com](https://akinechan.com), built with Astro and deployed as a static site. Selected film credits lead into services, creative technology projects, background, and direct contact.

## Development

```sh
npm ci
npm run dev
npm run build
npm run preview
npm test
npm run check
```

The development server runs at `http://localhost:4321`. Browser tests use installed Google Chrome (`channel: 'chrome'`); install Chrome before running them. Tests start the development server automatically when needed.

## Content and behavior

- `src/pages/index.astro`: page composition and bilingual editorial copy.
- `src/data/portfolio.ts`: typed project credits, services, and localized email templates.
- `src/components/Text.astro`: Japanese-first, progressively enhanced bilingual text.
- `src/scripts/portfolio.ts`: language preference, mobile navigation, manual gallery, and email copying.
- `src/styles/global.css`: responsive visual system and reduced-motion behavior.

Work links open the original publications. Contact links open the visitor’s email client; no form submission service or contact analytics is configured. Video studies play only when the visitor uses the controls. Core work and contact content is available without JavaScript. Local storage and clipboard access are optional enhancements. Keep the `email_off` HTML comments around the contact section: they prevent Cloudflare from rewriting the public mail links into JavaScript-dependent links.

The visual system uses plain CSS. Run `npm run format` to format source files. With the development server running, `npm run generate:og` regenerates the 1200 × 630 social preview from the implemented hero.

## Updating credits

Keep project names, individual responsibilities, and personal experiments distinct. The EXILE credit covers screen visuals for “WON’T BE LONG” at the Fukuoka dome show, not the entire tour. The Phantom Siita credit currently uses editing, the responsibility shared by the previous conflicting descriptions. Confirm any expanded credit with the owner before adding it.

Existing output counts, view counts, and career history are owner-provided portfolio facts; avoid turning historical results into performance guarantees. No fees, response-time promises, or immediate availability should be added without confirmation.

## Release

`npm run build` writes the static site to `dist/`. Production is the `main` branch of Cloudflare Pages project `akinechan`, serving `akinechan.com` and `www.akinechan.com`. GitHub pushes to `main` trigger a production build.

Before release, run `npm run check`, `npm audit`, and the browser tests against the production build:

```sh
npm run build
npm run preview -- --host 127.0.0.1 --port 4322
PORTFOLIO_TEST_URL=http://127.0.0.1:4322 npm test
```

After deployment, the same tests can target `PORTFOLIO_TEST_URL=https://akinechan.com`. They read the site and exercise local browser behavior; they do not send emails or submit data. An authorized manual release can use `npx wrangler pages deploy dist --project-name akinechan --branch main`.
