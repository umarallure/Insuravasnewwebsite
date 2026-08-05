export type AsyncStatus = "idle" | "loading" | "success" | "error";

export interface SelectOption<TValue extends string = string> {
  label: string;
  value: TValue;
}

export interface StatItem {
  value: string;
  label: string;
}
