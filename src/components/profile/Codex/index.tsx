import { useState } from "react"
import CodexItem from "./CodexItem";
import * as S from './style';
import { CARD_TRAITS } from "@src/constants/card/card.constants";

const Codex = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  return(
    <S.CodexItemList>
      {CARD_TRAITS.region.map(item => (
        <CodexItem
          title={item}
          isSelected={item === selectedRegion}
          onClick={() => setSelectedRegion(item)}
          resetSelectedState={() => setSelectedRegion("")}
        />
      ))}
    </S.CodexItemList>
  );
}

export default Codex