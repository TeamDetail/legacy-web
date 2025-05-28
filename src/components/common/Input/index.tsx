import { LegacySementic } from "@src/constants/color/color";
import * as S from "./style";

interface InputTypeProps {
  size: "default" | "small" | "big";
  isBold: boolean;
  isFilled: boolean;
  color: keyof typeof LegacySementic;
}

const Input = ({ size, isBold, isFilled, color }: InputTypeProps) => {
  return (
    <S.InputWrapper $color={color}>
      <S.InputContainer
        $size={size}
        $color={color}
        $isBold={isBold}
        $isFilled={isFilled}
      ></S.InputContainer>
    </S.InputWrapper>
  );
};

export default Input;
