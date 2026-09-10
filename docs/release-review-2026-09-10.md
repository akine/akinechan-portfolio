# Release review — 2026-09-10

The owner authorized corrections and production deployment after review.

## Findings and changes

- The audience metric mixed a long Japanese phrase into a numeric display. It now reads `≈20K`, with a follower label and explicit historical, combined-account context. The Japanese description uses an approximate figure; the English copy retains “just under 20,000.” This does not claim 20,000+ followers or a current, deduplicated audience.
- The header offered no direct route to AI/development, although this is a stated strength. Desktop and mobile navigation now link directly to the creative technology section.
- The build toolchain had ten dependency vulnerability findings. Astro and Sharp were upgraded, compatible transitive fixes applied, and the Node requirement recorded. `npm audit` now reports zero findings. HTML whitespace behavior is explicitly preserved across the Astro upgrade.
- Email copying now has a regression check covering successful clipboard access and the visible manual-copy fallback.
- The test runner accepts `PORTFOLIO_TEST_URL`, so the same browser tests can exercise built artifacts and the deployed site rather than only the development server.

- Visual inspection found that intrinsic image heights produced excess black space in the featured gallery after removing the CSS framework reset. An explicit automatic image height now preserves a consistent aspect ratio. A regression test reproduced the issue before the fix.

## Content assessment

The work leads the page, credits identify individual responsibilities, and services connect those credits to concrete tasks. The DeviantArt section contains no artwork or account links; it covers workflows, account operation and commissions. No revenue, production volumes, prices or performance guarantees were invented.

The follower count and other career figures remain owner-provided. Phantom Siita remains conservatively credited as editing because the old page contained conflicting responsibility descriptions. No website review can establish why inquiries or hiring are low without acquisition and conversion data.

## Migration references

Reviewed the official [Astro 6 migration guide](https://docs.astro.build/en/guides/upgrade-to/v6/) and [Astro 7 migration guide](https://docs.astro.build/en/guides/upgrade-to/v7/), including image behavior and HTML whitespace changes.

## Release verification

The release candidate passed:

- Astro type checking: zero errors, warnings, or hints.
- Static production build and dependency audit: successful, zero vulnerability findings.
- Nine browser checks against the production build, including contact navigation, clipboard success/fallback, language persistence, unavailable storage, mobile navigation, WCAG AA automation, no-JavaScript access, AI-section navigation, and stable gallery geometry.
- Visual inspection and image decoding, plus no horizontal overflow at 320, 375, 768, 1024, and 1440 pixels in Japanese and English.

Production targets Cloudflare Pages project `akinechan`, branch `main`, at `https://akinechan.com`. The same browser checks are used for post-deployment validation. Only project source and the review documentation are included; the pre-existing local DNS export is excluded from version control and deployment.

## Production-only correction

The first custom-domain verification exposed Cloudflare email obfuscation rewriting mail links, which broke the no-JavaScript contact route. Scoped `email_off` comments now protect the contact section, following [Cloudflare’s documented per-address exclusion](https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/#prevent-cloudflare-from-obfuscating-email). The zone’s settings were not changed. The built HTML was checked to ensure these comments survive compilation; the no-JavaScript test is rerun on the custom domain after deployment.
