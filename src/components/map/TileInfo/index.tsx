import LegacyButton from "@components/common/LegacyButton";
import * as S from "./style";
import { LegacySementic } from "@src/constants/color/color";
import useRuin from "@src/hooks/map/useRuin";

const TileInfo = ({ handleButtonClick }: { handleButtonClick: () => void }) => {
  const { ruinDetail } = useRuin();

  return (
    <S.InfoContainer>
      <S.HeadlineBold>블록 탐험</S.HeadlineBold>
      <S.Column8>
        <S.LabelMedieum>탐험 필요 크레딧</S.LabelMedieum>
        <S.Row4>
          <S.CreditText>{ruinDetail?.name}</S.CreditText>
          <S.CreditAddText></S.CreditAddText>
        </S.Row4>
      </S.Column8>
      <LegacyButton
        size="default"
        isBold={false}
        isFilled={false}
        color={LegacySementic.blue.netural}
        width="100%"
        children={
          <S.ExploreButtonChildren>블록 탐험하기</S.ExploreButtonChildren>
        }
        handleClick={() => {
          handleButtonClick();
        }}
      />
    </S.InfoContainer>
  );
};

export default TileInfo;
