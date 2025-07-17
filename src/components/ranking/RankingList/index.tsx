import * as S from "./style";
import { useGetTrialRanking } from "@src/queries/ranking/ranking.query";

interface RankingListType {
  type: "trial" | "explore" | "level"
  scope: "all" | "friend"
}

const RankingList = ({type, scope}: RankingListType) => {
  const { data: rankData } = useGetTrialRanking(scope, {enabled: type === "explore"})

  return (
    <S.RankingListContainer>
      <S.RankingHeader>
        <S.RankIndicator $Rank={0}/>
        <S.RankingUserInfo><span>유저</span></S.RankingUserInfo>
        <S.RankingScore><span>탐험한 블록</span></S.RankingScore>
      </S.RankingHeader>
      {rankData?.data.map((item, idx) => (
        <S.RankingItemHover key={item.nickname + idx}>
          <S.RankingItemContainer>
            <S.RankIndicator $Rank={idx+1}>
              #{idx+1}
            </S.RankIndicator>
            <S.RankingUserInfo>
              <img src={item.imageUrl} alt="userImg" />
              <section>
                <p>{item.nickname}</p>
                {item.title.name}
              </section>
            </S.RankingUserInfo>
            <S.RankingScore>
              <p>{item.allBlocks}블록</p>
            </S.RankingScore>
          </S.RankingItemContainer>
        </S.RankingItemHover>
      ))}
    </S.RankingListContainer>
  )
}

export default RankingList