import { LegacyPalette } from "@src/constants/color/color"
import { TrialToken } from "@src/types/trial/trial.type"
import styled from "styled-components"

interface TrialInventoryProps {
  tokens: TrialToken[];
}
const TrialInventory = ({tokens}: TrialInventoryProps) => {
  return (
    <TrialInventoryConatainer>
      {tokens.map(item => item.tokenName)}
    </TrialInventoryConatainer>
  )
}

const TrialInventoryConatainer = styled.section`
  display: flex;
  gap: 12px;
  padding: 16px;
  width: 480px;
  height: 96px;
  border-radius: 16px;
  background-color: ${LegacyPalette.backgroundNormal};
`

export default TrialInventory