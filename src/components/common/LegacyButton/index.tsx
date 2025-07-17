import { CSSObject } from "styled-components";
import * as S from "./style";

interface ButtonTypeProps {
  size: "default" | "small" | "big";
  isBold: boolean;
  isFilled: boolean;
  color: string;
  handleClick?: () => void;
  children: React.ReactNode;
  isAtv?: boolean;
  width?: string;
  customStyle?: CSSObject;
}

const LegacyButton = ({
  size,
  isBold,
  isFilled,
  color,
  handleClick,
  children,
  isAtv,
  width = "173px",
  customStyle
}: ButtonTypeProps) => {
  return (
    <S.ButtonHover
      $width={width}
    >
      <S.ButtonWrapper
        onClick={handleClick}
        $isAtv={isAtv}
        $color={color}
        $width={width}
        $customStyle={customStyle}
      >
        <S.ButtonContainer
          $size={size}
          $color={color}
          $isBold={isBold}
          $isFilled={isFilled}
          $customStyle={customStyle}
        >
          {children}
        </S.ButtonContainer>
      </S.ButtonWrapper>
    </S.ButtonHover>
  );
};

export default LegacyButton;
