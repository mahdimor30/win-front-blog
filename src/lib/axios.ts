const baseURL = "https://rest.winatalent.com/api/v1/";


import axios, { type AxiosError, type AxiosRequestConfig } from "axios";
import { toast } from "sonner";

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (axios.isCancel(error)) {
      window.console.log("Request canceled", error.message);
    }

    return Promise.reject(error);
  },
);

export const get = async <TResponse>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<TResponse> => {
  try {
    const response = await axiosInstance.get<TResponse>(url, config);
    return response.data;
  } catch (error) {
    const message = (error as AxiosError<{ message: string }>).response?.data
      ?.message;
    toast.error(message ?? "Retch Filed");
    throw error;
  }
};
