import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}

export function FormField({ id, label, required, error, hint, children, className }: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <label htmlFor={id} className="block text-sm font-semibold text-foreground">
        {label}
        {required ? <span className="ml-1 text-primary-hover" aria-hidden="true">*</span> : null}
      </label>
      {children}
      {hint ? <p className="text-caption text-muted-foreground">{hint}</p> : null}
      {error ? (
        <p className="text-caption font-medium text-danger" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
