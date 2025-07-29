import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

const AchievementItem = () => {
  return (
    <AchievementItemWrapper>
      <img
        src="https://dcimg3.dcinside.co.kr/viewimage.php?id=3eb4de21e9d73ab360b8dab04785736f&no=24b0d769e1d32ca73de880fa11d028316cf6a5b45c3e7537d23044123855cea53f7a6aff19ee0a6451442d400423febc6fe0964beda98371576095a9fbdb2e33b592b67e62758f6260f6356c34619fb1e9adca547b654d7037118bef11"
        alt="achievementImg"
      />
      <AchievementItemContainer>
        <AchievementItemHeader>
          <AchievementItemTitle>
            오늘의 탐색 작업
            <span>#일일</span>
          </AchievementItemTitle>
          매일매일 하는 게 제일 중요합니다.
        </AchievementItemHeader>
        <AchievementItemInfoContainer>
          <AchievementItemInfo><span>목표</span></AchievementItemInfo>
        </AchievementItemInfoContainer>
      </AchievementItemContainer>
    </AchievementItemWrapper>
  );
};

export default AchievementItem;

const AchievementItemWrapper = styled.div`
  width: 100%;

  img {
    width: 64px;
    height: 64px;
    border-radius: 8px;
  }
`;

const AchievementItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const AchievementItemHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  ${LegacyTypography.Pretendard.Caption2.Medium};
  color: ${LegacyPalette.labelAlternative};
`;

const AchievementItemTitle = styled.div`
  display: flex;
  gap: 4px;
  ${LegacyTypography.Pretendard.Label.Bold};
  color: ${LegacyPalette.labelNormal};

  span {
    ${LegacyTypography.Pretendard.Caption1.Medium};
    color: ${LegacySementic.red.normal};
  }
`;

const AchievementItemInfoContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const AchievementItemInfo = styled.div`
  display: flex;
  gap: 4px;
  ${LegacyTypography.Pretendard.Caption1.ExtraBold};
  color: ${LegacyPalette.labelNormal};
  span {
    ${LegacyTypography.Pretendard.Caption1.Medium};
    color: ${LegacyPalette.labelAlternative};
  }
`;

const AchievementItemState = styled.div<{
  $TextColor: string;
  $IsSuccess: boolean;
}>`
  display: flex;
  gap: 4px;
  ${LegacyTypography.Pretendard.Caption1.ExtraBold};
  color: ${({ $TextColor, $IsSuccess }) =>
    $IsSuccess ? $TextColor : LegacyPalette.labelNormal};
  span {
    ${LegacyTypography.Pretendard.Caption1.Medium};
    color: ${LegacyPalette.labelAlternative};
  }
`;
