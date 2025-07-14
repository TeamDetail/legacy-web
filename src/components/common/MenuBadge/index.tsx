import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

interface MenuDataType {
  text: string;
  isAtv: boolean;
}

interface BadgeProps {
  badgeColor: string;
  menuData: MenuDataType[];
  setMenuData: React.Dispatch<React.SetStateAction<MenuDataType[]>>
}

export const MenuBadge = ({badgeColor, menuData, setMenuData}: BadgeProps) => {
  const handleMenu = (text: string) => {
    setMenuData((prev) =>
      prev.map((item) =>
        item.text === text ? {...item, isAtv: true} : {...item, isAtv: false}
      )
    );
  }

  return (
    <MenuContainer>
      {menuData?.map((item) => (
        <BadgeContainer $isAtv={item.isAtv} $badgeColor={badgeColor} key={item.text} onClick={() => handleMenu(item.text)}>
          <p>{item.text}</p>
        </BadgeContainer>
      ))}
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  display: flex;
  gap: 8px;
`

const BadgeContainer = styled.div<{ $isAtv: boolean, $badgeColor: string; }>`
  display: flex;
  padding: 4px 12px;
  border-radius: 99px;
  > p {
    ${LegacyTypography.Pretendard.Caption1.Bold}
    color: ${(props) => props.$isAtv ? LegacyPalette.labelNormal : LegacyPalette.labelAssistive};
  }
  background-color: ${({ $isAtv, $badgeColor }) => $isAtv ? $badgeColor : LegacyPalette.lineNeutral};
  cursor: pointer;
  user-select: none;
`
