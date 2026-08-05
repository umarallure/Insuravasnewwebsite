import { z } from "zod";

export const demoRequestSchema = z.object({
  firstName: z.string().min(2, "Enter your first name."),
  lastName: z.string().min(2, "Enter your last name."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().min(10, "Enter a valid phone number."),
  consent: z.boolean().refine((value) => value, "Consent is required before Ashley can call.")
});

export type DemoRequestValues = z.infer<typeof demoRequestSchema>;
