import { Suspense, useState } from "react"
import CodexItem from "./CodexItem";

import { CARD_TRAITS } from "@src/constants/card/card.constants";
import styled from "styled-components";
import { RegionAttributeType } from "@src/types/card/card.type";
import { skeletonAnimtaion } from "@components/skeleton/animation";

const Codex = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  return(
    <CodexItemList>
      {CARD_TRAITS.region.map(item => (
        <Suspense fallback={<CodexFallback/>} key={item}>
          <CodexItem
            title={item as RegionAttributeType}
            selectedRegion={selectedRegion}
            onClick={() => setSelectedRegion(item)}
            resetSelectedState={() => setSelectedRegion("")}
          />
        </Suspense>
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

const CodexFallback = styled.div`
  width: 100%;
  height: 56px;
  border-radius: 16px;
  ${skeletonAnimtaion};
`

export default Codex