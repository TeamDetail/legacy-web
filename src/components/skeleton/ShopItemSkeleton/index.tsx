import styled from "styled-components";
import { skeletonAnimtaion } from "../animation";

const ShopItemSkeleton = () => {
  return (
    <ShopItemSkeletonContainer>
      {Array.from({ length: 30 }).map((_, idx) => (
        <div key={idx} />
      ))}
    </ShopItemSkeletonContainer>
  );
};

export default ShopItemSkeleton;

const ShopItemSkeletonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: fit-content;
  grid-gap: 16px;
  overflow-y: auto;

  div {
    width: 136px;
    height: 160px;
    ${skeletonAnimtaion};
    border-radius: 12px;
  }
`;
