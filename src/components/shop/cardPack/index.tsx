import PurchaseStats from "../purchaseStats";
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

      <PurchaseStats />
    </>
  );
};

export default CardPack;

export const CardPackContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: fit-content;
  grid-gap: 16px;
  @media (max-width: 1253px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  overflow-y: auto;
  align-items: start;
`;

export const CardPackWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
`;
