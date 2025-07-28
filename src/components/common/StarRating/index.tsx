import styled from "styled-components";
import FullStarImg from "@src/assets/fullStar.svg";
import HalfStarImg from "@src/assets/halfStar.svg";
import EmptyStarImg from "@src/assets/emptyStar.svg";

const StarRating = ({ score }: { score: number }) => {
  const fullStarCount = Math.floor(score / 2);
  const halfStarCount = score % 2;
  const emptyStarCount = 5 - (fullStarCount + halfStarCount);

  return (
    <ScoreContainer>
      {Array.from({ length: fullStarCount }).map((_, index) => (
        <FullStar key={index} />
      ))}
      {Array.from({ length: halfStarCount }).map((_, index) => (
        <HalfStar key={index} />
      ))}
      {Array.from({ length: emptyStarCount }).map((_, index) => (
        <EmptyStar key={index} />
      ))}
    </ScoreContainer>
  );
};

export default StarRating;

const FullStar = styled.img.attrs({ src: FullStarImg })`
  width: 16px;
  height: 16px;
`;

const HalfStar = styled.img.attrs({ src: HalfStarImg })`
  width: 16px;
  height: 16px;
`;

const EmptyStar = styled.img.attrs({ src: EmptyStarImg })`
  width: 16px;
  height: 16px;
`;

export const ScoreContainer = styled.div`
  display: flex;
`;
