import PurchaseStats from "../purchaseStats";
import styled from "styled-components";
import CardpackItem from "./cardPackItem";
import useShop from "@src/hooks/shop/useShop";

const CardPack = () => {
  const { cardpacks, purchaseCardpackById } = useShop();

  return (
    <>
      <CardPackContainer>
        {cardpacks &&
          cardpacks!.cardPack.map((item) => (
            <CardpackItem
              key={item.cardpackId}
              cardpackCost={item.price}
              cardpackName={item.cardpackName}
              cardpackText={item.cardpackContent}
              onPurchase={() => purchaseCardpackById(item.cardpackId)}
            />
          ))}
      </CardPackContainer>
      <PurchaseStats />
    </>
  );
};

export default CardPack;

export const CardPackContainer = styled.div`
  width: 648px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;
