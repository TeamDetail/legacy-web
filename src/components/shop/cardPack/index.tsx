// import PurchaseStats from "../purchaseStats";
import styled from "styled-components";
import CardpackItem from "./cardPackItem";
import useShop from "@src/hooks/shop/useShop";
import ShopItemSkeleton from "@components/skeleton/ShopItemSkeleton";

const CardPack = () => {
  const { cardpacks, purchaseCardpackById } = useShop();

  return (
    <>
      {cardpacks ? (
        <CardPackWrapper>
          <CardPackContainer>
            {cardpacks &&
              cardpacks!.cardpack?.map((item) => (
                <CardpackItem
                  key={item.cardpackId}
                  cardpackCost={item.price}
                  cardpackName={item.cardpackName}
                  onPurchase={() => purchaseCardpackById(item.cardpackId)}
                />
              ))}
          </CardPackContainer>
        </CardPackWrapper>
      ) : (
        <ShopItemSkeleton />
      )}
      {/* <PurchaseStats/> */}
    </>
  );
};

export default CardPack;

export const CardPackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  height: fit-content;
  overflow-y: auto;
  align-items: start;
`;

export const CardPackWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
`;
