import { Suspense } from "react";
import styled from "styled-components";
import FriendRequestListContainer from "./FriendRequestListContainer";

const FriendRequestList = () => {
  return (
    <FriendRequestListWrapper>
      <Suspense>
        <FriendRequestListContainer type="requests" />
      </Suspense>
      <Suspense>
        <FriendRequestListContainer type="sents" />
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
`;
