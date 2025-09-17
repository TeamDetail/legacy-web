import Sidebar from "@components/common/Sidebar";
import Shop from "@src/assets/sidebarIcon/shop.svg?react";
import * as S from "./style";
import CardPack from "@components/shop/cardPack";

const ShopPage = () => {
  return (
    <S.ShopPageContainer>
      <Sidebar />
      <S.ShopPageMainContainer>
        <header>
          <Shop width={32} hanging={32} />
          상점
        </header>
        <S.ShopPageMain>
          <CardPack />
        </S.ShopPageMain>
      </S.ShopPageMainContainer>
    </S.ShopPageContainer>
  );
};

export default ShopPage;
