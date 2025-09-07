import Sidebar from "@components/common/Sidebar";
import Shop from "@src/assets/sidebaricon/shop.svg?react";
import * as S from "./style";
import { MenuBadge } from "@components/common/MenuBadge";
import { LegacyPalette } from "@src/constants/color/color";
import { useState } from "react";

const ShopPage = () => {
  const [shopMenuData, setShopMenuData] = useState([
    { text: "카드 팩", isAtv: true, value: "cardPack" },
    { text: "크레딧 충전", isAtv: false, value: "chargeCredit" },
  ]);

  return (
    <S.ShopPageContainer>
      <Sidebar />
      <S.ShopPageMainContainer>
        <header>
          <Shop width={32} hanging={32} />
          상점
        </header>
        <MenuBadge
          badgeColor={LegacyPalette.primaryNormal}
          menuData={shopMenuData}
          setMenuData={setShopMenuData}
        />
        <S.ShopPageMain>
          
        </S.ShopPageMain>
      </S.ShopPageMainContainer>
    </S.ShopPageContainer>
  );
};

export default ShopPage;
