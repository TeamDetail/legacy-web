import { ItemType } from "@src/types/inventory/inventory.type";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKey";
import inventoryApi from "@src/api/inventory/inventory.api";

export const useGetMyInventory = (
  options?: Partial<
    UseQueryOptions<
      ItemType[],
      Error,
      ItemType[],
      typeof QUERY_KEYS.inventory.getMyInventory
    >
  >
) =>
  useQuery({
    queryKey: QUERY_KEYS.inventory.getMyInventory,
    queryFn: inventoryApi.getMyInventory,
    ...options,
  });
