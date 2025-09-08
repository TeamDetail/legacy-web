import { cardpackDummy } from "@src/constants/dummy/cardPack.dummy";
import PurchaseStats from "../purchaseStats";
import styled from "styled-components";
import CardpackItem from "./cardPackItem";

const CardPack = () => {
  return (
    <>
      <CardPackContainer>
        {cardpackDummy.map((item) => (
          <CardpackItem
            key={item.cardpackId}
            cardpackCost={item.price}
            cardpackName={item.cardpackName}
            cardpackText={item.cardpackContent}
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
