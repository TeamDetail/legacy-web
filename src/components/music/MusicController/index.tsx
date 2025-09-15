import { useEffect, useState } from "react"
import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";
import LegacyButton from "@components/common/LegacyButton";
import useMusic from "@src/hooks/music/useMusic";

const MusicController = () => {
  const { turnOnAudio, turnOffAudio } = useMusic();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    console.log("load MusicAccepter")
  }, [])
  
  return isOpen ? (
    <MusicControllerContainer>
      <span>음악 재생을 허용할까요?</span>
      <p>(설정에서 언제든 끄고 켤 수 있습니다.)</p>
      <div>
        <LegacyButton
          size="small"
          width="50%"
          isBold={false}
          isFilled={false}
          color={LegacyPalette.lineNeutral}
          handleClick={() => {
            turnOffAudio();
            setIsOpen(false);
          }}
        >
          끄기
        </LegacyButton>
        <LegacyButton
          size="small"
          width="50%"
          isBold
          isFilled={false}
          color={LegacyPalette.primaryNormal}
          handleClick={() => {
            turnOnAudio();
            setIsOpen(false);
          }}
        >
          켜기
        </LegacyButton>
      </div>
    </MusicControllerContainer>
  ) : (
    <></>
  )
}

export default MusicController

const MusicControllerContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 280px;
  top: 20px;
  right: 20px;
  background-color: ${LegacyPalette.backgroundNeutral};
  border-radius: 20px;
  box-shadow: 0 0 8px 0 rgba(248, 248, 248, 0.15);
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
  z-index: 99;
`;