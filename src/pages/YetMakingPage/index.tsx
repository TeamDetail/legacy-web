import LegacyButton from "@components/common/LegacyButton";
import * as S from "./style";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { useNavigate } from "react-router-dom";
import Sidebar from "@components/common/Sidebar";

const YetMakingPage = ({ type }: { type: string }) => {
  const nav = useNavigate();
  return (
    <S.YetMakingPageContainer>
      <Sidebar/>
      <S.YetPageMain>
        <h1>
          <span>{type}</span>은/는 준비중인 기능입니다!
        </h1>
        <section>
          <p>열심히 개발중이니, 다음 업데이트에서 뵙겠습니다.</p>
          <p>이용해주셔서 감사합니다!</p>
        </section>
        <LegacyButton
          size="default"
          isBold
          isFilled={false}
          color={LegacySementic.purple.normal}
          handleClick={() => nav("/")}
        >
          메인으로
        </LegacyButton>
        <LegacyButton
          size="default"
          isBold
          isFilled={false}
          color={LegacyPalette.lineNormal}
          handleClick={() => nav(-1)}
        >
          이전 페이지로
        </LegacyButton>
      </S.YetPageMain>
    </S.YetMakingPageContainer>
  );
};

export default YetMakingPage;
