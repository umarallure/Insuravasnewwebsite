import { routes } from "@/constants/routes";
import type {
  ComparisonCell,
  ComparisonGroup,
  DashboardPanelContent,
  DetailSection,
  FeatureCardItem,
  MarketingHeroContent,
  MarketingStat,
  PricingPlan,
  Testimonial,
  TrustItem,
  WalkthroughSection
} from "@/features/marketing/types/marketing.types";

const included = (): ComparisonCell => ({ value: "included" });
const partial = (label = "Partial"): ComparisonCell => ({ value: "partial", label });
const none = (): ComparisonCell => ({ value: "none" });
const text = (label: string): ComparisonCell => ({ value: "text", label });

export const salesAiContent = {
  hero: {
    eyebrow: "Sales AI",
    title: "Your leads, worked to the end.",
    description:
      "Ashley answers, qualifies, books, and transfers. MLDP triples your manual dials. Nothing your agency owns sits untouched.",
    primaryAction: { label: "Start free trial", href: routes.getStarted }
  } satisfies MarketingHeroContent,
  stats: [
    { value: "2,500", label: "AI calls per day, per agent" },
    { value: "17,880", label: "Concurrent outbound conversations, all live" },
    { value: "$5,000+", label: "Added monthly production, average" },
    { value: "500+", label: "Agents on INSURVAS" }
  ] satisfies MarketingStat[],
  introCta: {
    title: "Put Ashley on 50 of your aged leads this week.",
    mutedTitle: "First conversations start the same day.",
    primaryAction: { label: "Start free trial", href: routes.getStarted }
  },
  rail: [
    "SMS AI",
    "Email AI",
    "AI campaigns",
    "Appointment booking",
    "Power dialer",
    "Drip campaigns",
    "Email campaigns",
    "Lifecycle and referrals",
    "Call recordings",
    "Compliance and phone health"
  ],
  sections: [
    {
      title: "Every reply handled like your best closer wrote it.",
      mutedTitle: "Voice, SMS, and email, one brain. On the record, every time.",
      description:
        "Ashley keeps context, asks the next question, and moves the lead toward a booked appointment.",
      panel: {
        title: "Ashley inbox - live lead",
        badge: "Live reply",
        variant: "conversation",
        rows: [
          { label: "Lead", value: "I'm interested. Can you tell me what this costs?" },
          { label: "Ashley", value: "Absolutely. I can help narrow it down first. Do you already have coverage?" },
          { label: "Lead", value: "No, but I have a family and keep putting it off." },
          { label: "Ashley", value: "That is exactly what this is for. I can get you a quick quote and book a time." }
        ]
      }
    },
    {
      title: "Leads email back. The AI answers and books.",
      mutedTitle: "It reads the reply, answers the question, and offers times.",
      description: "Then books to your calendar. Take over any thread with one toggle.",
      panel: {
        title: "Email AI - booked thread",
        badge: "Booked",
        variant: "table",
        rows: [
          { label: "Diane W.", value: "Asked about term life pricing", status: "Calendar sent", tone: "info" },
          { label: "Robert H.", value: "Needed evening availability", status: "Booked", tone: "success" },
          { label: "Karen J.", value: "Requested policy comparison", status: "Agent review", tone: "warning" }
        ]
      }
    },
    {
      title: "A campaign takes four decisions.",
      mutedTitle: "Audience, agent, schedule, numbers.",
      description: "Ashley handles the other ten thousand conversations after launch.",
      panel: {
        title: "Campaign - aged leads",
        badge: "Ready",
        variant: "campaign",
        rows: [
          { label: "Audience", value: "Final expense aged 90 day - 487 leads", status: "Set", tone: "success" },
          { label: "Agent", value: "Tobias W. calendar and transfer rules", status: "Set", tone: "success" },
          { label: "Numbers", value: "Power dialer and A2P registered line", status: "Set", tone: "success" },
          { label: "Schedule", value: "Weekdays 9am-8pm local time", status: "Set", tone: "success" }
        ]
      }
    },
    {
      title: "Booked straight onto the right calendar.",
      mutedTitle: "Ashley checks availability, sets the slot, and confirms by text.",
      description: "Each agent keeps their own calendar and transfer preferences.",
      panel: {
        title: "Calendar - booked from AI",
        badge: "6 set by Ashley",
        variant: "calendar",
        rows: [
          { label: "Laura B.", value: "10:45 AM quote review" },
          { label: "Marcus R.", value: "1:30 PM beneficiary call" },
          { label: "Daniel K.", value: "3:15 PM policy check" },
          { label: "Faith P.", value: "5:40 PM final expense" }
        ]
      }
    },
    {
      title: "Triple your dials without touching a keypad.",
      mutedTitle: "MLPD runs three lines at once and drops you into live conversations only.",
      description: "The agent gets the live lead when a real person is ready to talk.",
      panel: {
        title: "MLPD - live dialer",
        badge: "Live",
        variant: "dialer",
        metrics: [
          { label: "Dialing", value: "3 lines" },
          { label: "Live", value: "1 caller" },
          { label: "Queue", value: "42 open" }
        ],
        rows: [
          { label: "Answered", tone: "success" },
          { label: "Appointment booked", tone: "primary" },
          { label: "Needs callback", tone: "warning" }
        ]
      }
    },
    {
      title: "Campaigns that never forget.",
      mutedTitle: "SMS, voice, and email steps fire on schedule until the lead answers or opts out.",
      description: "INSURVAS keeps every attempt coordinated across channels.",
      panel: {
        title: "Drip campaign - outbound attempts",
        badge: "Active",
        variant: "campaign",
        rows: [
          { label: "Day 0", value: "Hey John, Ashley here from Tobias", status: "Sent", tone: "success" },
          { label: "Day 2", value: "Email replay with quote link", status: "Queued", tone: "info" },
          { label: "Day 4", value: "Final expense check-in", status: "Queued", tone: "info" },
          { label: "Day 7", value: "Opportunity follow-up", status: "Queued", tone: "warning" }
        ]
      }
    },
    {
      title: "Email drips by product type.",
      mutedTitle: "Sequences send from your own verified domain on the same path leads ask about.",
      description: "Working every lead for days. No per-lead babysitting.",
      panel: {
        title: "Email campaign builder",
        badge: "Saved",
        variant: "table",
        rows: [
          { label: "Final expense sequence", value: "5 touches over 9 days", status: "Active", tone: "success" },
          { label: "Mortgage protection", value: "Quote and callback path", status: "Active", tone: "success" },
          { label: "Term life nurture", value: "Education plus calendar offer", status: "Draft", tone: "warning" }
        ]
      }
    },
    {
      title: "Worked past the Sold, automatically.",
      mutedTitle: "Customer care, chargeback win-back, and beneficiary referrals enroll themselves.",
      description: "Every close seeds new leads without a spreadsheet.",
      panel: {
        title: "Lifecycle automations",
        badge: "After sold",
        variant: "campaign",
        rows: [
          { label: "Welcome call", value: "New policyholder", status: "Active", tone: "success" },
          { label: "Beneficiary referral", value: "Emergency contact became lead", status: "Active", tone: "success" },
          { label: "Win-back follow-up", value: "Chargeback save path", status: "Scheduled", tone: "info" }
        ]
      }
    },
    {
      title: "Every call recorded, transcribed, summarized.",
      mutedTitle: "Disposition and next step synced to the lead automatically.",
      description: "Train on the calls that actually closed.",
      panel: {
        title: "Call record - AI summary",
        badge: "Agent note",
        variant: "table",
        rows: [
          { label: "Transcript", value: "Lead asked about final expense and spouse coverage", status: "Saved", tone: "success" },
          { label: "Disposition", value: "Appointment booked for tomorrow", status: "Synced", tone: "success" },
          { label: "Next step", value: "Send quote prep text", status: "Queued", tone: "info" }
        ]
      }
    },
    {
      title: "Compliant out of the box.",
      mutedTitle: "FTC, TCR, and TCPA across all 50 states.",
      description: "Opt-outs and DNC handled. Numbers monitored for spam flags.",
      panel: {
        title: "Compliance monitor",
        badge: "All clear",
        variant: "table",
        rows: [
          { label: "A2P / TCR", value: "Registered traffic only", status: "Healthy", tone: "success" },
          { label: "9am-8pm local", value: "Quiet hours enforced", status: "Healthy", tone: "success" },
          { label: "Opt-out", value: "STOP handled automatically", status: "Healthy", tone: "success" }
        ]
      }
    }
  ] satisfies DetailSection[],
  closingCta: {
    title: "Sales AI",
    title2: "Back Office AI",
    description: "Voice, SMS, email, MLPD, drips, lifecycle campaigns, and compliance — the whole front office.",
    description2: "Statements, commissions, persistency, policies, and the tree — reconciled without a spreadsheet.",
    primaryAction: { label: "Start free trial", href: routes.getStarted },
    secondaryAction: { label: "Watch the demo", href: routes.demo },
    ctaText: "Running an agency?",
    ctaLink: { label: "Independent setup from $499 one-time ›", href: routes.affiliates }
  }
};

