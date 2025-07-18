import { LegacyPalette } from "@src/constants/color/color"
import styled from "styled-components"
import CloseImg from "@src/assets/close.svg";
import { LegacyTypography } from "@src/constants/font/fontToken";

const QuizUndefined = ({close} : {close: () => void}) => {
  return (
    <Container>
  <div
        onClick={() => {
          close();
        }}
      >
        <CloseButton />
      </div>
      퀴즈가 아직 추가되지 않았어요...
    </Container>
  )
}

export default QuizUndefined;

const Container = styled.div`
  width: 400px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: ${LegacyPalette.lineAlternative};
  ${LegacyTypography.Pretendard.Headline.Medium}
  background-color: ${LegacyPalette.backgroundNormal};
  border-radius: 20px;
`

const CloseButton = styled.img.attrs({ src: CloseImg })`
  width: 28px;
  height: 28px;
  position: absolute;
  top: 28px;
  left: 28px;
`;