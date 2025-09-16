import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

export const SearchRuinsModalContainer = styled.div`
  width: 440px;
  height: 520px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 20px;
  background-color: ${LegacyPalette.backgroundNormal};
  overflow: hidden;
`;

export const SearchRuinsModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${LegacyTypography.Pretendard.Heading1.Bold};
  color: ${LegacyPalette.labelNormal};
`;

export const SearchRuinsModalMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  padding-right: 12px;
`;

export const Search = styled.form`
  flex-grow: 1;
  padding: 0px 12px;
  display: flex;
  gap: 8px;
  align-items: center;
  height: 36px;
  border-radius: 12px;
  background-color: ${LegacyPalette.fillNormal};

  input {
    ${LegacyTypography.Pretendard.Label.Medium};
    color: ${LegacyPalette.labelNormal};
    height: 100%;
    flex-grow: 1;
    border: none;
    background: none;

    &::placeholder {
      color: ${LegacyPalette.labelAlternative};
    }

    &:focus {
      outline: none;
    }
  }
`;

export const SearchButton = styled.div`
  height: 36px;
  padding: 0 12px;
  ${LegacyTypography.Pretendard.Label.Bold};
  color: ${LegacyPalette.labelNormal};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${LegacyPalette.fillNormal};
  user-select: none;
  cursor: pointer;
`;

export const EmptyCourseMessage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${LegacyTypography.Pretendard.Heading1.Bold};
  color: ${LegacyPalette.labelNormal};
  gap: 8px;

  span {
    ${LegacyTypography.Pretendard.Body1.Medium};
    color: ${LegacyPalette.labelAlternative};
  }
`;

export const RuinNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  ${LegacyTypography.Pretendard.Headline.Bold};
  color: ${LegacyPalette.labelNormal};
  span {
    ${LegacyTypography.Pretendard.Caption1.Medium};
    color: ${LegacyPalette.labelAlternative};
  }
  p {
    ${LegacyTypography.Pretendard.Caption1.Regular};
    color: ${LegacyPalette.labelAlternative};
  }
`;

export const ScoreContainer = styled.div<{ $gap: string }>`
  display: flex;
  gap: 2px;
  color: ${LegacyPalette.fillAlternative};
  ${LegacyTypography.Pretendard.Caption2.Medium}
`;

export const RuinNameScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SearchRuinsResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
