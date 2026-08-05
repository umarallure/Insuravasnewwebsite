import type { ApiResponse } from "@/types/api.types";

interface RequestOptions extends RequestInit {
  params?: Record<string, string | number | boolean | undefined>;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

function buildUrl(path: string, params?: RequestOptions["params"]) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = new URL(`${API_BASE_URL}${normalizedPath}`, API_BASE_URL || "http://localhost");

  Object.entries(params ?? {}).forEach(([key, value]) => {
    if (value !== undefined) {
      url.searchParams.set(key, String(value));
    }
  });

  return API_BASE_URL ? url.toString() : `${normalizedPath}${url.search}`;
}

async function request<T>(path: string, options: RequestOptions = {}): Promise<ApiResponse<T>> {
  const { params, headers, ...init } = options;
  const response = await fetch(buildUrl(path, params), {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...headers
    }
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json() as Promise<ApiResponse<T>>;
}

export const apiClient = {
  get: <T>(path: string, options?: RequestOptions) => request<T>(path, { ...options, method: "GET" }),
  post: <T>(path: string, body: unknown, options?: RequestOptions) =>
    request<T>(path, { ...options, method: "POST", body: JSON.stringify(body) })
};
