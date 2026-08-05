import { z } from "zod";

export const affiliateApplicationSchema = z.object({
  firstName: z.string().min(2, "Enter your first name."),
  lastName: z.string().min(2, "Enter your last name."),
  accountEmail: z.string().email("Enter the email on your INSURVAS account."),
  payoutEmail: z.string().email("Enter a valid payout email.").optional().or(z.literal("")),
  audience: z.string().min(2, "Tell us where you will share INSURVAS."),
  consent: z.boolean().refine((value) => value, "You must agree to the affiliate terms.")
});

export type AffiliateApplicationValues = z.infer<typeof affiliateApplicationSchema>;
