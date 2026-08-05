# GREENFIELD PROJECT AND CENTRALIZED DESIGN SYSTEM

This is a completely new project.

There is no existing code, architecture, styling system, component library, or folder structure.

You are responsible for creating the initial project foundation correctly before implementing individual pages.

The project foundation must include:

* Next.js App Router
* TypeScript with strict mode
* Tailwind CSS
* Centralized design tokens
* Centralized theme configuration
* Shared UI components
* Shared layout components
* Feature-based architecture
* Application providers
* API client foundation
* React Query configuration
* Environment variable validation
* Global error, loading, and not-found pages
* Responsive application shell
* ESLint and formatting configuration
* Path aliases using `@/`

Do not begin by placing the first screenshot directly inside `app/page.tsx`.

First establish the reusable project architecture and design system.

---

# CENTRALIZED THEME REQUIREMENT

All visual design values must be controlled from a small number of centralized theme files.

I must be able to change the primary color, background color, text color, borders, radius, shadows, and other visual properties in one place and have those changes apply throughout the entire application.

Use the following structure:

```text
src/
├── app/
│   └── globals.css
│
├── styles/
│   ├── tokens.css
│   ├── animations.css
│   └── utilities.css
│
├── config/
│   └── theme.ts
│
└── components/
    └── ui/
```

The exact structure may be adjusted when technically necessary, but all design tokens must remain centralized.

---

# COLOR TOKEN RULES

Define colors as semantic CSS variables.

Example:

```css
:root {
  --color-background: 248 251 246;
  --color-surface: 255 255 255;
  --color-surface-muted: 238 245 238;

  --color-primary: 59 82 41;
  --color-primary-hover: 48 70 33;
  --color-primary-active: 35 50 23;
  --color-primary-foreground: 255 255 255;

  --color-secondary: 99 139 75;
  --color-secondary-foreground: 255 255 255;

  --color-foreground: 35 50 23;
  --color-muted-foreground: 105 120 98;

  --color-border: 218 229 215;
  --color-input: 218 229 215;
  --color-ring: 99 139 75;

  --color-success: 40 130 75;
  --color-warning: 205 140 30;
  --color-danger: 190 55 55;
  --color-info: 50 105 180;
}
```

Components must use semantic theme classes such as:

```tsx
className="bg-background text-foreground"
className="bg-surface border-border"
className="bg-primary text-primary-foreground"
className="text-muted-foreground"
```

Do not repeatedly use literal colors inside components.

Forbidden examples:

```tsx
className="bg-[#233217]"
className="text-[#638B4B]"
className="border-[#DAE5D7]"
```

Do not use Tailwind color names directly for application branding.

Avoid:

```tsx
className="bg-green-800"
className="text-emerald-600"
className="border-slate-200"
```

Brand and application colors must come from semantic project tokens.

Standard colors may only be used temporarily during initial setup and must be replaced before the feature is considered complete.

---

# SINGLE-PLACE COLOR CHANGES

Changing the main application theme must require editing only the central token definitions.

For example, changing:

```css
--color-primary: 59 82 41;
```

must update all of the following automatically:

* Primary buttons
* Active navigation items
* Selected tabs
* Links
* Form focus rings
* Active filters
* Chart accents
* Badges
* Progress indicators
* Checkbox states
* Radio states
* Toggle states
* Pagination active states
* Hover states
* Mobile navigation highlights

Do not create separate hardcoded versions of the primary color inside individual components.

Derived states such as hover, active, selected, subtle, and foreground must also be represented by centralized tokens.

---

# COMPLETE DESIGN TOKEN SYSTEM

Centralize more than colors.

The theme must include tokens for:

## Colors

* Background
* Surface
* Muted surface
* Elevated surface
* Primary
* Primary hover
* Primary active
* Primary subtle
* Secondary
* Foreground
* Muted foreground
* Border
* Input
* Focus ring
* Success
* Warning
* Danger
* Information

## Border radius

```css
--radius-xs: 4px;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 20px;
--radius-full: 9999px;
```

## Shadows

```css
--shadow-sm: 0 1px 2px rgb(0 0 0 / 0.04);
--shadow-md: 0 4px 12px rgb(0 0 0 / 0.06);
--shadow-lg: 0 12px 30px rgb(0 0 0 / 0.08);
```

## Typography

Centralize:

* Font families
* Heading sizes
* Body sizes
* Caption sizes
* Font weights
* Line heights
* Letter spacing

## Spacing

Use a consistent spacing scale.

Do not introduce random values such as:

```tsx
mt-[13px]
px-[19px]
gap-[11px]
```

unless the screenshot genuinely requires a precise exception.

## Layout

Centralize commonly reused layout values such as:

