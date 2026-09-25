# Silicon Infotech Website

Detailed requirements and implementation plan for the Silicon Infotech Pvt. Ltd. marketing site (domain: siliconinfotech.ind.in). The project targets a minimalist, conversion-focused experience with clear CTAs, smooth scrolling, and consistent visual language.

## Project Goals
- Lead generation first: highly visible CTAs and inquiry paths on every key page.
- International credibility: clean, spacious layouts, neutral imagery, and subtle motion.
- Consistency: shared components, repeatable layouts, and uniform navigation/footer.
- Accessibility and performance: strong contrast, responsive design, and lightweight interactions.

## Tech Stack Notes
- Framework: Next.js (App Router) with Tailwind CSS, TypeScript, and Radix UI components.
- Structure: `app/` routes for pages, shared layout, and reusable components; continue mapping requirements to the existing Next.js stack.

## Brand & UX Foundations
- Palette: Primary Royal Blue `#1E3A8A`, Accent Aqua `#2DD4BF` for CTAs/links, Charcoal `#2E2E2E` text, Light Gray `#F9FAFB` + white backgrounds.
- Typography: Clean sans-serif (e.g., Montserrat/Open Sans/Lato). Bold headings, regular body, generous line spacing, scalable sizes per breakpoint.
- Layout: Generous whitespace, grid/flex layouts with 12-col rhythm, full-width sections, scroll-snap/smooth scroll on long pages, sticky header.
- Motion: Subtle fade/slide-in on scroll, light hover states, optional parallax in hero (disable/simplify on mobile or with prefers-reduced-motion).
- Imagery: High-quality tech/infrastructure visuals, consistent treatment (desaturation/overlay if needed), simple line/flat icons in primary/accent colors.

## Global Structure
- Header: Sticky, transparent over hero then solid on scroll; logo left, nav right; Services dropdown listing 8 categories; optional accent CTA button; scrollspy highlight for sections.
- Mobile nav: Hamburger toggles slide-out/overlay menu; smooth-scroll to anchors; auto-close on selection.
- Footer: Multi-column layout with quick links, services links, contact details, social (LinkedIn/Facebook), privacy policy link, copyright line; consider darker background for contrast.

## Pages & Section Requirements
- Home
  - Hero: Full-height banner (image/video or gradient with subtle pattern/parallax), concise headline/tagline, primary CTA (accent), secondary “Explore Services”, scroll cue.
  - Intro/About blurb: Short mission/value summary with optional image/stats.
  - Services overview: Grid of 8 service cards (icon, title, one-liner, link to detail).
  - Why Choose Us: 3–4 differentiators with icons and short text.
  - Process: 4-step timeline (Discover, Design, Implement, Maintain).
  - Industries served badges.
  - Case studies/Success stories preview (cards with image, title, client, results).
  - Testimonials (carousel or grid).
  - CTA banner leading to Contact/consultation.
  - Footer.
- About
  - Mission & Vision statements.
  - Company story/timeline.
  - Team snapshot (leadership cards or group image).
  - Optional values list and careers callout/placeholder.
- Services
  - Services landing: Intro plus list/grid of all categories with brief blurbs and “Learn more” links.
  - Eight service detail pages (uniform template):
    - Hero/banner with title and tagline.
    - Overview paragraph.
    - Sub-services with icons (grid or accordion).
    - Technologies/brands and optional industries served.
    - Service-specific CTA (“Contact us for {service}”).
    - Optional cross-links to other services.
- Case Studies (optional)
  - Grid/list of projects with image, title, client, one-line summary, and link. Optional filters by category/industry. Placeholder “Coming soon” acceptable initially.
- Careers (optional)
  - Intro, current openings list (accordion or cards), benefits/why-join highlights, general-application CTA or email, “Coming soon” fallback.
- Contact
  - Contact form: Name, Email, Message (Phone/Company optional). Accent submit button, validation and clear success/error states, spam protection (honeypot/reCAPTCHA).
  - Contact details: Address, phone, email, hours, social links.
  - Map embed (Google Maps or static map), likely full-width below form/info.
  - Brief inviting header.
