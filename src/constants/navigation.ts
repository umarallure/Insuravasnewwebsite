import { routes } from "@/constants/routes";
import type { NavigationItem } from "@/types/navigation.types";

export const publicNavigation: NavigationItem[] = [
  { label: "Sales AI", href: routes.salesAi },
  { label: "Back Office AI", href: routes.backOfficeAi },
  { label: "Compare", href: routes.compare },
  { label: "Demo", href: routes.demo },
  { label: "Testimonials", href: routes.testimonials },
  { label: "Compliance", href: routes.compliance },
  { label: "Affiliates", href: routes.affiliates }
];

export const legalNavigation = [
  { label: "Privacy policy", href: routes.compliance },
  { label: "Terms of service", href: routes.compliance },
  { label: "Messaging terms", href: routes.compliance },
  { label: "Do not sell my info", href: routes.compliance }
] as const;

export const footerNavigation = [
  {
    label: "Product",
    items: [
      { label: "Sales AI", href: routes.salesAi },
      { label: "Back Office AI", href: routes.backOfficeAi },
      { label: "Compare", href: routes.compare },
      { label: "Pricing", href: routes.getStarted },
      { label: "Demo", href: routes.demo }
    ]
  },
  {
    label: "Company",
    items: [
      { label: "About", href: routes.salesAi },
      { label: "Compliance", href: routes.compliance },
      { label: "Testimonials", href: routes.testimonials },
      { label: "Affiliates", href: routes.affiliates },
      { label: "Contact", href: routes.demo },
      { label: "Newsletter", href: routes.testimonials }
    ]
  },
  {
    label: "Get Started",
    items: [
      { label: "Start free trial", href: routes.getStarted },
      { label: "Watch the demo", href: routes.demo },
      { label: "FAQ", href: `${routes.affiliates}#faq` },
      { label: "Log in", href: routes.login }
    ]
  }
] as const;
