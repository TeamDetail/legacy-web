import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import EmptyStar from "@src/assets/emptyStar.svg?react";
import HalfStar from "@src/assets/halfStar.svg?react";
import FullStar from "@src/assets/fullStar.svg?react";

interface ScoreInputProps {
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}

const ScoreInput = ({ score, setScore }: ScoreInputProps) => {
  const [hoverScore, setHoverScore] = useState<number>(0);

  const handleStarClick = (starIndex: number, isLeftHalf: boolean) => {
    const newScore = starIndex * 2 + (isLeftHalf ? 1 : 2);
    setScore(newScore);
  };

  const handleStarHover = (starIndex: number, isLeftHalf: boolean) => {
    const newScore = starIndex * 2 + (isLeftHalf ? 1 : 2);
    setHoverScore(newScore);
  };

  const handleMouseLeave = () => {
    setHoverScore(0);
  };

  const getStarType = (starIndex: number): "empty" | "half" | "full" => {
    const currentScore = hoverScore || score;
    const starScore = starIndex * 2;

    if (currentScore >= starScore + 2) return "full";
    if (currentScore >= starScore + 1) return "half";
    return "empty";
  };

  const renderStar = (starIndex: number) => {
    const starType = getStarType(starIndex);

    return (
      <StarContainer key={starIndex}>
        {starType === "empty" && <EmptyStar />}
        {starType === "half" && <HalfStar />}
        {starType === "full" && <FullStar />}

        <LeftHalf
          onClick={() => handleStarClick(starIndex, true)}
          onMouseEnter={() => handleStarHover(starIndex, true)}
        />
        <RightHalf
          onClick={() => handleStarClick(starIndex, false)}
          onMouseEnter={() => handleStarHover(starIndex, false)}
        />
      </StarContainer>
    );
  };

  return (
    <Container onMouseLeave={handleMouseLeave}>
      {Array.from({ length: 5 }, (_, index) => renderStar(index))}
    </Container>
  );
};

export default ScoreInput;

const Container = styled.div`
  display: flex;
  gap: 4px;
`;

const StarContainer = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
`;

const LeftHalf = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  z-index: 1;
`;

const RightHalf = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  z-index: 1;
`;
