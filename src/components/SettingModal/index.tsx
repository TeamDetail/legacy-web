import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";
import Setting from '@src/assets/sidebarIcon/setting.svg?react';
import Close from "@src/assets/close.svg?react";
import MusicSetting from "@components/music/MusicSetting";

type SettingModalProps = {
  close: () => void
}

const SettingModal = ({close}: SettingModalProps) => {
  return (
    <SettingModalContainer>
      <header>
        <div>
          <Setting width={32}/>
          설정
        </div>
        <Close style={{cursor:"pointer"}} onClick={close}/>
      </header>
      <MusicSetting/>
    </SettingModalContainer>
  );
};
export default SettingModal;


const SettingModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  width: 400px;
  height: 400px;
  padding: 20px;
  gap: 16px;
  background-color: ${LegacyPalette.backgroundNeutral};
  > header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      ${LegacyTypography.BitBit.Title3};
      color: ${LegacyPalette.labelNormal};
      display: flex;
      gap: 4px;
      align-items: center;
    }
  }
`;
