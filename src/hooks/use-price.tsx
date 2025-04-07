import { useQuery } from "@tanstack/react-query";

import { get } from "@/lib/axios";

export const usePrice = () => {
  return useQuery({
    queryKey: ["price"],
    queryFn: () =>
      get<{ price: string; updated_at: string }>("service/exchange-rate"),
    staleTime: Infinity,
  });
};