export const backOfficeContent = {
  hero: {
    eyebrow: "Back Office AI",
    title: "The back office that runs itself.",
    description:
      "Carrier statements parsed by AI. Production rolled up the team tree. Debt, persistency, and every policy tracked without a spreadsheet."
  } satisfies MarketingHeroContent,
  features: [
    {
      title: "Book of business tracking",
      description: "Every policy, status, and premium in one live book. No spreadsheet."
    },
    {
      title: "Commission and debt tracking",
      description: "Carrier statements parsed by AI: earned, advanced, and owed reconciled."
    },
    {
      title: "Hierarchy and roll-up risk management",
      description: "Production rolls up your team tree, with debt and flight-risk visibility."
    },
    {
      title: "Comp plan and bonus progress tracking",
      description: "Comp ladders and bonus progress tracked as production lands."
    }
  ] satisfies FeatureCardItem[],
  sections: [
    {
      title: "Know what's actually happening, every day.",
      mutedTitle: "Production, carriers, and managers ranked every morning.",
      description: "No month-end surprises.",
      panel: {
        title: "Team performance - YTD",
        badge: "Owner view",
        variant: "chart",
        metrics: [
          { label: "Team YTD sold", value: "$682,037", delta: "+42.8% vs prior" },
          { label: "Commission paid", value: "$1.23M", delta: "Matched to statement" },
          { label: "Top producer", value: "Alex Rivera" }
        ],
        chartValues: [16, 23, 28, 26, 39, 44, 62]
      }
    },
    {
      title: "Statements in. Truth out.",
      mutedTitle: "AI parses every carrier statement and matches every dollar to the right agent.",
      description: "Monthly commission files become searchable, reconciled records.",
      panel: {
        title: "Back Office - commissions",
        badge: "Owner scope",
        variant: "chart",
        metrics: [
          { label: "Earned commission", value: "$84,210" },
          { label: "Outstanding debt", value: "-$6,790" },
          { label: "Override income", value: "$29,480" }
        ],
        chartValues: [9, 12, 11, 19, 24, 29, 37]
      }
    },
    {
      title: "Every policy in one searchable book.",
      mutedTitle: "Premium, status, and persistency month for every policy.",
      description: "Straight from the carrier statement.",
      panel: {
        title: "Book of business",
        badge: "$1.2M in force",
        variant: "table",
        rows: [
          { label: "Linda P.", value: "Carrier A - $68/mo - M4", status: "In force", tone: "success" },
          { label: "B. Boyd", value: "Carrier C - $54/mo - M1", status: "Pending", tone: "warning" },
          { label: "T. Alvarez", value: "Carrier D - $112/mo - M13", status: "In force", tone: "success" },
          { label: "J. Whitmore", value: "Carrier A - $72/mo - M9", status: "Lapsed", tone: "danger" }
        ]
      }
    },
    {
      title: "Persistency, flat and weighted.",
      mutedTitle: "Every carrier and cohort tracked by month.",
      description: "The numbers your overrides and renewals live on.",
      panel: {
        title: "Persistency dashboard",
        badge: "Weighted",
        variant: "chart",
        metrics: [
          { label: "12-month persistency", value: "91.0%", delta: "Green by carrier" },
          { label: "At-risk premium", value: "$18.4K" },
          { label: "Recovered cycle", value: "24 policies" }
        ],
        chartValues: [74, 76, 81, 84, 88, 89, 91]
      }
    },
    {
      title: "See the walk coming a month early.",
      mutedTitle: "Production, debt, and activity signals rolled into one owner-only view.",
      description: "Managers see which agents need help before business leaves.",
      panel: {
        title: "Flight risk - owner view",
        badge: "Owner only",
        variant: "table",
        rows: [
          { label: "T. Nguyen", value: "Production down 36%, debt climbing", status: "Red", tone: "danger" },
          { label: "S. Whitfield", value: "No new apps, production steady", status: "Yellow", tone: "warning" },
          { label: "D. Alvarez", value: "Stable close rate", status: "Green", tone: "success" }
        ]
      }
    },
    {
      title: "Comp plans, bonuses, and tiers.",
      mutedTitle: "Ladders by carrier, custom bonus programs, every tier tracked automatically.",
      description: "Leaders see progress before the statement arrives.",
      panel: {
        title: "Comp plan - Carrier A",
        badge: "July",
        variant: "chart",
        metrics: [
          { label: "Earned in July", value: "$8,412" },
          { label: "Senior producer", value: "Qualified" },
          { label: "Next tier", value: "$1,600 to go" }
        ],
        chartValues: [22, 33, 42, 54, 66, 74, 84]
      }
    }
  ] satisfies DetailSection[],
  bottomFeatures: [
    {
      title: "AI Data Manager.",
      description: "Forward a statement. AI parses and posts it. Any format, any carrier, no template setup."
    },
    {
      title: "Ashley, in the back office.",
      description: "Ask who is behind on Carrier A and get the answer, not a report to dig through."
    },
    {
      title: "Auto-referrals on Sold.",
      description: "Beneficiary and emergency contacts become new leads the moment a policy goes Sold."
    }
  ],
  closingCta: {
    title: "Statements in. Truth out.",
    mutedTitle: "Stop reconciling by hand.",
    quote: "My agents work half the hours and write more. The back office alone pays for it.",
    attribution: "Agency owner - Enterprise plan",
    primaryAction: { label: "Start free trial", href: routes.getStarted },
    secondaryAction: { label: "Talk to us", href: routes.demo }
  }
};

