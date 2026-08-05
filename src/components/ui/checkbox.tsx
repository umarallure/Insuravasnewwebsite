import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const input = (
      <input
        ref={ref}
        id={id}
        type="checkbox"
        className={cn(
          "mt-1 h-4 w-4 shrink-0 rounded-xs border border-input bg-surface text-primary accent-primary outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className
        )}
        {...props}
      />
    );

    if (!label) {
      return input;
    }

    return (
      <label htmlFor={id} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
        {input}
        <span>{label}</span>
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
