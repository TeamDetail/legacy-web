import { useGetMailQuery } from "@src/queries/mail/mail.query";

const useMail = () => {
  const { data: mails, isFetching: isMailsFetching } = useGetMailQuery();

  return { mails, isMailsFetching };
};

export default useMail;
