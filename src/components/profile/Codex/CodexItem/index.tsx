import { LegacyPalette } from "@src/constants/color/color";
import { useGetCardByRegion } from "@src/queries/card/card.queries";
import * as S from './style';
import LegacyButton from "@components/common/LegacyButton";
import Card from "@components/common/Card";
import { RegionAttributeType } from "@src/types/card/card.type";

interface CodexItemProps {
  title: RegionAttributeType;
  selectedRegion: string;
  onClick: () => void;
  resetSelectedState: () => void;
}

const CodexItem = ({title, selectedRegion, onClick, resetSelectedState}: CodexItemProps) => {
  const { data } = useGetCardByRegion(title);

  return selectedRegion === "" ? (
    <S.CodexItemHover onClick={onClick}>
      <S.CodexItemContainer>
        {title}
        <div>
          <p>{`${data!.data.cards?.filter(item => item.regionAttributeName === title).length} / ${data?.data.maxCount === 0 ? 30 : data?.data.maxCount}`}</p>
          <span>• {`${data!.data.cards?.filter(item => item.regionAttributeName === title).length / (data!.data.maxCount === 0 ? 30 : data!.data.maxCount) * 100}% 수집`}</span>
        </div>
      </S.CodexItemContainer>
    </S.CodexItemHover>
  ) : selectedRegion === title ? (
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
      {data!.data.cards.length > 0 ? (
      <S.CardArea>
        {data?.data.cards.map(item => (
          <Card
            key={item.cardId}
            cardType={item.cardType}
            isAtv={false}
            canInteract={false}
            handleCardChange={() => void(0)}
            size="M"
            nationAttributeName={item.nationAttributeName}
            lineAttributeName={item.lineAttributeName}
            regionAttributeName={item.regionAttributeName}
            cardName={item.cardName}
            cardImageUrl={item.cardImageUrl}
          />
        ))}
      </S.CardArea>
      ) : (
        <S.CardNotFound>
          소지한 {title} 지역의 카드가 없습니다!
        </S.CardNotFound>
      )}
    </S.RegionFrame>
  ) : (
    <></>
  )
}

export default CodexItem