export const comparisonContent = {
  hero: {
    eyebrow: "Compare",
    title: "INSURVAS vs everything you've tried.",
    description: "Nine tools stitched together still can't answer a lead at 2am. Here's the honest table."
  } satisfies MarketingHeroContent,
  pills: ["Sales AI - 25 rows", "Back Office - 11 rows", "Pricing and rates - 13 rows"],
  summary: [
    {
      title: "The only one with both halves.",
      description:
        "Sales AI that works the lead and a back office that tracks the dollar. Every other tool does one, badly stitched to the rest."
    },
    {
      title: "$149 replaces the stack.",
      description: "A dialer, a texting tool, a VA, and a commission spreadsheet run $400+/mo per agent. INSURVAS is one bill."
    },
    {
      title: "Built only for life insurance.",
      description:
        "Final expense, mortgage protection, IUL, veteran. The scripts, dispositions, and comp math are native."
    }
  ] satisfies FeatureCardItem[],
  columns: [
    "INSURVAS AI",
    "GoHighLevel",
    "Close.com",
    "Ringy",
    "VanillaSoft",
    "PhoneBurner",
    "Agent CRM",
    "Convoso",
    "Five9",
    "ComTrack"
  ],
  groups: [
    {
      label: "Sales AI",
      rows: [
        { feature: "Built for life insurance", cells: [included(), partial(), none(), none(), none(), none(), partial(), none(), none(), none()] },
        { feature: "In-app AI assistant Ashley", cells: [included(), none(), none(), none(), none(), none(), none(), none(), none(), none()] },
        { feature: "AI dials your leads and qualifies them", cells: [included(), partial(), none(), none(), none(), none(), none(), partial(), partial(), none()] },
        { feature: "AI handles inbound calls", cells: [included(), included(), none(), none(), none(), none(), none(), partial(), partial(), none()] },
        { feature: "AI texts back 24/7", cells: [included(), included(), none(), none(), none(), none(), none(), none(), none(), none()] },
        { feature: "Auto-follow-up drips", cells: [included(), included(), included(), included(), partial(), partial(), included(), included(), included(), none()] },
        { feature: "All replies to lead emails 24/7", cells: [included(), included(), none(), none(), none(), none(), included(), none(), partial(), none()] },
        { feature: "Two-way AI email that books appointments", cells: [included(), included(), none(), none(), none(), none(), included(), none(), none(), none()] },
        { feature: "Unified voice, SMS and email on one lead", cells: [included(), included(), included(), included(), partial(), partial(), included(), included(), included(), none()] },
        { feature: "Lead pipeline and dispositions", cells: [included(), included(), included(), included(), included(), partial(), included(), included(), included(), none()] },
        { feature: "Hands-free power dialer", cells: [included(), included(), none(), included(), included(), included(), included(), included(), included(), none()] },
        { feature: "Live transfer with full context", cells: [included(), partial(), partial(), partial(), partial(), partial(), partial(), partial(), partial(), none()] },
        { feature: "Call recordings, transcripts and AI summaries", cells: [included(), included(), partial(), partial(), partial(), included(), included(), included(), none(), none()] },
        { feature: "Compliance setup handled for you", cells: [included(), included(), partial(), partial(), included(), included(), included(), included(), included(), none()] }
      ]
    },
    {
      label: "Back Office AI",
      rows: [
        { feature: "AI parses every carrier statement", cells: [included(), none(), none(), none(), none(), none(), none(), none(), none(), partial()] },
        { feature: "Every dollar matched to the right agent", cells: [included(), none(), none(), none(), none(), none(), none(), none(), none(), included()] },
        { feature: "Debt tracked and roll-up risk flagged", cells: [included(), none(), none(), none(), none(), none(), none(), none(), none(), partial()] },
        { feature: "Every policy in one searchable book", cells: [included(), none(), none(), none(), none(), none(), none(), none(), none(), partial()] },
        { feature: "Persistency tracking", cells: [included(), none(), none(), none(), none(), none(), none(), none(), none(), partial()] },
        { feature: "Org tree with live value view", cells: [included(), none(), none(), none(), none(), none(), none(), none(), none(), partial()] },
        { feature: "Bonus programs with custom tiers", cells: [included(), none(), none(), none(), none(), none(), none(), none(), none(), partial()] },
        { feature: "Commission tier tracked per agent", cells: [included(), none(), none(), none(), none(), none(), none(), none(), none(), included()] },
        { feature: "Comp plan ladders by carrier", cells: [included(), none(), none(), none(), none(), none(), none(), none(), none(), partial()] },
        { feature: "Reconciliation hub for orphan rows", cells: [included(), none(), none(), none(), none(), none(), none(), none(), none(), partial()] },
        { feature: "Agent flight-risk surfacing", cells: [included(), none(), none(), none(), none(), none(), none(), none(), none(), none()] }
      ]
    },
    {
      label: "Pricing and rates",
      rows: [
        { feature: "Per-agent subscription", cells: [text("$149/mo"), text("$97-497/mo"), text("$49+/user"), text("$109+/mo"), text("Custom"), text("$140-215/user"), text("$97/mo"), text("$90+/user"), text("$149-299/user"), text("$59-149/user")] },
        { feature: "MLPD add-on", cells: [text("$129/mo"), text("N/A"), text("Higher plans"), text("N/A"), text("Add-on"), text("N/A"), text("Add-on"), text("Included"), text("Core plans"), text("N/A")] },
        { feature: "Independent agency setup", cells: [text("$499 once"), text("N/A"), text("N/A"), text("N/A"), text("N/A"), text("N/A"), text("Carrier fees"), text("Custom"), text("Enterprise"), text("N/A")] },
        { feature: "Free phone numbers", cells: [text("5 / 13+"), text("0"), text("0"), text("0"), text("N/A"), text("1"), text("N/A"), text("N/A"), text("N/A"), text("N/A")] },
        { feature: "A2P registration", cells: [text("Free"), text("$40-84"), text("$4.50-46"), text("$4-44"), text("N/A"), text("N/A"), text("Carrier fees"), text("Custom"), text("Enterprise"), text("N/A")] },
        { feature: "SMS outbound", cells: [text("$0.008"), text("$0.0079"), text("~$0.01"), text("$0.01"), text("N/A"), text("Included"), text("Carrier fees"), text("Custom"), text("Custom"), text("N/A")] },
        { feature: "SMS inbound", cells: [text("Free"), text("$0.0079"), text("~$0.01"), text("Free"), text("N/A"), text("Premium only"), text("Carrier fees"), text("Custom"), text("Custom"), text("N/A")] },
        { feature: "AI SMS reply", cells: [text("$0.016"), text("N/A"), text("N/A"), text("N/A"), text("N/A"), text("N/A"), text("N/A"), text("N/A"), text("N/A"), text("N/A")] },
        { feature: "MMS/media message", cells: [text("~$0.04"), text("N/A"), text("N/A"), text("N/A"), text("N/A"), text("N/A"), text("N/A"), text("N/A"), text("N/A"), text("N/A")] },
        { feature: "Emails included", cells: [text("2,000+"), text("None"), text("Included"), text("None"), text("Included"), text("Included"), text("None"), text("Add-on"), text("In seat"), text("N/A")] },
        { feature: "Email overage", cells: [text("$0.001"), text("$0.675/1k"), text("Included"), text("$0.001"), text("Included"), text("Included"), text("$0.675/1k"), text("Custom"), text("Per seat"), text("N/A")] },
        { feature: "Manual call", cells: [text("$0.015/free"), text("$0.014+"), text("~$0.022"), text("$0.01"), text("N/A"), text("Unlimited"), text("$0.032"), text("$0.02-0.10"), text("Incl. 3k min"), text("N/A")] },
        { feature: "AI voice calls", cells: [text("~$0.08"), text("~$0.11+"), text("N/A"), text("N/A"), text("N/A"), text("N/A"), text("N/A"), text("N/A"), text("Enterprise"), text("N/A")] }
      ]
    }
  ] satisfies ComparisonGroup[],
  cta: {
    title: "Everything in the left column, one subscription.",
    mutedTitle: "$149/mo per agent, 14-day free trial.",
    primaryAction: { label: "Start free trial", href: routes.getStarted }
  }
};

