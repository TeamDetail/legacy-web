import { Suspense } from "react";
import styled from "styled-components";
import FriendRequestListContainer from "./FriendRequestListContainer";
import MyFriendRequestSkeleton from "@components/skeleton/MyFriendRequestSkeleton";

const FriendRequestList = () => {
  return (
    <FriendRequestListWrapper>
      <Suspense fallback={<MyFriendRequestSkeleton />}>
        <FriendRequestListContainer type="requests" />
      </Suspense>
      <Suspense fallback={<MyFriendRequestSkeleton />}>
        <FriendRequestListContainer type="sent" />
      </Suspense>
    </FriendRequestListWrapper>
  );
};

export default FriendRequestList;

export const FriendRequestListWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  gap: 52px;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    height: fit-content;
    gap: 32px;
  }
`;
