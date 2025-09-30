import { LegacyPalette } from "@src/constants/color/color";
import styled from "styled-components";
import { skeletonAnimtaion } from "../animation";

const MyFriendRequestSkeleton = () => {
  return (
    <FriendRequestListWrapper>
      <p />
      <FriendRequestListDataWrapper>
        {Array.from({ length: 5 }).map((_, i) => (
          <>
            {i !== 0 && <hr />}
            <div key={i} />
          </>
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
  }
`;

export const FriendRequestListDataWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;

  div {
    width: 100%;
    height: 96px;
    ${skeletonAnimtaion};
  }

  hr {
    border: 0.5px solid ${LegacyPalette.lineAlternative};
  }
`;
