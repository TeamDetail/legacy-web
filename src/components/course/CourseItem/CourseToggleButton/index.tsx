import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import HeartIcon from "@src/assets/heart.svg?react";
import ClearIcon from "@src/assets/clear.svg?react";
import { LegacyTypography } from "@src/constants/font/fontToken";
import customAxios from "@src/libs/axios/customAxios";

interface ToggleButtonType {
  buttonType: "heart" | "clear";
  value: number;
  isSelected: boolean;
  setIsSelected?: Dispatch<SetStateAction<boolean>>;
  courseId?: number;
  disabled: boolean;
}

const CourseToggleButton = ({
  buttonType,
  value,
  isSelected,
  setIsSelected,
  courseId,
  disabled,
}: ToggleButtonType) => {
  const [count, setCount] = useState<number>(value);

  const handleToggleHeartById = (id: number) => {
    customAxios.patch("/course", { courseId: id });
  };

  const handleButtonClick = () => {
    if (buttonType === "heart") {
      setIsSelected!((prev) => !prev);
      handleToggleHeartById(courseId!);
      if (!isSelected) {
        setCount((prev) => prev + 1);
      } else {
        setCount((prev) => prev - 1);
      }
    }
  };

  return (
    <ButtonWrapper
      $isSelected={isSelected}
      $buttonType={buttonType}
      onClick={() => {
        if (disabled) {
          handleButtonClick();
        }
      }}
    >
      {buttonType === "heart" ? (
        <HeartIcon
          fill={
            isSelected
              ? LegacySementic.red.netural
              : LegacyPalette.labelAssistive
          }
        />
      ) : (
        <ClearIcon
          fill={
            isSelected
              ? LegacySementic.blue.netural
              : LegacyPalette.labelAssistive
          }
        />
      )}

      {count > 999 ? "999+" : count}
    </ButtonWrapper>
  );
};

export default CourseToggleButton;

const ButtonWrapper = styled.div<{
  $isSelected: boolean;
  $buttonType: "heart" | "clear";
}>`
  user-select: none;
  display: flex;
  gap: 4px;
  padding: 4px 8px;
  border: 1px solid
    ${({ $isSelected, $buttonType }) =>
      $isSelected
        ? $buttonType === "heart"
          ? LegacySementic.red.netural
          : LegacySementic.blue.netural
        : LegacyPalette.lineNeutral};
  cursor: ${({ $buttonType }) => $buttonType === "heart" && "pointer"};
  border-radius: 4px;
  background-color: ${LegacyPalette.fillNormal};

  ${LegacyTypography.Pretendard.Caption1.Medium};
  color: ${({ $isSelected, $buttonType }) =>
    $isSelected
      ? $buttonType === "heart"
        ? LegacySementic.red.netural
        : LegacySementic.blue.netural
      : LegacyPalette.labelAssistive};
`;
