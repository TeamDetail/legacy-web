import { CardpackResponse } from "@src/types/shop/cardpack.type";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKey";
import shopApi from "@src/api/shop/shop.api";

export const useGetCardpack = (
  options?: Partial<
    UseQueryOptions<
      CardpackResponse,
      Error,
      CardpackResponse,
      typeof QUERY_KEYS.shop.getCardpack
    >
  >
) =>
  useQuery({
    queryKey: QUERY_KEYS.shop.getCardpack,
    queryFn: shopApi.getCardpack,
    staleTime: 1000 * 10,
    gcTime: 1000 * 60 * 5,
    ...options,
  });