* Sidebar width
* Collapsed sidebar width
* Header height
* Page maximum width
* Page padding
* Mobile page padding
* Content gaps
* Table row height

## Motion

Centralize:

* Transition durations
* Easing values
* Hover movement
* Modal animation
* Drawer animation
* Skeleton animation

---

# COMPONENTS MUST CONSUME THE THEME

Shared components must consume semantic tokens.

Examples:

```tsx
<Button variant="primary" />
<Button variant="secondary" />
<Button variant="outline" />
<Button variant="ghost" />
<Button variant="destructive" />

<Card variant="default" />
<Card variant="muted" />
<Card variant="interactive" />

<Badge variant="success" />
<Badge variant="warning" />
<Badge variant="danger" />
<Badge variant="neutral" />
```

The component variant determines which semantic theme tokens are used.

Do not pass raw color values to normal components.

Avoid APIs such as:

```tsx
<Button backgroundColor="#233217" />
```

Prefer:

```tsx
<Button variant="primary" />
```

---

# CHART COLOR SYSTEM

Chart colors must also be centralized.

Create semantic chart tokens such as:

```css
--chart-primary: 59 82 41;
--chart-secondary: 99 139 75;
--chart-tertiary: 145 175 125;
--chart-positive: 40 130 75;
--chart-negative: 190 55 55;
--chart-warning: 205 140 30;
--chart-grid: 225 232 222;
--chart-label: 105 120 98;
```

Do not hardcode chart colors inside individual chart components.

All charts must pull their colors from the shared theme or chart configuration.

Changing the application theme must also update the charts.

---

# DARK MODE PREPARATION

Even when dark mode is not initially required, structure the tokens so that another theme can be added later without rewriting every component.

Example structure:

```css
:root {
  /* Light theme tokens */
}

[data-theme="dark"] {
  /* Dark theme token overrides */
}
```

Do not implement dark mode unless I request it, but do not build components in a way that makes future dark mode difficult.

---

# THEME CONFIGURATION FILE

Create a typed theme configuration when JavaScript values are required.

Example responsibilities for `src/config/theme.ts`:

* Chart colors
* Sidebar dimensions
* Header dimensions
* Navigation constants
* Breakpoint-related application values
* Animation durations
* Component size constants

Do not duplicate the same theme values between CSS and TypeScript unnecessarily.

CSS values should remain in CSS when they are only used for styling.

TypeScript theme values should be used only when a library requires JavaScript values.

---

# DESIGN SYSTEM DOCUMENTATION

Create a simple internal design-system page or documentation section showing:

* Color tokens
* Typography
* Buttons
* Inputs
* Selects
* Checkboxes
* Radio buttons
* Badges
* Cards
* Tabs
* Alerts
* Modals
* Tables
* Loading states
* Empty states

This page should be available during development and should reuse the actual application components.

Do not create fake demonstration components that differ from the components used by the real application.

The purpose is to let developers see all shared components and verify that theme changes apply consistently.

---

# INITIAL PROJECT IMPLEMENTATION ORDER

For this new project, use this order:

1. Initialize the Next.js project.
2. Configure TypeScript strict mode.
3. Configure the `@/` import alias.
4. Configure Tailwind CSS.
5. Create the centralized design tokens.
6. Connect the tokens to Tailwind utilities.
7. Configure fonts and typography.
8. Create the shared utility functions.
9. Create the base UI components.
10. Create application providers.
11. Create the responsive application shell.
12. Create loading, error, empty, and not-found states.
13. Create the first feature structure.
14. Analyze the provided screenshots.
15. Implement the first page using the shared architecture.
16. Verify desktop and mobile behavior.
17. Verify that changing a central theme token updates the entire application.

Do not skip the project foundation and immediately build the first page.

---

# THEME CHANGE VERIFICATION

Before considering the initial architecture complete, perform a theme-change test.

Temporarily change the primary theme color in the centralized token file and verify that it updates:

* Buttons
* Sidebar active items
* Links
* Focus states
* Tabs
* Badges
* Form controls
* Charts
* Pagination
* Selected filters

After confirming that the theme system works, restore the intended color.

There must be no remaining hardcoded copies of the primary brand color elsewhere in the project.

---

# FINAL GREENFIELD REQUIREMENT

This project must start with a reusable foundation.

The first page must not become a special one-off implementation.

Every page created from future screenshots must automatically inherit:

* The same colors
* The same typography
* The same spacing
* The same border radius
* The same shadows
* The same buttons
* The same forms
* The same responsive layout
* The same sidebar
* The same header
* The same loading behavior
* The same error behavior
* The same accessibility standards

When I change a central token, the complete application must update without manually editing individual pages or components.
