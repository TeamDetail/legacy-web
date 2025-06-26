import { LegacyPalette, LegacySementic } from "@src/constants/color/color"
import { LegacyTypography } from "@src/constants/font/fontToken"
import { formatNumberSmall } from "@src/utils/format/formatNumberToSmallString";
import styled from "styled-components"

interface TrialScoreCalcProps {
  baseNumber: number;
  plusMultiple: number;
  doubleMultiple: number;
}

const TrialScoreCalc = ({
  baseNumber,
  plusMultiple,
  doubleMultiple
}: TrialScoreCalcProps) => {
  return (
    <TrialScoreCalcContainer>
      <TrialScoreBlock $color={LegacySementic.green.normal}>
        <div>{formatNumberSmall(100000000000)}</div>
      </TrialScoreBlock>
      X
      <TrialScoreBlock $color={LegacySementic.blue.normal}>
        <div>{formatNumberSmall(100000000000)}</div>
      </TrialScoreBlock>
      X
      <TrialScoreBlock $color={LegacySementic.blue.normal}>
        <div>{formatNumberSmall(100000000000)}</div>
      </TrialScoreBlock>
    </TrialScoreCalcContainer>
  )
}

const TrialScoreCalcContainer = styled.section`
  display: flex;
  align-items: center;
  ${LegacyTypography.BitBit.Heading1};
  color: ${LegacyPalette.labelNormal};
  background-color: ${LegacyPalette.backgroundNormal};
  border-radius: 16px;
  padding: 8px;
  gap: 8px;
  height: 64px;
`

const TrialScoreBlock = styled.div<{
  $color: string;
}>`
  display: flex;
  padding: 4px;
  border-radius: 16px;
  height: 100%;
  background-color: ${LegacyPalette.fillNormal};

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px ${({ $color }) => $color} solid;
    ${LegacyTypography.BitBit.Title3}
    color: ${({ $color }) => $color};
    border-radius: 12px;
    padding: 0 20px;
  }
`

export default TrialScoreCalc