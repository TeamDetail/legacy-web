import { Event, EventDetail } from "@src/types/event/event.type";
import {
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKey";
import eventApi from "@src/api/event/event.api";

export const useGetEventQuery = (
  options?: Partial<
    UseQueryOptions<
      Event[],
      Error,
      Event[],
      typeof QUERY_KEYS.event.getEvent
    >
  >
) =>
  useQuery({
    queryKey: QUERY_KEYS.event.getEvent,
    queryFn: eventApi.getEvent,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    ...options,
  });

export const useGetEventDetailQuery = (
  id: number,
  options?: Partial<
    UseQueryOptions<
      EventDetail,
      Error,
      EventDetail,
      ReturnType<typeof QUERY_KEYS.event.getEventDetail>
    >
  >
) =>
  useQuery({
    queryKey: QUERY_KEYS.event.getEventDetail(id),
    queryFn: () => eventApi.getEventDetail(id),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    ...options,
  });
