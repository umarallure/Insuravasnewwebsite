export interface ApiError {
  code: string;
  message: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: ApiError;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}
