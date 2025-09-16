import { Mail } from "@src/types/inventory/inventory.type";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKey";
import mailApi from "@src/api/mail/mail.api";

export const useGetMailQuery = (
  options?: Partial<
    UseQueryOptions<Mail[], Error, Mail[], typeof QUERY_KEYS.mail.getMail>
  >
) =>
  useQuery({
    queryKey: QUERY_KEYS.mail.getMail,
    queryFn: mailApi.getMailApi,
    ...options,
  });
