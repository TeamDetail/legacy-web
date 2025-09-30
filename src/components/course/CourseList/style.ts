import { LegacyPalette } from "@src/constants/color/color";
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
  position: relative;
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

export const EmptyCourseMessage = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CreateCourseButton = styled.div`
  position: absolute;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  border-radius: 999px;
  background-color: ${LegacyPalette.fillNormal};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;
