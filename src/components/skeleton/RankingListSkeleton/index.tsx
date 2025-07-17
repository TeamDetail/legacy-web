import { RankIndicator, RankingHeader, RankingScore, RankingUserInfo } from "@components/ranking/RankingList/style"
import { skeletonAnimtaion } from "@components/skeleton/animation"
import { LegacyPalette } from "@src/constants/color/color"
import styled from "styled-components"

const RankingListSkeleton = () => {
  return (
    <RankingListSkeletonContainer>
      <RankingHeader>
        <RankIndicator $Rank={0}/>
        <RankingUserInfo><span>유저</span></RankingUserInfo>
        <RankingScore><span>불러오는 중..</span></RankingScore>
      </RankingHeader>
      {Array.from({length: 15}).map((_, idx) => (
        <div key={idx}/>
      ))}
    </RankingListSkeletonContainer>
  )
}

const RankingListSkeletonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 8px;
  > div {
    width: 100%;
    height: 72px;
    flex-shrink: 0;
    border-radius: 12px;
    background-color: ${LegacyPalette.backgroundNormal};
    ${skeletonAnimtaion}
  }
`

export default RankingListSkeleton