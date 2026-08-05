# Screenshot Inventory

This inventory is based on visual inspection of every screenshot in `.agents/skills`. Filenames were not used as the source of page meaning, only as the original file reference.

## 1. Sales AI Product Page

Screenshot:
`.agents/skills/screencapture-orionaisolutions-ai-sales-ai-2026-08-05-16_29_41.png`

Inferred page:
Sales AI

Inferred page purpose:
Public product page explaining how INSURVAS works aged leads through SMS, email, voice, booking, campaigns, call handling, sold-policy mining, and compliance.

Proposed route:
`/sales-ai`

Main visible sections:
- Sticky dark public header with INSURVAS logo, product navigation, Log in, and Start free trial.
- Hero with label "Sales AI", headline "Your leads, worked to the end.", supporting copy, and a large conversation/product mockup.
- Four-number stat strip: calls per day per agent, contact volume, added monthly production, and agents on INSURVAS.
- CTA strip: "Put Ashley on 50 of your aged leads this week."
- Product walkthrough sections with a left mini table of contents and repeated copy plus product UI windows.
- Sections for handled leads, inbound email booking, campaign scheduling, live dialer, campaign persistence, email drip builder, sold-policy monitoring, call summaries, and compliance monitoring.
- Closing CTA: "Every lead your agency owns, worked to the end."
- Footer and cookie consent bar.

Shared components it requires:
- PublicSiteHeader
- PublicSiteFooter
- CookieBanner
- MarketingHero
- ProductWindow
- StatsRow
- CTABand
- SectionShell
- FeatureNavigationRail
- Badge
- Button

Feature-specific components it requires:
- SalesConversationPreview
- SalesWorkflowSections
- SalesCampaignPanel
- SalesDialerPanel
- SalesCompliancePanel

User actions visible:
- Navigate between Sales AI, Back Office AI, Compare, Demo, Testimonials, Compliance, Affiliates.
- Log in.
- Start free trial.
- Talk to us.
- Decline or accept cookies.

Desktop behavior:
- Page is centered in a narrow rail with vertical border lines.
- Header is horizontal and compact.
- Walkthrough area uses left-side section labels and centered product panels.
- Product windows stay readable at desktop width.

Expected mobile behavior:
- Header navigation collapses to a menu drawer.
- Stat strip wraps into two columns or one column.
- Product mockups scale down and tables become horizontally scrollable where needed.
- Left mini table of contents becomes a compact horizontal or stacked list above content.
- Cookie banner wraps buttons below copy if space is limited.

Uncertainty or assumptions:
- The screenshot does not show actual hover states. Hover and focus states will follow the centralized theme.
- Product UI panels are recreated as structured mockups rather than static screenshots so the layout remains responsive.

## 2. Back Office AI Product Page

Screenshot:
`.agents/skills/screencapture-orionaisolutions-ai-back-office-ai-2026-08-05-16_30_16.png`

Inferred page:
Back Office AI

Inferred page purpose:
Public product page showing carrier statement parsing, commission tracking, policy books, persistency, flight risk, compensation plans, and referral surfacing.

Proposed route:
`/back-office-ai`

Main visible sections:
- Shared public header.
- Hero label "Back Office AI", headline "The back office that runs itself.", supporting copy, and hierarchy/product mockup.
- Four summary tiles: book of business tracking, commission and debt tracking, hierarchy and roll-up risk management, comp plan and bonus progress tracking.
- Content sections with headings and product windows for daily performance, statements and carrier parsing, searchable policy book, persistency, walk/flight risk, and comp plan tracking.
- Three short capability columns near bottom: AI Data Manager, Ashley in the back office, Auto-referrals on Sold.
- CTA: "Statements in. Truth out. Stop reconciling by hand."
- Footer and cookie banner.

Shared components it requires:
- PublicSiteHeader
- PublicSiteFooter
- CookieBanner
- MarketingHero
- ProductWindow
- FeatureGrid
- CTABand
- StatCard
- Button

Feature-specific components it requires:
- BackOfficeHeroMockup
- BackOfficePerformancePanel
- CarrierStatementChart
- PolicyBookTable
- PersistencyPanel
- FlightRiskPanel
- CompensationPlanPanel

