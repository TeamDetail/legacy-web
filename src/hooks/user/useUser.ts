import { useGetMeQuery, useGetUserQuery } from "@src/queries/user/user.queries";
import { useEffect, useState } from "react";

const useUser = (isMyData?: boolean) => {
  const [userId, setUserId] = useState<number | null>(null);

  const { data: otherUserData, refetch: getUserData } = useGetUserQuery(
    userId!,
    { enabled: !!userId }
  );
  const { data: myUserData } = useGetMeQuery({
    enabled: isMyData,
    suspense: true,
  });

  const getUserById = (id: number) => {
    setUserId(id);
  };

  useEffect(() => {
    if (userId) {
      getUserData();
    }
  }, [userId]);

  return {
    otherUserData,
    myUserData,
    getUserById,
  };
};

export default useUser;
