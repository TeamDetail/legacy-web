import styled from "styled-components";
import { LegacyTypography } from "@src/constants/font/fontToken";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color";

const PurchaseStats = () => {
  return (
    <PurchaseStatsContainer>
      <p>
        오늘 총 <span>3</span>개 구매!
      </p>
      <div>
        <div>
          현재 가격 배율<span>1.75배</span>
        </div>
        카드팩은 하루 동안, 구매 시마다 <br />
        가격이 상승합니다.
      </div>
      <button>초기화까지 21:30:44</button>
    </PurchaseStatsContainer>
  );
};

export default PurchaseStats;

export const PurchaseStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  gap: 12px;
  padding: 16px;
  width: 300px;
  background: rgba(35, 36, 36, 0.6);
  border-radius: 12px;
  p {
    ${LegacyTypography.Pretendard.Heading1.Bold};
    color: ${LegacyPalette.labelNormal};

    > span {
      ${LegacyTypography.Pretendard.Heading1.Bold};
      color: ${LegacySementic.yellow.netural};
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
    ${LegacyTypography.Pretendard.Caption2.Medium};
    color: ${LegacyPalette.labelAlternative};

    div {
      display: flex;
      flex-direction: column;

      ${LegacyTypography.Pretendard.Caption2.Bold};
      color: ${LegacyPalette.labelAlternative};

      span {
        ${LegacyTypography.Pretendard.Heading1.Bold};
        color: ${LegacySementic.yellow.netural};
      }
    }
  }

  button {
    border: none;
    border-radius: 8px;
    width: 100%;
    padding: 8px 0;
    background-color: ${LegacyPalette.fillNeutral};
    ${LegacyTypography.Pretendard.Caption2.Bold};
    color: ${LegacyPalette.labelNormal};
  }
`;