export const demoContent = {
  hero: {
    eyebrow: "Demo",
    title: "The whole product in nine minutes.",
    description: "Watch the platform work a real lead, then talk to the AI yourself."
  } satisfies MarketingHeroContent,
  agenda: [
    { eyebrow: "01", title: "Platform walkthrough", description: "Dashboard, lead management, and AI campaigns in a real agency environment." },
    { eyebrow: "02", title: "AI voice in action", description: "Hear the AI qualify a real insurance conversation and book the appointment." },
    { eyebrow: "03", title: "SMS and email drip campaigns", description: "Automated text and email conversations that nurture leads for days without manual work." },
    { eyebrow: "04", title: "ROI breakdown", description: "The math on how agents add $5K+ per month with AI running their outreach." }
  ] satisfies FeatureCardItem[],
  stats: [
    { value: "500+", label: "Agents on INSURVAS" },
    { value: "24/7", label: "AI availability" },
    { value: "50", label: "States covered" },
    { value: "A2P", label: "Fully compliant, registration free" }
  ] satisfies MarketingStat[],
  cta: {
    title: "Two minutes is all it takes.",
    mutedTitle: "Then put it on your own leads.",
    quote: "In the last 8 hours alone I've gotten 24 replies and an appointment booked for tomorrow.",
    attribution: "Tobias W. - Agency owner",
    primaryAction: { label: "Start free trial", href: routes.getStarted },
    secondaryAction: { label: "Talk to us", href: routes.demo }
  }
};

