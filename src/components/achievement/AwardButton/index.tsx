import LegacyButton from "@components/common/LegacyButton";
import achievementApi from "@src/api/achievement/achievement.api";
import { LegacySementic } from "@src/constants/color/color";
import { useMutation } from "react-query";
import styled from "styled-components";

const AwardButton = ({ position }: { position: "side" | "top" }) => {
  const mutation = useMutation({
    mutationFn: () => achievementApi.getAchievementAward(),
  });

  return (
    <AwardButtonContainer $position={position}>
      <LegacyButton
        size="default"
        width="100%"
        isBold
        isFilled={false}
        color={LegacySementic.yellow.netural}
        handleClick={() => mutation.mutate()}
        customStyle={{
          color: LegacySementic.yellow.netural,
        }}
      >
        보상 일괄 수령
      </LegacyButton>
    </AwardButtonContainer>
  );
};

const AwardButtonContainer = styled.div<{ $position: "side" | "top" }>`
  @media (max-width: 960px) {
    display: ${({ $position }) => $position === "side" ? "none" : "flex"};
    div {
      height: 100%;
    }
  }
  @media (min-width: 960px) {
    grid-area: awardbutton;
    display: ${({ $position }) => $position === "top" ? "none" : "flex"};
  }
`
export default AwardButton;
