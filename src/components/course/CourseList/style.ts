import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const CourseListContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  border-radius: 20px;
  background-color: ${LegacyPalette.backgroundNormal};
  overflow: hidden;
`;

export const DataContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(auto-fill, auto);
  grid-gap: 16px;
  width: 100%;

  @media (max-width: 940px) {
    grid-template-columns: 1fr 1fr;
  }
  overflow: auto;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SelectWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const Search = styled.div`
  padding: 0px 12px;
  display: flex;
  gap: 8px;
  align-items: center;
  height: 40px;
  border-radius: 12px;
  background-color: ${LegacyPalette.fillNormal};

  input {
    ${LegacyTypography.Pretendard.Label.Medium};
    color: ${LegacyPalette.labelNormal};
    height: 100%;
    flex-grow: 1;
    border: none;
    background: none;
  }
`;

export const EmptyCourseMessage = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
