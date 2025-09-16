import { useGetExploreRanking, useGetLevelRanking } from "@src/queries/ranking/ranking.queries";
import * as S from "./style";

interface RankingListType {
  type: "trial" | "explore" | "level";
  scope: "all" | "friend";
}

const RankingList = ({ type, scope }: RankingListType) => {
  const { data: exploreRankData } = useGetExploreRanking(scope);
  const { data: levelRankData } = useGetLevelRanking(scope);

  return (
    <S.RankingListContainer>
      <S.RankingHeader>
        <S.RankIndicator $Rank={0} />
        <S.RankingUserInfo>
          <span>유저</span>
        </S.RankingUserInfo>
        {type === "explore" ? (
          <S.RankingScore $size="big">
            <span>탐험한 블록</span>
          </S.RankingScore>
        ) : (
          <S.RankingScoreContainer>
            <S.RankingScore $size="small">
              <span>레벨</span>
            </S.RankingScore>
            <S.RankingScore $size="big">
              <span>경험치</span>
            </S.RankingScore>
          </S.RankingScoreContainer>
        )}
      </S.RankingHeader>
      {(type === "explore" ? exploreRankData : levelRankData)?.map(
        (item, idx) => (
          <S.RankingItemHover key={item.nickname + idx}>
            <S.RankingItemContainer>
              <S.RankIndicator $Rank={idx + 1}>#{idx + 1}</S.RankIndicator>
              <S.RankingUserInfo>
                <img src={item.imageUrl} alt="userImg" />
                <section>
                  <p>{item.nickname}</p>
                  {item.title.name}
                </section>
              </S.RankingUserInfo>
              {type === "explore" && "allBlocks" in item ? (
                <S.RankingScore $size="big">
                  <div>
                    <p>{item.allBlocks}</p>
                    <span>블록</span>
                  </div>
                </S.RankingScore>
              ) : (
                "exp" in item && (
                  <S.RankingScoreContainer>
                    <S.RankingScore $size="big">
                      <div>
                        <p>{item.level}</p>
                        <span>Lv</span>
                      </div>
                    </S.RankingScore>
                    <S.RankingScore $size="big">
                      <div>
                        <p>{item.exp}</p>
                        <span>exp</span>
                      </div>
                    </S.RankingScore>
                  </S.RankingScoreContainer>
                )
              )}
            </S.RankingItemContainer>
          </S.RankingItemHover>
        )
      )}
    </S.RankingListContainer>
  );
};

export default RankingList;