User actions visible:
- Header navigation.
- Log in.
- Start free trial.
- Talk to us.
- Cookie decline/accept.

Desktop behavior:
- Hero mockup occupies a wide centered row.
- Four feature tiles sit in a single row.
- Main content alternates text blocks and product panels with a small right-side list in the first detail section.

Expected mobile behavior:
- Feature tiles become a two-column then one-column grid.
- Product charts/tables scale or scroll horizontally.
- CTA buttons stack only when needed.

Uncertainty or assumptions:
- Fine chart values are small in the screenshot. Implementation uses representative visible labels and typed static data.

## 3. Comparison Page

Screenshot:
`.agents/skills/screencapture-orionaisolutions-ai-compare-2026-08-05-16_30_35.png`

Inferred page:
Compare

Inferred page purpose:
Public comparison and pricing matrix explaining how INSURVAS compares against several sales, CRM, phone, and back-office tools.

Proposed route:
`/compare`

Main visible sections:
- Shared public header.
- Hero label "Compare", headline "INSURVAS vs everything you've tried.", supporting copy, and category pills for Sales AI, Back Office, and Pricing and rates.
- Three value proposition columns.
- Large comparison table with legend: included, partial, limited/paid add-on, not offered.
- INSURVAS column visually highlighted.
- Rows grouped by Sales AI, Back Office AI, and Pricing and Rates.
- Footnote explaining A2P registration, AI-generated replies, and rate variability.
- CTA band: "Everything in the left column, one subscription."
- Footer and cookie banner.

Shared components it requires:
- PublicSiteHeader
- PublicSiteFooter
- CookieBanner
- MarketingHero
- Badge
- Button
- Table primitives
- StatusBadge
- CTABand

Feature-specific components it requires:
- ComparisonMatrix
- ComparisonLegend
- ComparisonSummaryCards

User actions visible:
- Header navigation.
- Category/filter pill interaction.
- Start free trial.
- Cookie decline/accept.

Desktop behavior:
- Dense matrix spans most of the content width.
- INSURVAS column remains visually emphasized.
- Category group headers divide table sections.

Expected mobile behavior:
- Matrix uses horizontal overflow.
- Important INSURVAS comparison details also appear as compact summary cards before the table.
- Category pills wrap.

Uncertainty or assumptions:
- Some competitor names and exact row values are small. The implementation preserves the visible structure and key labels while using typed representative values for unreadable cells.

## 4. Demo Page

Screenshot:
`.agents/skills/screencapture-orionaisolutions-ai-demo-2026-08-05-16_30_50.png`

Inferred page:
Demo

Inferred page purpose:
Public demo page inviting users to watch a nine-minute product walkthrough or request a live AI call from Ashley.

Proposed route:
`/demo`

Main visible sections:
- Shared public header.
- Hero label "Demo", headline "The whole product in nine minutes.", supporting copy.
- Large embedded YouTube-style video card with play button and duration.
- Four walkthrough topic cards: platform walkthrough, AI voice in action, SMS and email drip campaigns, ROI breakdown.
- Large purple-toned live AI demo call panel with left explanatory text and right lead form.
- Stat row: 500+ agents, 24/7 availability, 50 states covered, A2P compliant.
- CTA: "Two minutes is all it takes. Then put it on your own leads."
- Footer and cookie banner.

Shared components it requires:
- PublicSiteHeader
- PublicSiteFooter
- CookieBanner
- MarketingHero
- VideoCard
- StatsRow
- Input
- Checkbox
- Button
- FormField
- CTABand

Feature-specific components it requires:
- DemoVideoSection
- DemoAgendaGrid
- DemoCallForm
- DemoMetrics

User actions visible:
- Watch/play video.
- Submit "Talk to Ashley Now" form.
- Consent checkbox.
- Watch the demo.
- Start free trial.
- Cookie decline/accept.

Desktop behavior:
- Video is large and centered.
- Demo form panel uses two columns.
- Topic cards form a four-column row.

Expected mobile behavior:
- Video keeps 16:9 aspect ratio.
- Topic cards stack.
- Demo form becomes one column.
- Consent copy stays readable and button remains full width.

Uncertainty or assumptions:
- The embedded video content is represented by a styled image-like panel and playable affordance, not an actual YouTube embed, because no video URL is available.

## 5. Testimonials Page

