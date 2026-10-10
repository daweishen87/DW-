# Titan → DW redesign evidence

Source route: https://www.titan.com/ → local `/` at http://localhost:3107.

Implementation: `dw-site/src/app/page.tsx`, `globals.css`; SiteNav, ScrollCollage, ProductDetails and Faq components. Content stays in the original site configuration. Original baseline: `5308bf2`.

The imported clone-website skill is at `.agents/skills/clone-website/`, from https://github.com/JCodesMore/ai-website-cloner-template. It guides inspect → build → compare. This existing Next.js app uses the skill without replacing the app with the template's unrelated starter content.

`reference-desktop.png` and `reference-mobile.png` record Titan. `measurements.json` records the observed DOM geometry and fonts. `dw-*.png` record DW at the corresponding viewport and interaction states. Content and media differ deliberately, so pixel-difference scores would be misleading; compare composition, gutters, palette, buttons and section patterns.

Run locally:

```sh
cd dw-site
npm install
npm run dev -- --port 3107
```

Verification commands: `npm run lint`, `npm run typecheck`, `npm run build`.
Browser results: `verification.json`.

Remaining intentional differences: original DW still photography replaces Titan video; Traditional Chinese typography changes line lengths; DW product facts replace financial metrics; founder copy replaces testimonials; care guide replaces resources; shortened collage motion replaces Titan's longer pinned scenes.

Reproduce browser checks with a separate Playwright installation (requires installed Google Chrome):

```sh
npm install --prefix /tmp/dw-verify playwright
PLAYWRIGHT_MODULE=/tmp/dw-verify/node_modules/playwright node verification/browser.cjs
```

Optional `BASE_URL` overrides localhost:3107. Checks exercise real rendered interactions, image decoding, focus confinement and reduced-motion layout.

Workflow source commit: `ee3f5a2f31fd549b9593fa4f7cf6d2955ee593bb`.

Final checks: lint, typecheck and production build passed. Production browser verification passed all four viewports with no page errors, broken images or horizontal overflow. The original configuration and image files are byte-for-byte unchanged. The build retains the pre-existing metadataBase warning because the canonical production domain is not configured in the repository.
