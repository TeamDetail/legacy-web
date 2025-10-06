import styled from "styled-components";
import { skeletonAnimtaion } from "../animation";

const MyFriendRequestSkeleton = () => {
  return (
    <FriendRequestListWrapper>
      <p />
      <FriendRequestListDataWrapper>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} />
        ))}
      </FriendRequestListDataWrapper>
    </FriendRequestListWrapper>
  );
};

export default MyFriendRequestSkeleton;

export const FriendRequestListWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    height: 19px;
    width: 128px;
    ${skeletonAnimtaion};
    border-radius: 8px;
  }
`;

export const FriendRequestListDataWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

  div {
    width: 100%;
    height: 96px;
    ${skeletonAnimtaion};
    border-radius: 8px;
  }
`;
