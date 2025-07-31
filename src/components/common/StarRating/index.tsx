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
        <Star src={FullStarImg} key={index} />
      ))}
      {Array.from({ length: halfStarCount }).map((_, index) => (
        <Star src={HalfStarImg} key={index} />
      ))}
      {Array.from({ length: emptyStarCount }).map((_, index) => (
        <Star src={EmptyStarImg} key={index} />
      ))}
    </ScoreContainer>
  );
};

export default StarRating;

const Star = styled.img`
  width: 16px;
  height: 16px;
`;
const ScoreContainer = styled.div`
  display: flex;
`;
