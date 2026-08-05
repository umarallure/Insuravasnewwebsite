# Application Map

## Routes And Features

```text
Marketing Shell
├── /
│   └── redirects to /sales-ai
├── /sales-ai
│   └── features/marketing
├── /back-office-ai
│   └── features/marketing
├── /compare
│   └── features/marketing
├── /demo
│   └── features/marketing
├── /testimonials
│   └── features/marketing
├── /compliance
│   └── features/marketing
├── /affiliates
│   └── features/marketing
├── /get-started
│   └── features/marketing
└── /design-system
    └── components/shared and components/ui showcase

Authentication
└── /login
    └── features/auth
```

The screenshots describe one public product website plus one auth surface. Public pages belong to a single `marketing` feature because they share a domain, visual system, layout shell, footer, CTAs, product mockup components, proof cards, pricing patterns, and forms.

## Shared Application Shell

- Public shell: sticky top header, centered content rail, thin vertical borders, dark background, shared footer, and cookie consent bar.
- Auth shell: centered card layout, logo, compact footer text, no marketing navigation.
- Root layout: global providers, global styles, metadata, and font setup.

## Sidebar Navigation Groups

The screenshots do not show a dashboard sidebar. The visible navigation is a top public navigation:

- Product: Sales AI, Back Office AI, Compare.
- Proof and education: Demo, Testimonials, Compliance, Affiliates.
- Account actions: Log in, Start free trial.

No sidebar is implemented for the public pages because none is visible. The architecture leaves `src/components/layout` ready for future dashboard shell work.

## Header Behavior

- Desktop: logo on the left, centered compact navigation links, account buttons on the right.
- Active route: brighter text and stronger weight.
- Mobile and tablet: logo remains visible, navigation collapses into a drawer button, account actions move into the drawer.
- Header is sticky with a translucent dark surface and bottom border.

## Shared Page Layouts

- `MarketingPageShell`: wraps public pages with header, bordered rail, footer, and cookie banner.
- `MarketingHero`: centered eyebrow badge, title, description, optional actions, optional visual mockup.
- `MarketingSection`: consistent vertical rhythm and border-top section divisions.
- `SplitSection`: copy and mockup side-by-side on desktop, stacked on mobile.
- `CTASection`: short conversion section with heading, supporting quote/copy, and one or two actions.

## Shared Table Patterns

- Comparison matrix uses shared table primitives and typed row groups.
- Product mockup tables use reusable `ProductWindow` with row, badge, and status rendering.
- Mobile behavior favors horizontal scroll for dense comparison data and card summaries for quick scanning.
- Loading states use table-shaped skeleton rows.
- Empty states distinguish no data from filtered no results.

## Shared Form Patterns

- React Hook Form controls with Zod schemas.
- Shared `Input`, `Checkbox`, `Button`, and form message styles.
- Form submission exposes loading, success, and error feedback.
- Required fields are labeled.
- Consent fields use visible checkboxes and readable legal copy.
- The demo and affiliate forms use separate feature schemas and service functions.
- Login uses the auth service boundary and password visibility button.

## Shared Filters

- The current screenshots show comparison category pills and navigation/filter-like section rails.
- These are implemented as reusable pill/tabs patterns so future filter bars can share the same selected state styling.
- URL-driven filters are not required by the current screenshots because there are no searchable list pages.

## Shared Cards

- Stat cards: numeric value plus caption.
- Feature cards: eyebrow/order, title, description.
- Pricing cards: plan label, price, interval, included features, and CTA.
- Testimonial cards: outcome heading, quote, person, role, and "See the text" action.
- Product window cards: app-like mock UI with title bar and responsive content area.

## Shared Status Badges

- Included, partial, not offered, active, booked, in force, pending, lapsed, green/yellow/red risk, disclosure locked, consent on record.
- Badges are token-driven, not hardcoded by color.
- Status is indicated by both text and icon/shape, not color alone.

## Shared Modal Patterns

- Testimonial "See the text" links open an accessible modal with the original visible quote.
- Modal supports Escape, backdrop click, focusable close button, and clear title.
- Future destructive actions should use the same modal foundation with confirmation-specific copy.

## Shared Responsive Behavior

- Content rail uses `min(100%, var(--layout-page-max))`.
- Page padding reduces on mobile.
- Header navigation collapses below tablet width.
- Two and four-column grids collapse to two columns and then one column.
- Forms stack on narrow screens.
- Product windows scale with `aspect-ratio`, `overflow-x-auto`, and fixed control dimensions.
- Dense comparison table remains scrollable instead of losing columns.
- Cookie banner anchors to the viewport bottom and wraps actions without covering important controls.

## Data Access Structure

- Static content is typed and stored under `features/marketing/data`.
- Feature services return async data shapes so the UI can switch to real APIs later without moving fetch logic into components.
- React Query provider is included at the app level for future server state.
- Global `apiClient` and response/error types exist for future backend integration.

## Feature Grouping

```text
features/marketing
├── components
│   ├── public-site-header.tsx
│   ├── public-site-footer.tsx
│   ├── cookie-banner.tsx
│   ├── marketing-hero.tsx
│   ├── product-window.tsx
│   ├── stat-strip.tsx
│   ├── cta-section.tsx
│   ├── comparison-matrix.tsx
│   ├── demo-call-form.tsx
│   ├── affiliate-application-form.tsx
│   └── page-specific composition components
├── data
│   └── marketing-content.ts
├── services
│   └── marketing.service.ts
└── types
    └── marketing.types.ts

features/auth
├── components
│   └── login-form.tsx
├── schemas
│   └── login.schema.ts
├── services
│   └── auth.service.ts
└── types
    └── auth.types.ts
```

## Assumptions

- No backend or API contract is present, so submission actions validate locally and return typed mock service responses.
- There is no screenshot for `/pricing`; the visible pricing content is implemented at `/get-started`.
- Header and footer links only create routes that are present in the screenshots. Non-screenshot business pages can be added later using the same shell.
