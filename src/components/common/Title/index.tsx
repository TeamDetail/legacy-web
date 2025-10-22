import { LegacyPalette, LegacySementic } from "@src/constants/color/color"
import styled from "styled-components"

type TitleProps = {
  name: string;
  styleId: number;
  width?: string;
}
const Title = ({ name, styleId, width = "100%" }: TitleProps) => {
  const title_palette = [
    LegacyPalette.primaryNormal,
    LegacySementic.red.netural,
    LegacySementic.yellow.netural,
    LegacySementic.blue.netural,
    LegacySementic.green.netural
  ]

  return (
    <TitleContainer $color={title_palette[styleId-1]} $width={width}>
      <div>
        {name}
      </div>
    </TitleContainer>
  )
}

export default Title

const TitleContainer = styled.div<{
  $color: string;
  $width: string;
}>`
  display: flex;
  flex-wrap: wrap;
  filter: drop-shadow(0px 2px 4px #0004);
  width: ${({ $width }) => $width};
  div {
    width: 100%;
    height: 20px;
    background-color: ${({$color}) => $color};

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Pretendard-Bold";
    font-size: 12px;
    line-height: 120%;
    letter-spacing: 0.36px;
    color: ${LegacyPalette.labelNormal};

    &:first-child:last-child {
      clip-path: polygon(
        0.75em 0,
        calc(100% - 0.75em) 0,
        100% 50%,
        calc(100% - 0.75em) 100%,
        0.75em 100%,
        0 50%
      );
    }
    flex-grow: 1;
    flex-shrink: 0;
    text-align: center;
  }
`