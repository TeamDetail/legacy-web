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
          cardpacks!.cardpack?.map((item) => (
            <CardpackItem
              key={item.cardpackId}
              cardpackCost={item.price}
              cardpackName={item.cardpackName}
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: fit-content(100%);
  grid-gap: 16px;
  flex-grow: 1;
  @media (max-width: 1253px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  overflow-y: auto;
  align-items: start;
`;
