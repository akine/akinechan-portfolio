# Portfolio review — 2026-09-10

## Finding

The old portfolio contained substantial work, but made prospective collaborators read an introduction, career history, and generic skills before seeing it. Several projects appeared multiple times, while apps and experiments competed with the commercial film credits. The reader had to infer which work to offer and how to start a useful conversation.

This is a review of presentation and usability. Without traffic, acquisition, inquiry, or hiring data, the website cannot establish why work has been difficult to find. The redesign makes the portfolio easier to evaluate; it does not establish a conversion lift or guarantee employment.

## Implemented

1. A new ivory, charcoal, and lime visual system puts original work at the center. The first screen presents the filmmaker’s name, useful scope, an EXILE visual, and links to work and contact.
2. Selected projects appear before biography and service descriptions. A dedicated EXILE gallery preserves the uncropped screen layouts; the hero uses an editorial crop. Every selected project includes personal responsibilities and an original publication link where available.
3. Three concrete service areas cover film direction/editing, stage creative direction, and AI/development. Software is curated around production tools rather than presented as an undifferentiated inventory. Existing secondary film links remain in expandable credits.
4. A prominent contact section supports project work, ongoing contracts, and part-time team roles. The email template prompts for scope, timing, budget, references, and sender details. A visible address, copy control, and existing phone contact provide alternatives.
5. English translation remains available, with failure-tolerant preference storage. Gallery controls are manual and keyboard-operable, mobile navigation removes hidden links from focus, videos have native controls, and reduced motion is respected. README and metadata were aligned with the implementation.

## Credit and copy decisions

- The previous Phantom Siita sections disagreed between direction and editing. The replacement uses **editing**, the narrower documented credit. Confirm before expanding it.
- The EXILE credit stays scoped to screen visuals for “WON’T BE LONG” in Fukuoka. It does not imply sole production or a direct contract with the artist.
- Historical 50+ projects, one million views on each platform, ten years of teaching, and five years of engineering remain based on the owner’s existing copy. These figures have not been independently audited.
- Claims such as guaranteed million-view capability, exceptional retention without a metric, and universal AI capabilities were removed. Three-day delivery is described only as the outcome of a specific project.
- Immediate availability and a 24-hour response promise were replaced with an invitation to discuss the actual schedule. No pricing or new contractual commitments were invented.
- Food visuals are explicitly AI-generated personal work. SceneScope remains labeled in development.
- The direction provisionally follows the current site’s emphasis on film while retaining a substantial AI/development section. The owner was asked which kind of work to prioritize; no answer was available during implementation.

## Verification

- A browser test failed against the original site before implementation (missing main landmark).
- Production build succeeds; Astro type checking reports zero errors, warnings, or hints. The unused Tailwind integration was removed after the new plain-CSS design exposed conflicting Vite plugin types.
- Six end-to-end checks pass: work/contact navigation, keyboard gallery, English persistence and unavailable storage, mobile navigation, automated WCAG AA audit, and no-JavaScript access.
- Browser inspection at 320, 375, 768, 1024, and 1440 pixels found no horizontal overflow in Japanese or English.
- All image elements decoded successfully during the visual review. Desktop and mobile screenshots were inspected.
- Automated accessibility checks are not a substitute for assistive-technology user testing.

## Release and remaining evidence

The initial local redesign was reviewed before publication. The owner subsequently authorized production deployment; see the release review for the final state. External videos and credits remain dependent on their host services. Email composition is verified; no message was sent.

Before interpreting inquiry volume, collect actual traffic-source and inquiry data. A role-specific introduction for outreach can then link directly to `#works`, `#skills`, or `#lab` depending on the recipient.

The initial dependency findings were resolved in the subsequent release review. See [release review](release-review-2026-09-10.md) for the validated framework upgrade and release checks.

## Creator operations addition

At the owner’s request, the creative technology section now includes a text-only DeviantArt operations case study: three accounts, a combined following of just under 20,000 during operation, ComfyUI workflow development, MiniMax use, and ongoing commission production. These facts were provided by the owner in this session. The audience figure is historical and combined; it is not represented as a current count or a deduplicated audience. No DeviantArt artwork, account links, revenue figures, or unverified production volumes were added. Existing food visual studies remain separate.
