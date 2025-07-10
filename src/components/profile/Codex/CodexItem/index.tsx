import { LegacyPalette } from "@src/constants/color/color";
import { useGetCardByRegion } from "@src/queries/card/card.queries";
import * as S from './style';
import LegacyButton from "@components/common/LegacyButton";

interface CodexItemProps {
  title: string;
  isSelected: boolean;
  onClick: () => void;
  resetSelectedState: () => void;
}

const CodexItem = ({title, isSelected, onClick, resetSelectedState}: CodexItemProps) => {
  const { data } = useGetCardByRegion(title);
  return !isSelected ? (
    <S.CodexItemHover onClick={onClick}>
      <S.CodexItemContainer>
        {title}
        <div>
          <p>{`${data!.data.filter(item => item.regionAttributeName === title).length} / 50`}</p>
          •
          <span>{`${data!.data.filter(item => item.regionAttributeName === title).length * 2}% 수집`}</span>
        </div>
      </S.CodexItemContainer>
    </S.CodexItemHover>
  ) : (
    <S.RegionFrame>
      <header>
        <p>{title}</p>
        <LegacyButton
          width="128px"
          size="small" 
          isFilled 
          isBold={false} 
          color={LegacyPalette.fillNormal} 
          customStyle={{color: `${LegacyPalette.labelNormal}`}}
          handleClick={resetSelectedState}
        >
          목록으로
        </LegacyButton>
      </header>
      <S.DummyCardArea />
    </S.RegionFrame>
  )
}

export default CodexItem