- Legal
  - Privacy Policy page linked from footer; cookie consent banner maintained for compliance.

## Reusable Components
- Hero variants (home hero with optional slider/video, compact internal hero).
- Buttons: Primary (accent solid), Secondary (outline/text), consistent hover/focus states.
- Cards: Service cards, case study cards, testimonial cards, stat cards.
- Icon list items for features/values/contact info.
- Accordion for sub-services/FAQs/openings.
- CTA banner component (text + button, colored or outlined variant).
- Navigation (desktop + mobile) and footer modules.
- Slider/carousel for hero, testimonials, or case studies (Embla/Swiper or custom).
- Back-to-top button (optional) and scrollspy for long pages.
- Form controls with shared styling and validation messaging.

## Responsive & Accessibility
- Mobile-first styles; collapse multi-column layouts to single column; ensure touch targets >=44px.
- Hamburger menu for small screens; smooth scroll with header offset.
- Reduce/disable heavy motion on prefers-reduced-motion; avoid parallax on mobile if janky.
- Contrast-checked palette; avoid using accent for long-form text; clear focus states.
- Semantic HTML with labels/aria for nav, accordions, forms, icons; skip-link for main content.
- Responsive media (srcset/lazy-loading); test at 200% zoom and across breakpoints.

## Performance & Analytics
- Optimize media (compress, lazy-load, serve appropriately sized assets).
- Use Next bundling and code-splitting; tree-shake icons and leverage `next/image`.
- Consider CDN for static assets; cache headers via hosting platform.
- Integrate analytics (e.g., Vercel/GA) and basic event tracking on key CTAs/forms.

## Implementation Plan (Next.js baseline)
1) Align stack: confirm Next.js App Router setup, Tailwind tokens, and Radix usage across components.
2) Design tokens: define CSS variables/Tailwind config for palette, fonts, spacing, radii, shadows, motion durations; set global typography and container widths.
3) Layout shell: build `<Layout>` with sticky header (desktop dropdown + mobile drawer) and footer with required link columns and social icons.
4) Home page: implement hero (image/video/parallax option), intro, services grid, why-choose-us, process timeline, industries badges, case studies preview, testimonials, and CTA banner with scroll-snap behavior where desired.
5) About page: mission/vision section, story/timeline, team snapshot, values (optional), careers teaser.
6) Services: landing page with category list; create reusable service-detail template; populate all eight categories with sub-services, tech/brands, industries, and service-specific CTAs.
7) Case Studies: add listing page with cards; allow placeholder/coming-soon state; wire optional detail page template for future expansion.
8) Careers: add intro, openings accordion/cards (or “Coming soon”), benefits highlights, and general-application CTA/email.
9) Contact: build form with validation, spam protection, success/error feedback; add contact info block, map embed, social links; ensure anchor targets for CTAs.
10) Shared components: hero variants, cards, CTA banners, accordions, badges, slider/carousel, back-to-top, scrollspy hooks.
11) Motion & a11y: implement scroll animations with graceful degradation (respect prefers-reduced-motion), keyboard nav for dropdowns/accordions, focus styles, and high-contrast checks.
12) Assets & content: source/optimize imagery (hero, services, case studies, team), select consistent icon set, finalize copy per section.
13) QA & testing: run lint/type checks, cross-browser and responsive audits, Lighthouse/performance pass, a11y scan; verify forms (success/failure/invalid states) and anchor/scroll offsets.
14) Deployment: configure environment variables (e.g., form handlers, analytics keys), set build/deploy pipeline (e.g., Vercel), and post-deploy smoke tests.

## Local Development (current stack)
- Install deps: `pnpm install`
- Run dev server: `pnpm dev`
- Lint: `pnpm lint`

## Acceptance Checklist (condensed)
- All pages/sections above present with required CTAs and navigation/scroll behaviors.
- Palette, typography, spacing, and iconography match brand guidance; consistent components reused.
- Responsive across breakpoints; header/footer and menus functional on mobile.
- Forms validate and submit with user feedback; anti-spam in place.
- Accessibility basics met (contrast, labels, focus, reduced motion); performance optimized for fast loads.
