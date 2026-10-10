# DW — Titan visual adaptation

Reference: https://www.titan.com/ (inspected 2026-10-10)
Workflow: https://github.com/JCodesMore/ai-website-cloner-template, portable clone-website skill.

## Scope
Rebuild DW's `/` landing page using Titan's visual composition with the original DW product copy, photographs, pricing, links, and disclosures. The content source is `dw-site/src/config/site.ts` and the original page at commit `5308bf2`. Every product image remains from `dw-site/public/images/`.

## Observed design
- Paper #fdfefa, near-black #12100e, soft surface #f6f7f3, divider #e2e2de, muted text #595755.
- Desktop 1440px viewport: 124px left/right gutters, 1192px content width. Hero occupies 90vh; mobile hero approximately 75vh.
- Titan uses Neue Montreal regular, 24px/30px hero copy, 48px/60–66px section headings. DW adds Noto Sans TC for Traditional Chinese and allows its longer line height.
- Oversized serif wordmark over a full-bleed hero image. DW wordmark is text; its original image logo appears in navigation and signatures.
- Buttons: 52px tall, fully rounded, neutral black/white, 24px gaps. Photo containers: 16px radii.
- Large whitespace, centered section introductions, horizontal detail tabs, asymmetric text/photo panels, four-column facts, thin-rule FAQ accordions.
- Fixed navigation changes from transparent over hero to paper background below it. Full-screen menu, dismissible by Escape.

## DW section mapping
1. Titan hero → original DW training photo, product introduction, preorder and product anchor.
2. Company logo strip → DW tagline, construction labels, original logo.
3. Wealth statement / four metrics → founder introduction and four verified product facts.
4. Sticky service collage → DW product/training collage with continuous scroll-driven scale.
5. Service tabs → design, logo, thumb loop, daily training; real tab and keyboard states.
6. Wide media → original gym-grip image.
7. Testimonials → original founder statement and training portrait (no invented testimonials).
8. Featured offering → Founder Edition / numbered card / price / preorder.
9. Resources → care photography and original five-step care guide.
10. FAQ → original 14 questions including three explicitly pending answers.
11. Closing CTA → original gym photo and DW LINE community invitation.
12. Footer → existing page anchors and original purchase/community destinations.

## Responsive and motion
Mobile uses 24px gutters, stacked panels, a two-column fact grid and horizontally scrollable accessible tabs. The collage is static on mobile; reduced-motion disables transformations and smooth scrolling. The hero uses a still DW photograph because the repository contains no video. Titan's long pinned cinematic transitions are shortened for DW's smaller content set; do not claim pixel identity.

## Assets
Original DW photographs only. The Latin font was downloaded from the observed Titan font URL: https://www.titan.com/_next/static/immutable/media/PPNeueMontreal_Regular-s.p.1ay8-kr57yk6u.otf → `dw-site/public/fonts/PPNeueMontreal-Regular.otf`. Chinese font: Google Fonts Noto Sans TC. No Titan logo, investment claims, product illustrations, or financial content.

## Verification
Run build, lint, typecheck, then browser checks at 320, 390, 1440, and 1920px. Test menu and Escape, tab arrows, FAQ toggle, image loading, no horizontal overflow, and original outbound destinations. Keep screenshot evidence in `docs/research/titan/`.
