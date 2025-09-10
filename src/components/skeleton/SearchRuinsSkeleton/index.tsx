import styled from "styled-components";
import { skeletonAnimtaion } from "../animation";

const SearchRuinsSkeleton = () => {
  return (
    <SearchRuinsResultWrapper>
      <div />
      <div />
      <div />
    </SearchRuinsResultWrapper>
  );
};

export default SearchRuinsSkeleton;

const SearchRuinsResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  div {
    width: 100%;
    height: 76px;
    border-radius: 12px;
    ${skeletonAnimtaion};
  }
`;