export const testimonialsContent = {
  hero: {
    eyebrow: "Testimonials",
    title: "Real agents. Real numbers.",
    description: "Every quote on this page is a real, unedited text message an agent sent us. Tap any of them to see the original.",
    primaryAction: { label: "Start free trial", href: routes.getStarted },
    secondaryAction: { label: "Watch the demo", href: routes.demo }
  } satisfies MarketingHeroContent,
  stats: [
    { value: "$85K", label: "AP written in one month" },
    { value: "11", label: "Live transfers in 30 minutes" },
    { value: "<1 min", label: "From lead upload to first transfer" },
    { value: "65", label: "Aged leads revived in one campaign" }
  ] satisfies MarketingStat[],
  featured: {
    id: "featured",
    result: "65 replies",
    quote:
      "Bro, my text campaign finally launched and this is freaking insane. I got like 65 people replying back interested in life insurance. They are now converted to hot leads from the old aged leads I uploaded. This is amazing, thank you.",
    name: "Caleb S.",
    role: "Final expense agent"
  } satisfies Testimonial,
  testimonials: [
    {
      id: "brennan",
      result: "$1,440",
      quote: "First AI live transfer and I closed it. $1,440 trans. I was playing online poker then got the call.",
      name: "Brennan K.",
      role: "Life insurance agent"
    },
    {
      id: "jarred",
      result: "11 / 30 min",
      quote: "Bro, 11 transfers in 30 minutes. I can't get to them all.",
      name: "Jarred C.",
      role: "Mortgage protection agent"
    },
    {
      id: "roman",
      result: "This is way better than GHL",
      quote: "This is way better than GHL.",
      name: "Roman W.",
      role: "Agency owner"
    },
    {
      id: "mitchell",
      result: "2 appts",
      quote: "AI texts booked 2 appointments while I was at church.",
      name: "Mitchell L.",
      role: "Final expense agent"
    },
    {
      id: "beau",
      result: "5 appts",
      quote: "AI booked 5 appointments in the past two days already.",
      name: "Beau G.",
      role: "Life insurance agent"
    },
    {
      id: "elliot",
      result: "5 appts",
      quote: "5 appointments today, all set by text.",
      name: "Elliot V.",
      role: "Mortgage protection agent"
    },
    {
      id: "garrett",
      result: "$48/mo saved",
      quote: "Baby policy sold from a prebooked appointment. $48 a month, saved him money, and I didn't have to call or text him.",
      name: "Garrett P.",
      role: "Final expense agent"
    },
    {
      id: "spencer",
      result: "13 transfers",
      quote: "Update for you, closed two deals yesterday from 13 live transfers the day before that just needed follow-up.",
      name: "Spencer P.",
      role: "Agency owner"
    }
  ] satisfies Testimonial[]
};

