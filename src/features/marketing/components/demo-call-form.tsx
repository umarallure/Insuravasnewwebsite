"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert } from "@/components/ui/alert";
import { FormField } from "@/components/shared/form-field";
import { getErrorMessage } from "@/lib/utils";
import { demoRequestSchema, type DemoRequestValues } from "@/features/marketing/schemas/demo.schema";
import { submitDemoRequest } from "@/features/marketing/services/marketing.service";

export function DemoCallForm() {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<DemoRequestValues>({
    resolver: zodResolver(demoRequestSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      consent: false
    }
  });

  async function onSubmit(values: DemoRequestValues) {
    setError(null);
    setMessage(null);

    try {
      const response = await submitDemoRequest(values);
      setMessage(response.message);
      reset();
    } catch (submitError) {
      setError(getErrorMessage(submitError, "We could not schedule the call. Please try again."));
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      {message ? <Alert variant="success">{message}</Alert> : null}
      {error ? <Alert variant="danger">{error}</Alert> : null}
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField id="firstName" label="First Name" required error={errors.firstName?.message}>
          <Input id="firstName" placeholder="John" autoComplete="given-name" error={errors.firstName?.message} {...register("firstName")} />
        </FormField>
        <FormField id="lastName" label="Last Name" required error={errors.lastName?.message}>
          <Input id="lastName" placeholder="Doe" autoComplete="family-name" error={errors.lastName?.message} {...register("lastName")} />
        </FormField>
      </div>
      <FormField id="email" label="Email" required error={errors.email?.message}>
        <Input id="email" type="email" placeholder="john@agency.com" autoComplete="email" error={errors.email?.message} {...register("email")} />
      </FormField>
      <FormField id="phone" label="Phone Number" required error={errors.phone?.message}>
        <Input id="phone" type="tel" placeholder="(555) 234-5678" autoComplete="tel" error={errors.phone?.message} {...register("phone")} />
      </FormField>
      <div>
        <Checkbox id="demo-consent" aria-describedby="demo-consent-error" {...register("consent")} />
        <label htmlFor="demo-consent" className="ml-3 align-top text-caption leading-5 text-muted-foreground">
          By checking this box, I consent to receive phone calls, SMS text messages, and emails from INSURVAS Inc.
          including promotional messages about life insurance services.
        </label>
        {errors.consent?.message ? (
          <p id="demo-consent-error" className="mt-2 text-caption font-medium text-danger" role="alert">
            {errors.consent.message}
          </p>
        ) : null}
      </div>
      <Button type="submit" variant="inverse" fullWidth isLoading={isSubmitting}>
        Talk to Ashley Now
      </Button>
    </form>
  );
}
