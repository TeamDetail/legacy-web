import { LegacyPalette } from "@src/constants/color/color";
import styled from "styled-components"

type ToggleProps = {
  state: boolean;
  setState: () => void;
  backgroundColor?: string;
  togglerColor?: string;
}
const Toggle = ({
  state,
  setState,
  backgroundColor,
  togglerColor
}: ToggleProps) => {
  return (
    <ToggleContainer
      $backgroundColor={backgroundColor}
      $togglerColor={togglerColor}
      $state={state.toString() as "true" | "false"}
      onClick={setState}
    >
      <div />
    </ToggleContainer>
  )
}

export default Toggle

const ToggleContainer = styled.div<{
  $backgroundColor?: string;
  $togglerColor?: string;
  $state?: "true" | "false";
}>`
  position: relative;
  display: flex;
  background-color: ${LegacyPalette.fillNormal};
  background-color: ${({ $state, $togglerColor }) =>
    $state === "true"
      ? $togglerColor || LegacyPalette.primaryNormal
      : LegacyPalette.fillNormal};
  border-radius: 999px;
  width: 64px;
  height: 36px;
  padding: 4px;

  > div {
    position: absolute;
    right: ${({ $state }) => ($state === "true" ? "4px" : "32px")};
    transition: all 0.1s linear;
    border-radius: 999px;
    height: 28px;
    aspect-ratio: 1 / 1;
    background-color: ${({ $state, $togglerColor }) =>
      $state === "true"
        ? $togglerColor || LegacyPalette.staticWhite
        : LegacyPalette.fillNeutral};
  }
`;