export const complianceContent = {
  hero: {
    eyebrow: "Compliance",
    title: "Compliance isn't a promise. It's enforced in code.",
    description:
      "Quiet hours, consent, disclosures, do-not-call. Not policies your team has to remember, gates every call and text passes through before it leaves."
  } satisfies MarketingHeroContent,
  features: [
    { title: "Fails closed", description: "A do-not-call check error blocks the send. It never leaks." },
    { title: "9am-8pm", description: "Automated calls in the lead's own timezone. Never on Sunday." },
    { title: "One STOP", description: "Closes the thread, cancels drips, confirms from the same number." },
    { title: "Exportable", description: "Every block, opt-out, and consent record on one audit trail." }
  ] satisfies FeatureCardItem[],
  sections: [
    {
      title: "Outreach lands in the legal window.",
      mutedTitle: "The lead's window. Automated calls fire 9am-8pm in the lead's own timezone.",
      description: "Never Sunday. Texts wait for daytime too. Out-of-window work defers to the next legal morning.",
      panel: {
        title: "Compliance gate - quiet hours",
        badge: "Legal local time",
        variant: "table",
        rows: [
          { label: "Drew M. - Tampa, FL", value: "Consent found at 7:03 PM", status: "Cleared", tone: "success" },
          { label: "Clark R. - Phoenix, AZ", value: "Attempt at 8:44 PM local", status: "Deferred", tone: "warning" },
          { label: "M. Shaw - Sacramento, CA", value: "Sunday morning attempt", status: "Deferred", tone: "warning" }
        ]
      }
    },
    {
      title: "No consent proof on file? The AI doesn't dial.",
      mutedTitle: "Leads without documented consent are locked out of AI voice.",
      description: "The dialer skips them. Consent lives on the lead source, opt-in language, timestamp, proof file.",
      panel: {
        title: "Lead consent file",
        badge: "Consent on record",
        variant: "table",
        rows: [
          { label: "Linda P.", value: "Opt-in language, source, timestamp", status: "Voice and SMS", tone: "success" },
          { label: "J. Alvarez", value: "Consent proof missing", status: "SMS only", tone: "warning" }
        ]
      }
    },
    {
      title: "Your AI introduces itself as an AI.",
      mutedTitle: "Set your disclosure once, agency-wide, and it opens every AI call.",
      description: "If any rule changes, INSURVAS pauses the number until the recorded disclosure is corrected.",
      panel: {
        title: "AI call opening",
        badge: "Disclosure locked",
        variant: "conversation",
        rows: [
          { label: "Ashley AI", value: "Hi, this is Ashley, an automated assistant with the life insurance office, calling on a recorded line." },
          { label: "System", value: "Disclosure passed. State and agency rules satisfied." }
        ]
      }
    },
    {
      title: "The dialer paces to you.",
      mutedTitle: "Not a statistical model. First human wins, extra lines are released before anyone hears silence.",
      description: "Answering machine detection and recorded callback messages are tracked.",
      panel: {
        title: "Pacer - live agent queue",
        badge: "No dead air",
        variant: "table",
        rows: [
          { label: "Line 1", value: "555-210-0981", status: "Connected", tone: "success" },
          { label: "Line 2", value: "555-771-5548", status: "Released before answer", tone: "info" },
          { label: "Line 3", value: "555-802-9130", status: "No answer", tone: "neutral" }
        ]
      }
    },
    {
      title: "One STOP shuts it all down.",
      mutedTitle: "Conversation closed, drips cancelled, DNC written, confirmation sent from the same number.",
      description: "A spoken opt-out to the AI is honored the same way.",
      panel: {
        title: "Inbound STOP",
        badge: "Opt-out honored",
        variant: "table",
        rows: [
          { label: "Conversation closed", value: "AI disabled for this lead", status: "Done", tone: "success" },
          { label: "Drip cancelled", value: "Future texts and emails stopped", status: "Done", tone: "success" },
          { label: "Confirmation sent", value: "Same number reply", status: "Done", tone: "success" }
        ]
      }
    },
    {
      title: "Every send passes one do-not-call gate.",
      mutedTitle: "If the check itself errors, the message is withheld.",
      description: "Every block and pass is logged and imports are scrubbed against your list on entry.",
      panel: {
        title: "DNC enforcement",
        badge: "Export CSV",
        variant: "table",
        rows: [
          { label: "12:47 PM", value: "STOP reply - SMS closed", status: "DNC added", tone: "danger" },
          { label: "2:04 PM", value: "Lead matched internal DNC", status: "Suppressed", tone: "danger" },
          { label: "5:31 PM", value: "Open outreach checked", status: "Pass", tone: "success" }
        ]
      }
    }
  ] satisfies DetailSection[],
  trust: [
    { title: "Encrypted in transit and at rest", description: "Traffic moves over TLS and data lives on encrypted managed infrastructure." },
    { title: "Your book is walled off", description: "Tenant isolation is structural, no other agency on the platform can touch your leads." },
    { title: "Recordings stay private", description: "Call recordings are never public. Playback uses signed, expiring URLs." },
    { title: "PII stays out of error tooling", description: "Customer emails are scrubbed before error reports leave the system." },
    { title: "Privacy requests honored", description: "CCPA do-not-sell and deletion requests are processed with a standard audit record." },
    { title: "Registered sender identity", description: "Carrier A2P brand and campaign registration is handled for you or your team." },
    { title: "Email sends in the legal window", description: "Outbound sequences respect state-specific quiet hours and suppression rules." },
    { title: "Unsubscribe honored, senders verified", description: "Every email carries unsubscribe controls and verified sending domains." }
  ] satisfies FeatureCardItem[],
  proofBullets: [
    "A consent record on every lead",
    "Imports scrubbed on entry",
    "Compliance state where agents work",
    "A deliberate attestation step",
    "An audit trail you can hand over"
  ],
  cta: {
    title: "Run outreach you can defend.",
    mutedTitle: "Not rules your team remembers. Gates the platform enforces.",
    primaryAction: { label: "Watch the demo", href: routes.demo },
    secondaryAction: { label: "Talk to us", href: routes.demo }
  }
};

export const affiliatesContent = {
  hero: {
    eyebrow: "Affiliates",
    title: "Get paid to refer INSURVAS.",
    description:
      "Earn $15 in usage credit every month, for every account you refer, for as long as they stay a paying customer. Open to every INSURVAS user, no cap, and it compounds as you go.",
    primaryAction: { label: "Apply now", href: "#apply" },
    secondaryAction: { label: "Talk to us", href: routes.demo }
  } satisfies MarketingHeroContent,
  steps: [
    { eyebrow: "01", title: "Apply", description: "Takes a minute. You just need an active INSURVAS account." },
    { eyebrow: "02", title: "Get your link", description: "Approved affiliates get a personal link and code by email." },
    { eyebrow: "03", title: "Refer anyone", description: "Agents or agencies, any account that goes paid counts." },
    { eyebrow: "04", title: "Get rewarded monthly", description: "$15 credit lands in your wallet every month each referral stays paid." }
  ] satisfies FeatureCardItem[],
  benefits: [
    { value: "$15/mo", label: "Per active referral, credited every month they stay paid" },
    { value: "Lifetime", label: "Accrues for as long as the account keeps its subscription" },
    { value: "30 days", label: "Attribution window on your link" },
    { value: "No cap", label: "On referrals or lifetime earnings" }
  ] satisfies MarketingStat[],
  faq: [
    {
      title: "Who can apply to the affiliate program?",
      description: "Any existing INSURVAS AI account holder. Your referral link and rewards are tied to your account."
    },
    {
      title: "What counts as a referral?",
      description: "Anyone who signs up using your referral link or code and converts from a trial to a paying subscription."
    },
    {
      title: "When and how do I get rewarded?",
      description: "Automatically, every billing cycle. Each month a referred account pays, $15 in usage credit lands in your INSURVAS wallet."
    },
    {
      title: "What can I spend referral credit on?",
      description: "Everything your usage wallet covers: AI voice minutes, SMS segments, and additional phone numbers."
    },
    {
      title: "How long do rewards keep accruing?",
      description: "For as long as the referred account stays a paying customer. There is no cap and no expiry."
    },
    {
      title: "What happens if a referral refunds or disputes a charge?",
      description: "That month's credit is reversed. A reversal can take your wallet balance negative until future rewards offset it."
    },
    {
      title: "Do I need to handle taxes on my rewards?",
      description: "Referral credit is platform usage credit, not cash. It is not paid out and is not reported as income."
    }
  ] satisfies FeatureCardItem[]
};

