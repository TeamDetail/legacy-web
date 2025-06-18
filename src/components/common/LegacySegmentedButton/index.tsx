import { useState } from 'react';
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
  customBackbgroundColor,
  customBtnColor,
  customBtnTextColor,
  customBtnTextType = ["Pretendard", ["Body1", "Regular"]]
}: SegmentedBtnProps
) => {
  const [segmentedBtnData, setSegmentedBtnData] = useState<SegmentedBtnDataProps[]>(data);

  const handleClick = (text: string) => {
    setSegmentedBtnData(prev => prev.map(item => ({...item, isAtv: item.text === text })));
  }

  return (
    <S.SegmentedButtonContainer
      $width={width ? `${width}` : "140px"}
      $height={height ? `${height}` : ""}
      $customBackbgroundColor={customBackbgroundColor}
    >
      {segmentedBtnData.map((item, index) => (
        <S.SegmentedButtonItem
          key={index}
          $isAtv={item.isAtv}
          $customBtnColor={customBtnColor}
          $customBtnTextColor={customBtnTextColor}
          $customBtnTextType={customBtnTextType}
          onClick={() => {
            handleClick(item.text);
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