import { get } from "@/lib/axios";

export const getPrice = async () => {
  const response = await get<{ price: string; updated_at: string }>(
    "service/exchange-rate"
  );
  return response;
};