export const getStartedContent = {
  hero: {
    eyebrow: "Get started",
    title: "Choose your plan.",
    description:
      "Sign up as an individual agent, or launch your own white-label AI agency. Live in 48 hours either way, setup done for you."
  } satisfies MarketingHeroContent,
  steps: [
    { eyebrow: "01", title: "Pick your plan", description: "Agents subscribe at $149/mo with a 14-day free trial. Agencies launch white-label with a $499 one-time setup." },
    { eyebrow: "02", title: "We build your AI floor", description: "Five numbers provisioned, A2P registration handled free, Ashley trained on your lead types and calendars." },
    { eyebrow: "03", title: "Go live in 48 hours", description: "Load your leads, flip the switch. Your first AI conversations start the same day." }
  ] satisfies FeatureCardItem[],
  agentPlans: [
    {
      eyebrow: "Monthly",
      name: "Agent subscription",
      price: "$149",
      interval: "/mo",
      description: "per agent, billed monthly",
      features: [
        "14-day free trial",
        "AI Voice, SMS and Email campaigns",
        "5 free phone numbers",
        "Done-for-you AI setup",
        "CRM and lead management",
        "Free A2P registration"
      ],
      actionLabel: "Start free trial",
      href: routes.demo
    },
    {
      eyebrow: "Annual",
      name: "Agent subscription",
      price: "$111.75",
      interval: "/mo",
      badge: "3 months free",
      description: "Save $447 a year, $1,341 billed today",
      features: [
        "AI Voice, SMS and Email campaigns",
        "5 free phone numbers",
        "Done-for-you AI setup",
        "CRM and lead management",
        "Free A2P registration"
      ],
      actionLabel: "Get annual",
      href: routes.demo,
      highlighted: true
    }
  ] satisfies PricingPlan[],
  agencyPlans: [
    {
      eyebrow: "Independent - self-serve",
      name: "White-label agency",
      price: "$499",
      interval: "once",
      description: "one-time setup plus $10 monthly agency fee",
      features: [
        "Your own white-labeled platform with your logo, colors, and brand",
        "Agency lead management with automatic routing",
        "Agency-wide data and compliance management",
        "Back Office AI across your whole hierarchy",
        "Full agent management for your downline",
        "Every agent's CRM linked into one agency view"
      ],
      actionLabel: "Start my agency",
      href: routes.affiliates
    },
    {
      eyebrow: "Enterprise - sales-assisted",
      name: "Custom",
      price: "Custom",
      badge: "Scales with your team",
      description: "custom seat and support pricing built around your agency's size",
      features: [
        "Everything in Independent, plus priority support",
        "Monthly allotted usage included on every seat",
        "Volume seat discounts as your agency scales",
        "Discounted usage rates on voice and SMS"
      ],
      actionLabel: "Talk to sales",
      href: routes.demo
    }
  ] satisfies PricingPlan[],
  assurance: [
    { title: "Free A2P registration.", description: "The $40+ carrier paperwork every other tool charges for, handled and paid." },
    { title: "Cancel anytime.", description: "Two clicks in settings, no call, no retention script." },
    { title: "Live in 48 hours.", description: "Setup is done for you, not by you." }
  ] satisfies FeatureCardItem[],
  cta: {
    title: "Nothing billed for 14 days.",
    mutedTitle: "Cancel in two clicks, no retention script.",
    primaryAction: { label: "Start free trial", href: routes.demo },
    secondaryAction: { label: "Watch the demo", href: routes.demo }
  }
};

