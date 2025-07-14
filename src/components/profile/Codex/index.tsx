import { useState } from "react"
import CodexItem from "./CodexItem";

import { CARD_TRAITS } from "@src/constants/card/card.constants";
import styled from "styled-components";

const Codex = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  return(
    <CodexItemList>
      {CARD_TRAITS.region.map(item => (
        <CodexItem
          key={item}
          title={item}
          selectedRegion={selectedRegion}
          onClick={() => setSelectedRegion(item)}
          resetSelectedState={() => setSelectedRegion("")}
        />
      ))}
    </CodexItemList>
  );
}

const CodexItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  max-height: 100%;
`
export default Codex