"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormField } from "@/components/shared/form-field";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Tooltip } from "@/components/ui/tooltip";
import { routes } from "@/constants/routes";
import { getErrorMessage } from "@/lib/utils";
import { loginSchema, type LoginValues } from "@/features/auth/schemas/login.schema";
import { login } from "@/features/auth/services/auth.service";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberDevice: false
    }
  });

  async function onSubmit(values: LoginValues) {
    setMessage(null);
    setError(null);

    try {
      const response = await login(values);
      setMessage(response.message);
    } catch (submitError) {
      setError(getErrorMessage(submitError, "We could not sign you in. Please try again."));
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      {message ? <Alert variant="success">{message}</Alert> : null}
      {error ? <Alert variant="danger">{error}</Alert> : null}
      <FormField id="email" label="Email" required error={errors.email?.message}>
        <Input id="email" type="email" placeholder="you@example.com" autoComplete="email" error={errors.email?.message} {...register("email")} />
      </FormField>
      <FormField id="password" label="Password" required error={errors.password?.message}>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="********"
            autoComplete="current-password"
            error={errors.password?.message}
            className="pr-12"
            {...register("password")}
          />
          <Tooltip label={showPassword ? "Hide password" : "Show password"}>
            <button
              type="button"
              className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-surface-elevated hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((current) => !current)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" aria-hidden="true" /> : <Eye className="h-4 w-4" aria-hidden="true" />}
            </button>
          </Tooltip>
        </div>
      </FormField>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <Checkbox id="rememberDevice" label="Remember this device for 30 days" {...register("rememberDevice")} />
        <Link
          href={routes.login}
          className="text-sm font-semibold text-primary-hover hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Forgot your password?
        </Link>
      </div>
      <Button type="submit" variant="inverse" fullWidth isLoading={isSubmitting}>
        Sign In
      </Button>
      <p className="text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link href={routes.getStarted} className="font-semibold text-primary-hover hover:text-primary">
          Start your free trial
        </Link>
      </p>
    </form>
  );
}