export const homeContent = {
  hero: {
    eyebrow: "Ashley now answers your inbound calls",
    title: "Every lead worked. Every policy tracked.",
    titleLines: ["Every lead worked.", "Every policy tracked."],
    description:
      "The first CRM that automates life insurance sales with AI. From AI qualified, booked, and transferred conversations, to automating your book of business and organization hierarchy.",
    primaryAction: { label: "Start free trial", href: routes.getStarted },
    secondaryAction: { label: "Watch the demo", href: routes.demo }
  } satisfies MarketingHeroContent,
  dashboard: {
    url: "app.insurvas.ai / Dashboard",
    ranges: ["Today", "Last 7d", "MTD", "Last 90d"],
    activeRange: "MTD",
    campaignFilter: "All campaigns",
    kpis: [
      {
        label: "Appointments booked",
        value: "128",
        delta: "+3.2%",
        icon: "calendar",
        spark: [8, 11, 9, 14, 12, 17, 16, 21]
      },
      {
        label: "Live transfers",
        value: "47",
        delta: "+6.0%",
        icon: "phone",
        spark: [6, 8, 7, 11, 10, 13, 15, 18]
      },
      {
        label: "Time saved by AI",
        value: "86h 20m",
        delta: "+15.3%",
        icon: "zap",
        spark: [5, 9, 8, 12, 15, 14, 19, 24]
      }
    ],
    gauges: [
      { percent: 68, label: "PD pickup", sublabel: "rate", tone: "green" },
      { percent: 22, label: "PD pickup", sublabel: "— close", tone: "orange" },
      { percent: 31, label: "PD pickup", sublabel: "— appt", tone: "violet" }
    ],
    premium: {
      label: "Premium vs last month",
      caption: "MTD",
      points: [
        { name: "Wk 1", current: 21000, previous: 18000 },
        { name: "Wk 2", current: 38000, previous: 26000 },
        { name: "Wk 3", current: 49000, previous: 35000 },
        { name: "Wk 4", current: 62000, previous: 44000 }
      ]
    },
    activity: {
      label: "Activity by hour",
      caption: "Today",
      bars: [
        { name: "9a", calls: 40, contacts: 30 },
        { name: "10a", calls: 55, contacts: 42 },
        { name: "11a", calls: 68, contacts: 30 },
        { name: "12p", calls: 52, contacts: 62 },
        { name: "1p", calls: 74, contacts: 45 },
        { name: "2p", calls: 58, contacts: 38 },
        { name: "3p", calls: 84, contacts: 52 },
        { name: "4p", calls: 92, contacts: 40 },
        { name: "5p", calls: 66, contacts: 58 },
        { name: "6p", calls: 70, contacts: 34 },
        { name: "7p", calls: 48, contacts: 44 }
      ]
    },
    breakdown: {
      label: "Call breakdown",
      centerValue: "18%",
      slices: [
        { label: "Completed", value: "512", count: 512, tone: "violet" },
        { label: "No answer / VM", value: "348", count: 348, tone: "indigo" },
        { label: "Appt set", value: "118", count: 118, tone: "yellow" },
        { label: "Transfer", value: "86", count: 86, tone: "green" }
      ]
    }
  } satisfies DashboardPanelContent,
  trustNote: "Built for life insurance agencies. 500+ licensed agents across 50 states.",
  trustItems: [
    { label: "Aged leads", icon: "leads" },
    { label: "SMS and email AI", icon: "messaging" },
    { label: "Power dialer", icon: "dialer" },
    { label: "AI booking", icon: "calendar" },
    { label: "Carrier statements", icon: "statements" },
    { label: "Policy book", icon: "book" },
    { label: "A2P compliant", icon: "shield" }
  ] satisfies TrustItem[],
  stats: [
    { value: "2,500", label: "AI calls per day, per agent" },
    { value: "28s", label: "Average speed to lead" },
    { value: "$2.9M+", label: "Sales generated through Orion*" },
    { value: "500+", label: "Agents on Orion" }
  ] satisfies MarketingStat[],
  overview: {
    label: "Platform",
    title: "The sales floor that never clocks out.",
    mutedTitle:
      "Picks up new leads in 28 seconds. Books them, dials them on three lines, and tracks every policy and every dollar of the hierarchy behind them."
  },
  rail: ["Answer every lead", "Book appointments", "Dial three lines", "Run the back office"],
  sections: [
    {
      title: "Every reply handled like your best closer wrote it.",
      mutedTitle: "Voice, SMS, and email, one brain. On the record, every time."
    },
    {
      title: "Booked straight onto the right calendar.",
      mutedTitle: "Ashley checks availability, sets the slot, and confirms by text."
    },
    {
      title: "Triple your dials without touching a keypad.",
      mutedTitle:
        "MLPD runs three lines at once, eats the voicemails and dead numbers, and drops you into live conversations only."
    },
    {
      title: "Your whole hierarchy, every dollar, every risk.",
      mutedTitle:
        "Production rolls up the team tree live. Persistency, rollup debt, and every policy tracked to the carrier statement."
    }
  ] satisfies WalkthroughSection[],
  splitNotes: [
    {
      title: "One subscription, two products.",
      description:
        "Sales AI and Back Office AI are not separate line items. You get the dialer, the AI, the CRM, the policy book, and the comp plans in the same seat."
    },
    {
      title: "Live in 48 hours.",
      description:
        "Pick your plan, we build your AI floor around your carriers and calendars, and your first campaign goes out inside two days."
    }
  ] satisfies FeatureCardItem[],
  ashley: {
    name: "Ashley",
    eyebrow: "Meet",
    headline: "The AI agent on every one of your numbers, on every channel, at every hour.",
    capabilities: [
      {
        eyebrow: "Answers at 2am",
        title: "Answers at 2am.",
        description: "Inbound or outbound, she picks up in two rings."
      },
      {
        eyebrow: "Books the slot",
        title: "Books the slot.",
        description: "Straight onto the right agent's calendar."
      },
      {
        eyebrow: "Transfers live",
        title: "Transfers live.",
        description: "Hot lead on the line, warm handoff to you."
      },
      {
        eyebrow: "Logs everything",
        title: "Logs everything.",
        description: "Transcript, disposition, and next step on the record."
      },
      {
        eyebrow: "Never burns a lead",
        title: "Never burns a lead.",
        description: "Aged lists get worked with the same patience as fresh ones."
      }
    ] satisfies FeatureCardItem[]
  },
  quote: {
    text: "Bro, 11 transfers in 30 minutes. I can't get to them all.",
    attribution: "Jared C. - Mortgage protection agent"
  },
  proofNotes: [
    {
      title: "Built only for life insurance.",
      description: "Final expense, IUL, mortgage protection, veterans, whole life. Every workflow assumes you write policies."
    },
    {
      title: "Setup, done for you.",
      description: "Numbers registered, AI configured, hierarchy imported. Most agencies run their first campaign within 20 minutes."
    },
    {
      title: "One tool. One bill.",
      description: "Stop paying for a CRM, a dialer, a commission tracker, a VA, and an AI add-on. One subscription, one login."
    }
  ] satisfies FeatureCardItem[],
  pricing: {
    title: "One plan, everything on.",
    mutedTitle: "Five phone numbers, done-for-you AI setup, and free A2P registration on every seat.",
    plans: [
      {
        eyebrow: "Monthly",
        name: "",
        price: "$149",
        interval: "/mo",
        description: "per agent · 14-day free trial",
        features: [
          "Ashley on voice, SMS, and email",
          "Multi-line power dialer and AI booking",
          "Full back office, policy book, and comp plans",
          "A2P 10DLC brand and campaign registration",
          "Compliance monitoring and evidence exports"
        ],
        actionLabel: "Start free trial",
        href: routes.getStarted
      },
      {
        eyebrow: "Annual",
        name: "",
        price: "$1,341",
        interval: "/yr",
        badge: "3 months free",
        description: "billed annually · about $111.75/mo",
        features: [
          "Everything in the monthly plan",
          "Three months free versus paying monthly",
          "Priority AI floor build and onboarding",
          "Locked rate for the full term"
        ],
        actionLabel: "Get annual",
        href: routes.getStarted,
        highlighted: true
      }
    ] satisfies PricingPlan[]
  },
  closingCta: {
    title: "Every lead your agency owns, worked to the end.",
    mutedTitle: "Nothing billed for 14 days.",
    primaryAction: { label: "Start free trial", href: routes.getStarted },
    secondaryAction: { label: "Watch the demo", href: routes.demo }
  }
};
