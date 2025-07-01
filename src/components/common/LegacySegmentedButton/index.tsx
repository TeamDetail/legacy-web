import * as S from './style'
import { typographyType } from '@src/constants/font/fontToken';

export interface SegmentedBtnDataProps {
  text: string;
  isAtv: boolean;
}

export interface SegmentedBtnProps {
  data: SegmentedBtnDataProps[];
  width?: string;
  height?: string;
  onClick: (text?: string) => void;
  changePage: (text: string) => void;
  customBackbgroundColor?: string;
  customBtnColor?: string;
  customBtnTextColor?: string;
  customBtnTextType?: ["BitBit" | "Pretendard", typographyType];
}

const LegacySegmentedButton = ({
  data,
  width,
  height,
  onClick,
  changePage,
  customBackbgroundColor,
  customBtnColor,
  customBtnTextColor,
  customBtnTextType = ["Pretendard", ["Body1", "Regular"]]
}: SegmentedBtnProps
) => {
  return (
    <S.SegmentedButtonContainer
      $width={width ? `${width}` : "140px"}
      $height={height ? `${height}` : ""}
      $customBackbgroundColor={customBackbgroundColor}
    >
      {data.map((item, index) => (
        <S.SegmentedButtonItem
          key={index}
          $isAtv={item.isAtv}
          $customBtnColor={customBtnColor}
          $customBtnTextColor={customBtnTextColor}
          $customBtnTextType={customBtnTextType}
          onClick={() => {
            changePage(item.text)
            onClick(item.text);
          }}
        >
          {item.text}
        </S.SegmentedButtonItem>
      ))}
    </S.SegmentedButtonContainer>
  )
}

export default LegacySegmentedButton