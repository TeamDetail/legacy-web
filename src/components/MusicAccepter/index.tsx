import { useEffect } from "react"
import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";
import LegacyButton from "@components/common/LegacyButton";

const MusicAccepter = () => {
  useEffect(() => {
    console.log("load MusicAccepter")
  }, [])
  return (
    <MusicAccepterContainer>
      <span>음악 재생을 허용할까요?</span>
      <p>(설정에서 언제든 끄고 켤 수 있습니다.)</p>
      <div>
        <LegacyButton
          size="small"
          width="50%"
          isBold={false}
          isFilled={false}
          color={LegacyPalette.lineNeutral}
        >
          끄기
        </LegacyButton>
        <LegacyButton
          size="small"
          width="50%"
          isBold
          isFilled={false}
          color={LegacyPalette.primaryNormal}
        >
          켜기
        </LegacyButton>
      </div>
    </MusicAccepterContainer>
  );
}

export default MusicAccepter

const MusicAccepterContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 280px;
  top: 20px;
  right: 20px;
  background-color: ${LegacyPalette.backgroundNeutral};
  border-radius: 20px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);
  padding: 16px;
  color: ${LegacyPalette.labelNormal};
  span {
    ${LegacyTypography.Pretendard.Headline.Bold}
  }
  p {
    ${LegacyTypography.Pretendard.Caption1.Medium}
    color: ${LegacyPalette.labelNeutral};
  }
  > div {
    display: flex;
    width: 100%;
    gap: 8px;
    margin-top: 4px;
  }
`;