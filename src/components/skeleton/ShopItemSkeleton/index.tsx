import styled from "styled-components";
import { skeletonAnimtaion } from "../animation";

const ShopItemSkeleton = () => {
  return (
    <ShopItemSkeletonContainer>
      {Array.from({ length: 12 }).map((_, idx) => (
        <div key={idx} />
      ))}
    </ShopItemSkeletonContainer>
  );
};

export default ShopItemSkeleton;

const ShopItemSkeletonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: fit-content;
  grid-gap: 16px;
  @media (max-width: 1253px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  overflow-y: auto;
  align-items: start;

  div {
    width: 140px;
    height: 156px;
    ${skeletonAnimtaion};
    border-radius: 12px;
  }
`;
