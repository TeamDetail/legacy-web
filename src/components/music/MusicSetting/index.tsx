import Toggle from "@components/common/Toggle"
import { LegacyPalette } from "@src/constants/color/color"
import { LegacyTypography } from "@src/constants/font/fontToken"
import useMusic from "@src/hooks/music/useMusic"
import styled from "styled-components"

const MusicSetting = () => {
  const { handleVolume, volume, canMusic, setCanMusic } = useMusic(false)

  return (
    <MusicSettingContainer $state={canMusic.toString() as "true" | "false"}>
      <div>
        <p>BGM on / off</p>
        <Toggle
          state={canMusic}
          setState={() => setCanMusic(prev => !prev)}
        />
      </div>
      <input
        type="range"
        value={volume}
        min={0}
        step={0.01}
        max={1}
        onChange={(e) => handleVolume(e.target.valueAsNumber)}
        disabled={!canMusic}
      />
    </MusicSettingContainer>
  );
}

const MusicSettingContainer = styled.div<{
  $state: "true" | "false";
}>`
  display: flex;
  flex-direction: column;
  padding: 0 12px;
  gap: 12px;
  align-items: center;
  > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    > p {
      ${LegacyTypography.Pretendard.Heading2.Bold}
      color: ${LegacyPalette.labelNormal};
    }
  }
  > input {
    width: 100%;
    height: 20px;
    border-radius: 999px;
    background-color: ${LegacyPalette.fillNormal};
    appearance: none;
    outline: none;
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background: ${({ $state }) => $state === "true" ? LegacyPalette.primaryNormal : LegacyPalette.labelDisabled};
    width: 28px;
    height: 24px;
    border-radius: 4px;
  }
`;
export default MusicSetting