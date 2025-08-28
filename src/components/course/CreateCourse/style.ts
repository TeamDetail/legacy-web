import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const CreateCourseContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
  border-radius: 20px;
  background-color: ${LegacyPalette.backgroundNormal};
  overflow: hidden;
`;

export const CreateCourseHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CreateCourseBaseInfoForm = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CourseNameInput = styled.input`
  height: 48px;
  width: 100%;
  padding: 0 20px;
  border-radius: 12px;
  color: ${LegacyPalette.labelNormal};
  ${LegacyTypography.Pretendard.Body1.Bold};
  background-color: ${LegacyPalette.fillNormal};
  border: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${LegacyPalette.labelAlternative};
  }
`;

export const CreateCourseButtonText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${LegacySementic.green.normal};
  ${LegacyTypography.Pretendard.Body1.Bold};
`;

export const CreateCourseBody = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  gap: 12px;
  min-height: 0;
`;

export const SelectRuinsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
`;

export const SelectRuinsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  ${LegacyTypography.Pretendard.Body1.Bold};
  color: ${LegacyPalette.labelNormal};

  span {
    ${LegacyTypography.Pretendard.Label.Medium};
    color: ${LegacyPalette.statusNegative};
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${LegacyTypography.Pretendard.Body1.Bold};
  color: ${LegacyPalette.labelNormal};

  textarea {
    resize: none;
    width: 100%;
    min-height: 8px;
    background-color: ${LegacyPalette.fillNormal};
    border: none;
    border-radius: 12px;
    padding: 20px;
    ${LegacyTypography.Pretendard.Body1.Bold};
    color: ${LegacyPalette.labelNormal};
    box-sizing: border-box;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    font-family: inherit; /* 폰트 상속 확인 */
  }
`;
