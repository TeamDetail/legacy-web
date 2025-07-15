import LegacyButton from '@components/common/LegacyButton';
import { LegacyPalette, LegacySementic } from '@src/constants/color/color';
import { LegacyTypography } from '@src/constants/font/fontToken';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundPage = () => {
  const nav = useNavigate();
  return (
    <NotfoundPageContainer>
      <NotfoundPageMain>
        <section>
          <p>404 NOT FOUND</p>
          <span>방문한 페이지를 찾을 수 없습니다.</span>
        </section>
        <section>
          <LegacyButton
            size='default'
            isBold
            isFilled={false}
            color={LegacySementic.purple.normal}
            handleClick={() => nav('/')}
          >
            메인으로 
          </LegacyButton>
          <LegacyButton
            size='default'
            isBold
            isFilled={false}
            color={LegacyPalette.lineNormal}
            handleClick={() => nav(-1)}
          >
            이전 페이지로
          </LegacyButton>
        </section>
      </NotfoundPageMain>
    </NotfoundPageContainer>
  )
}

const NotfoundPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 28px;
  background: linear-gradient(180deg, #111212 63.28%, #7D383A 100%);
`

const NotfoundPageMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  width: 100%;
  height: 100%;
  background-color: ${LegacyPalette.backgroundNormal};
  color: ${LegacyPalette.labelNormal};
  gap: 12px;

  > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
    > p {
      color: ${LegacyPalette.statusNegative};
      font-family: "DNFBitBitv2";
      font-size: 48px;
      line-height: 130%;
      letter-spacing: 1.08px;
    }
    
    > span {
      ${LegacyTypography.Pretendard.Title3.Medium}
    }

    @media (max-width: 500px) {
      p { font-size: 34px; }
      span { font-size: 20px; }
    }

    @media (max-width: 420px) {
      p { font-size: 28px; }
      span { font-size: 16px; }
    }
  }
`

export default NotFoundPage