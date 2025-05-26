import { Card } from "@src/types/card/card.type";
import { useState } from "react";

export const useCardTable = () => {
  const [cardTable, setCardTable] = useState<Card[]>([]);

  const clickCard = (cardId: number) => {
    setCardTable((prev) => prev.map((item) => ((item.cardId === cardId && item.isAtv) ? { ...item, isAtv: false } : { ...item, isAtv: item.cardId === cardId })))
  }

  return {
    cardTable,
    setCardTable,
    clickCard
  }
}
