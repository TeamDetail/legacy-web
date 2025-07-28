import Card from "@components/common/Card";
import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import useRuin from "@src/hooks/map/useRuin";
import styled from "styled-components";
const Detail = () => {
  const { ruinDetailDummy } = useRuin();
  const firstRuinDetail = ruinDetailDummy[0];
  const card = firstRuinDetail.cards[0];

  return (
    <DetailLayout>
      <Card
        cardType={card.cardType}
        cardId={card.cardId}
        cardImageUrl={card.cardImageUrl}
        cardName={card.cardName}
        size="L"
        isAtv={false}
        canInteract={false}
        handleCardChange={() => {}}
      />
      <ExplainContainer>
        <span>설명</span>
        {firstRuinDetail.detail}
      </ExplainContainer>
      <ExplorerContainer>
        <DetailItem>
          <span>탐험자 수</span>
          {firstRuinDetail.explorerCount}명
        </DetailItem>
        <DetailItem>
          <span>획득 비율</span>
          <RatioText>
            <span>전체 중 </span>
            {firstRuinDetail.explorerRatio}%
          </RatioText>
        </DetailItem>
      </ExplorerContainer>
    </DetailLayout>
  );
};

export default Detail;

const DetailLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden; /* 중요: 설명 텍스트 넘치면 자르기 위함 */
`;

const ExplainContainer = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 5; /* 줄 수 제한 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  flex-grow: 1; /* 여유 공간 최대한 차지 */
  margin-top: 8px;
  margin-bottom: 8px;

  span {
    display: block;
    margin-bottom: 4px;
    ${LegacyTypography.Pretendard.Caption2.Regular};
    color: ${LegacyPalette.labelAlternative};
  }

  ${LegacyTypography.Pretendard.Body2.Medium};
  color: ${LegacyPalette.labelNormal};
`;

const ExplorerContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-shrink: 0;

  span {
    ${LegacyTypography.Pretendard.Caption2.Regular};
    color: ${LegacyPalette.labelAlternative};
  }

  ${LegacyTypography.Pretendard.Body2.Medium};
  color: ${LegacyPalette.labelNormal};
`;

const RatioText = styled.div`
  span {
    ${LegacyTypography.Pretendard.Body2.Medium};
    color: ${LegacyPalette.labelNeutral};
  }

  ${LegacyTypography.Pretendard.Body2.Bold};
  color: ${LegacyPalette.labelNormal};
`;
