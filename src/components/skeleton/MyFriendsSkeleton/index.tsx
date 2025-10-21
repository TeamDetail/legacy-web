import { LegacyPalette } from "@src/constants/color/color";
import { skeletonAnimtaion } from "../animation";
import styled from "styled-components";

const MyFriendsSkeleton = () => {
  return (
    <MyFriendListDataWrapper>
      {Array.from({ length: 27 }).map((_, idx) => (
        <div key={idx} />
      ))}
    </MyFriendListDataWrapper>
  );
};

export default MyFriendsSkeleton;

const MyFriendListDataWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  overflow-y: auto;

  @media (max-width: 1040px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
  
  > div {
    ${skeletonAnimtaion};
    height: 96px;
    border-radius: 8px;

    &:hover {
      background-color: ${LegacyPalette.fillNormal};
    }
  }
`;
