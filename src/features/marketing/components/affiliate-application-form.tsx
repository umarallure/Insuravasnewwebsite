"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormField } from "@/components/shared/form-field";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input, Textarea } from "@/components/ui/input";
import { getErrorMessage } from "@/lib/utils";
import {
  affiliateApplicationSchema,
  type AffiliateApplicationValues
} from "@/features/marketing/schemas/affiliate.schema";
import { submitAffiliateApplication } from "@/features/marketing/services/marketing.service";

export function AffiliateApplicationForm() {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<AffiliateApplicationValues>({
    resolver: zodResolver(affiliateApplicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      accountEmail: "",
      payoutEmail: "",
      audience: "",
      consent: false
    }
  });

  async function onSubmit(values: AffiliateApplicationValues) {
    setError(null);
    setMessage(null);

    try {
      const response = await submitAffiliateApplication(values);
      setMessage(response.message);
      reset();
    } catch (submitError) {
      setError(getErrorMessage(submitError, "We could not submit the application. Please try again."));
    }
  }

  return (
    <form className="space-y-4 rounded-md border border-border bg-surface p-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      {message ? <Alert variant="success">{message}</Alert> : null}
      {error ? <Alert variant="danger">{error}</Alert> : null}
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField id="affiliate-first-name" label="First name" required error={errors.firstName?.message}>
          <Input id="affiliate-first-name" placeholder="First name" error={errors.firstName?.message} {...register("firstName")} />
        </FormField>
        <FormField id="affiliate-last-name" label="Last name" required error={errors.lastName?.message}>
          <Input id="affiliate-last-name" placeholder="Last name" error={errors.lastName?.message} {...register("lastName")} />
        </FormField>
      </div>
      <FormField id="accountEmail" label="INSURVAS account email" required error={errors.accountEmail?.message}>
        <Input id="accountEmail" type="email" placeholder="you@youragency.com" error={errors.accountEmail?.message} {...register("accountEmail")} />
      </FormField>
      <FormField id="payoutEmail" label="PayPal email for payouts" hint="Optional. Where cash payouts go if you are invited to Pro." error={errors.payoutEmail?.message}>
        <Input id="payoutEmail" type="email" placeholder="payouts@youremail.com" error={errors.payoutEmail?.message} {...register("payoutEmail")} />
      </FormField>
      <FormField id="audience" label="Where will you share?" required error={errors.audience?.message}>
        <Textarea id="audience" placeholder="YouTube, TikTok, Instagram, agency newsletter..." error={errors.audience?.message} {...register("audience")} />
      </FormField>
      <div>
        <Checkbox id="affiliate-consent" aria-describedby="affiliate-consent-error" {...register("consent")} />
        <label htmlFor="affiliate-consent" className="ml-3 align-top text-caption leading-5 text-muted-foreground">
          I agree to the affiliate terms, privacy policy, and terms of service. I consent to receive product and program updates by SMS and email.
        </label>
        {errors.consent?.message ? (
          <p id="affiliate-consent-error" className="mt-2 text-caption font-medium text-danger" role="alert">
            {errors.consent.message}
          </p>
        ) : null}
      </div>
      <Button type="submit" variant="inverse" fullWidth isLoading={isSubmitting}>
        Apply now
      </Button>
      <p className="text-center text-caption text-muted-foreground">Must match an active INSURVAS account.</p>
    </form>
  );
}
