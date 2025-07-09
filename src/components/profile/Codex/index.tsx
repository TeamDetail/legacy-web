import { useState } from "react"
import CodexItem from "./CodexItem";
import * as S from './style';

const Codex = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("");

  return (
    <S.CodexItemList>
      <CodexItem title="경기" currentCount={3} maxCount={50} onClick={() => void(0)}/>
      <CodexItem title="강원" currentCount={10} maxCount={50} onClick={() => void(0)}/>
      <CodexItem title="경북" currentCount={20} maxCount={50} onClick={() => void(0)}/>
    </S.CodexItemList>
  )
}

export default Codex