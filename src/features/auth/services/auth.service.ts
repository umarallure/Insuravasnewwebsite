import type { LoginValues } from "@/features/auth/schemas/login.schema";
import type { LoginResponse } from "@/features/auth/types/auth.types";

export async function login(values: LoginValues): Promise<LoginResponse> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    userId: "demo-user",
    email: values.email,
    message: values.rememberDevice ? "Signed in and this device was remembered." : "Signed in successfully."
  };
}