Screenshot:
`.agents/skills/screencapture-orionaisolutions-ai-testimonials-2026-08-05-16_31_24.png`

Inferred page:
Testimonials

Inferred page purpose:
Public proof page showing agent results, real text-message quotes, videos, and outcome cards.

Proposed route:
`/testimonials`

Main visible sections:
- Shared public header.
- Hero label "Testimonials", headline "Real agents. Real numbers.", supporting copy, and Watch the demo / Start free trial buttons.
- Stat strip: $85K AP written in one month, 11 live transfers in 30 minutes, <1 min from lead upload to first transfer, 65 aged leads revived.
- Featured quote with agent attribution, "65 replies" metric, carousel dots, and a vertical video card.
- Dotted testimonial grid section: "Hundreds more like this."
- Two-column testimonial cards with result headings and "See the text" links.
- Bottom CTA with two vertical video cards flanking center copy.
- Footer.

Shared components it requires:
- PublicSiteHeader
- PublicSiteFooter
- MarketingHero
- StatsRow
- TestimonialCard
- VideoCard
- Button
- Badge

Feature-specific components it requires:
- FeaturedTestimonial
- TestimonialGrid
- TestimonialVideoCta

User actions visible:
- Watch the demo.
- Start free trial.
- Play videos.
- See the text links.
- Carousel dot selection.

Desktop behavior:
- Featured proof uses a two-column quote/video layout.
- Testimonial grid uses two columns.
- Bottom CTA uses three columns with videos on each side.

Expected mobile behavior:
- Stats become two columns.
- Quote and video stack.
- Testimonial cards stack into one column.
- Bottom CTA stacks center copy before videos.

Uncertainty or assumptions:
- The text says users can tap quotes to see originals, but no modal screenshot is provided. A shared modal pattern is implemented for "See the text" actions.

## 6. Compliance Page

Screenshot:
`.agents/skills/screencapture-orionaisolutions-ai-compliance-2026-08-05-16_31_46.png`

Inferred page:
Compliance

Inferred page purpose:
Public product page explaining how INSURVAS enforces outreach rules, consent, disclosures, DNC handling, call pacing, no-call gates, and evidence exports.

Proposed route:
`/compliance`

Main visible sections:
- Shared public header.
- Hero label "Compliance", headline "Compliance isn't a promise. It's enforced in code.", supporting copy, and a compliance queue mockup.
- Four feature tiles: fails closed, 9am-8pm, One STOP, Exportable.
- CTA strip: "Bring us your compliance checklist."
- Detailed compliance sections with left rail and product panels.
- Data protection grid: "Your book, protected."
- Lawyer/carrier proof section: "Prove your leads are compliant."
- Closing CTA: "Run outreach you can defend."
- Footer and cookie banner.

Shared components it requires:
- PublicSiteHeader
- PublicSiteFooter
- CookieBanner
- MarketingHero
- ProductWindow
- FeatureGrid
- CTABand
- Badge
- Button

Feature-specific components it requires:
- ComplianceQueuePanel
- ComplianceChecklistSections
- ComplianceTrustGrid
- ComplianceProofPanel

User actions visible:
- Watch the demo.
- Talk to us.
- Header navigation.
- Cookie decline/accept.

Desktop behavior:
- Long page with narrow readable copy and repeated product mockups.
- Trust grid uses multiple columns.
- Lower proof section uses text plus product window.

Expected mobile behavior:
- Left rail becomes top stacked list.
- Trust grid becomes two columns and then one column.
- Product panels remain scrollable where needed.

Uncertainty or assumptions:
- Exact legal microcopy is small. Core visible claims and headings are preserved.

## 7. Affiliates Page

Screenshot:
`.agents/skills/screencapture-orionaisolutions-ai-affiliates-2026-08-05-16_31_58.png`

Inferred page:
Affiliates

Inferred page purpose:
Public affiliate program page explaining recurring credits, referral steps, potential earnings, and application requirements.

Proposed route:
`/affiliates`

