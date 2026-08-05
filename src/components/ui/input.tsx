import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, error, ...props }, ref) => (
  <input
    ref={ref}
    aria-invalid={Boolean(error)}
    className={cn(
      "h-11 w-full rounded-md border border-input bg-surface-muted px-4 text-sm text-foreground outline-none transition-colors duration-base placeholder:text-muted-foreground/75 focus:border-ring focus:ring-2 focus:ring-ring/35 disabled:cursor-not-allowed disabled:opacity-60",
      error && "border-danger focus:border-danger focus:ring-danger/30",
      className
    )}
    {...props}
  />
));

Input.displayName = "Input";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => (
    <textarea
      ref={ref}
      aria-invalid={Boolean(error)}
      className={cn(
        "min-h-28 w-full resize-y rounded-md border border-input bg-surface-muted px-4 py-3 text-sm text-foreground outline-none transition-colors duration-base placeholder:text-muted-foreground/75 focus:border-ring focus:ring-2 focus:ring-ring/35 disabled:cursor-not-allowed disabled:opacity-60",
        error && "border-danger focus:border-danger focus:ring-danger/30",
        className
      )}
      {...props}
    />
  )
);

Textarea.displayName = "Textarea";
