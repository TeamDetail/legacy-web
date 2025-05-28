import { LegacySementic } from "@src/constants/color/color";
import * as S from "./style";

interface ButtonTypeProps {
  size: "default" | "small" | "big";
  isBold: boolean;
  isFilled: boolean;
  color: keyof typeof LegacySementic;
  handleClick: () => void;
  children: React.ReactNode;
  isAtv?: boolean;
}

const Button = ({
  size,
  isBold,
  isFilled,
  color,
  handleClick,
  children,
  isAtv,
}: ButtonTypeProps) => {
  return (
    <S.ButtonWrapper onClick={handleClick} $isAtv={isAtv} $color={color}>
      <S.ButtonContainer
        $size={size}
        $color={color}
        $isBold={isBold}
        $isFilled={isFilled}
      >
        {children}
      </S.ButtonContainer>
    </S.ButtonWrapper>
  );
};

export default Button;
