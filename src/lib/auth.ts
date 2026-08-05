export type Permission =
  | "marketing.view"
  | "auth.login"
  | "forms.submit"
  | "design-system.view";

export interface AppUser {
  id: string;
  name: string;
  role: "guest" | "agent" | "admin";
  permissions: Permission[];
}

export function can(user: AppUser | null, permission: Permission) {
  return Boolean(user?.permissions.includes(permission));
}
