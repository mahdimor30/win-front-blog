import createClient from "openapi-fetch";
import qs from "qs";

import { env } from "@/env";

import type { paths } from "./strapi";

const token = env.NEXT_PUBLIC_STRAPI_API_TOKEN;

const baseUrl = `${env.NEXT_PUBLIC_STRAPI_API_URL}/api`;

const client = createClient<paths>({
  baseUrl,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
  querySerializer(params) {
    return qs.stringify(params, {
      encodeValuesOnly: true, // prettify URL
    });
  },
});

// Define types for API response and error
export type ApiResponse<T> = {
  data?: T;
  error?: ApiError;
};

export type ApiError = {
  message: string;
  code?: number;
};

// Utility function for API calls with error handling
export const apiCall = async <T>(
  apiFn: () => Promise<ApiResponse<T>>
): Promise<{ data?: T; error?: string; status: "success" | "error" }> => {
  try {
    const response = await apiFn();
    
    if (response.error) {
      console.error("API Error:", response.error);
      return {
        error: response.error.message || "An error occurred with the API request",
        status: "error",
      };
    }
    
    return {
      data: response.data,
      status: "success",
    };
  } catch (error) {
    console.error("Request Error:", error);
    return {
      error: (error as Error).message || "An unexpected error occurred",
      status: "error",
    };
  }
};

export { client };