Main visible sections:
- Shared public header.
- Hero label "Affiliates", headline "Get paid to refer INSURVAS.", supporting copy, Talk to us and Apply now buttons, and requirement note.
- Four-step process: apply, get your link, refer anyone, get rewarded monthly.
- Wallet/product mockup and copy: "Every month they stay, your wallet moves."
- Benefit strip: $15/mo, Lifetime, 30 days, No cap.
- Referral compounding section with two bar chart cards.
- Application section with bullet requirements and a form.
- FAQ section with common questions.
- Footer and cookie banner.

Shared components it requires:
- PublicSiteHeader
- PublicSiteFooter
- CookieBanner
- MarketingHero
- StepGrid
- StatsRow
- BarChartCard
- Input
- Checkbox
- Button
- FAQList

Feature-specific components it requires:
- AffiliateWalletPanel
- AffiliateEarningsCharts
- AffiliateApplicationForm
- AffiliateFaq

User actions visible:
- Talk to us.
- Apply now.
- Submit affiliate application.
- Consent checkbox.
- Cookie decline/accept.

Desktop behavior:
- Process and benefit strips are four-column rows.
- Application form sits beside explanatory copy.
- FAQ uses full-width stacked rows.

Expected mobile behavior:
- Step and benefit strips stack or become two columns.
- Form stacks below copy.
- Chart cards become one column.

Uncertainty or assumptions:
- Form submission destination is not provided. Implementation validates and shows local success/error feedback through the service boundary.

## 8. Get Started / Pricing Page

Screenshot:
`.agents/skills/screencapture-orionaisolutions-ai-get-started-2026-08-05-16_32_12.png`

Inferred page:
Get Started

Inferred page purpose:
Public plan selection and pricing page for individual agents, white-label agencies, and enterprise teams.

Proposed route:
`/get-started`

Main visible sections:
- Shared public header.
- Hero label "Get started", headline "Choose your plan.", supporting copy.
- Three-step process card: pick your plan, we build your AI floor, go live in 48 hours.
- Agent pricing section with monthly and annual subscription cards.
- Agency pricing section with Independent self-serve and Enterprise sales-assisted cards.
- Benefits/testimonial section.
- Closing CTA: "Nothing billed for 14 days."
- Footer and cookie banner.

Shared components it requires:
- PublicSiteHeader
- PublicSiteFooter
- CookieBanner
- MarketingHero
- StepGrid
- PricingCard
- FeatureList
- CTABand
- Button
- Badge

Feature-specific components it requires:
- PlanSteps
- AgentPricingCards
- AgencyPricingCards
- PricingAssurance

User actions visible:
- Start free trial.
- Get annual.
- Start my agency.
- Talk to sales.
- Watch the demo.
- Log in.
- Cookie decline/accept.

Desktop behavior:
- Pricing cards appear in balanced two-column grids.
- Large headings align to the left inside content sections.
- CTA buttons align to the right in the closing band.

Expected mobile behavior:
- Process card and pricing cards stack.
- CTAs become full-width or wrap.
- Long headings maintain readable line lengths.

Uncertainty or assumptions:
- Payment/checkout is not provided. Buttons navigate to relevant local pages or trigger accessible form destinations.

## 9. Login Page

Screenshot:
`.agents/skills/screencapture-app-orionaisolutions-ai-login-2026-08-05-16_32_24 (1).png`

Inferred page:
Login

Inferred page purpose:
Auth entry page for the INSURVAS Agent Solutions Platform.

Proposed route:
`/login`

Main visible sections:
- Centered logo and "Agent Solutions Platform" subtitle.
- Sign In card.
- Email field.
- Password field with visibility icon.
- Remember this device for 30 days checkbox.
- Forgot password link.
- Primary Sign In button.
- Link to start free trial.
- Copyright footer.

Shared components it requires:
- Logo
- Input
- Checkbox
- Button
- Card
- Alert

Feature-specific components it requires:
- LoginForm

User actions visible:
- Enter email and password.
- Toggle password visibility.
- Remember device checkbox.
- Submit sign in.
- Open forgot password path.
- Start free trial.

Desktop behavior:
- Content is centered vertically and horizontally with a compact card.
- No public nav/footer/cookie banner in screenshot.

Expected mobile behavior:
- Card spans available width with safe mobile padding.
- Links and checkbox stay touch-friendly.
- Footer stays below card without overlapping.

Uncertainty or assumptions:
- No authentication backend is provided. Implementation validates fields and shows local success/error feedback through a typed auth service boundary.
