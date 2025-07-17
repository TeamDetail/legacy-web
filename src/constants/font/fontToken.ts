import { css, RuleSet } from "styled-components";

export type typographyType = [
  (
    | 'Title1'
    | 'Title2'
    | 'Title3'
    | 'Heading1'
    | 'Heading2'
    | 'Headline'
    | 'Body1'
    | 'Body2'
    | 'Label'
    | 'Caption1'
    | 'Caption2'
  ),
  'Bold' | 'Medium' | 'Regular',
];


export type TextSize = {
  Bold: RuleSet;
  Medium: RuleSet;
  Regular: RuleSet;
};

export type TypographyStyles = {
  Pretendard: {
    Title1: TextSize;
    Title2: TextSize;
    Title3: TextSize;
    Heading1: TextSize;
    Heading2: TextSize;
    Headline: TextSize;
    Body1: TextSize;
    Body2: TextSize;
    Label: TextSize;
    Caption1: TextSize;
    Caption2: TextSize;
  },
  BitBit: {
    Title1: RuleSet;
    Title2: RuleSet;
    Title3: RuleSet;
    Heading1: RuleSet;
    Heading2: RuleSet;
    Headline: RuleSet;
    Body1: RuleSet;
    Body2: RuleSet;
    Label: RuleSet;
    Caption1: RuleSet;
    Caption2: RuleSet;
  }
};

export const LegacyTypography: TypographyStyles = Object.freeze({
  Pretendard: {
    Title1: {
      Bold: css`
        font-family: "Pretendard-ExtraBold";
        font-size: 36px;
        line-height: 130%;
        letter-spacing: -1.08px;
      `,
      Medium: css`
        font-family: "Pretendard-SemiBold";
        font-size: 36px;
        line-height: 130%;
        letter-spacing: -1.08px;
      `,
      Regular: css`
        font-family: "Pretendard-Regular";
        font-size: 36px;
        line-height: 130%;
        letter-spacing: -1.08px;
      `,
    },
  
    Title2: {
      Bold: css`
        font-family: "Pretendard-Bold";
        font-size: 28px;
        line-height: 130%;
        letter-spacing: -0.84px;
      `,
      Medium: css`
        font-family: "Pretendard-Medium";
        font-size: 28px;
        line-height: 130%;
        letter-spacing: -0.84px;
      `,
      Regular: css`
        font-family: "Pretendard-Regular";
        font-size: 28px;
        line-height: 130%;
        letter-spacing: -0.84px;
      `,
    },
  
    Title3: {
      Bold: css`
        font-family: "Pretendard-Bold";
        font-size: 24px;
        line-height: 130%;
        letter-spacing: -0.48px;
      `,
      Medium: css`
        font-family: "Pretendard-Medium";
        font-size: 24px;
        line-height: 130%;
        letter-spacing: -0.48px;
      `,
      Regular: css`
        font-family: "Pretendard-Regular";
        font-size: 24px;
        line-height: 130%;
        letter-spacing: -0.48px;
      `,
    },
  
    Heading1: {
      Bold: css`
        font-family: "Pretendard-Bold";
        font-size: 22px;
        line-height: 130%;
        letter-spacing: -0.44px;
      `,
      Medium: css`
        font-family: "Pretendard-Medium";
        font-size: 22px;
        line-height: 130%;
        letter-spacing: -0.44px;
      `,
      Regular: css`
        font-family: "Pretendard-Regular";
        font-size: 22px;
        line-height: 130%;
        letter-spacing: -0.44px;
      `,
    },
  
    Heading2: {
      Bold: css`
        font-family: "Pretendard-Bold";
        font-size: 20px;
        line-height: 140%;
        letter-spacing: -0.2px;
      `,
      Medium: css`
        font-family: "Pretendard-Medium";
        font-size: 20px;
        line-height: 140%;
        letter-spacing: -0.2px;
      `,
      Regular: css`
        font-family: "Pretendard-Regular";
        font-size: 20px;
        line-height: 140%;
        letter-spacing: -0.2px;
      `,
    },
  
    Headline: {
      Bold: css`
        font-family: "Pretendard-Bold";
        font-size: 18px;
      `,
      Medium: css`
        font-family: "Pretendard-Medium";
        font-size: 18px;
        line-height: 150%;
      `,
      Regular: css`
        font-family: "Pretendard-Regular";
        font-size: 18px;
        line-height: 150%;
      `,
    },
  
    Body1: {
      Bold: css`
        font-family: "Pretendard-Bold";
        font-size: 16px;
        line-height: 150%;
        letter-spacing: -0.16px;
      `,
      Medium: css`
        font-family: "Pretendard-Medium";
        font-size: 16px;
        line-height: 150%;
        letter-spacing: -0.16px;
      `,
      Regular: css`
        font-family: "Pretendard-Regular";
        font-size: 16px;
        line-height: 150%;
        letter-spacing: -0.16px;
      `,
    },
    Body2: {
      Bold: css`
        font-family: "Pretendard-Bold";
        font-size: 15px;
        line-height: 150%;
        letter-spacing: -0.16px;
      `,
      Medium: css`
        font-family: "Pretendard-Medium";
        font-size: 15px;
        line-height: 150%;
        letter-spacing: -0.16px;
      `,
      Regular: css`
        font-family: "Pretendard-Regular";
        font-size: 15px;
        line-height: 150%;
        letter-spacing: -0.16px;
      `,
    },
  
    Label: {
      Bold: css`
        font-family: "Pretendard-Bold";
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 0.28px;
      `,
      Medium: css`
        font-family: "Pretendard-Medium";
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 0.28px;
      `,
      Regular: css`
        font-family: "Pretendard-Regular";
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 0.28px;
      `,
    },
  
    Caption1: {
      Bold: css`
        font-family: "Pretendard-Bold";
        font-size: 13px;
        line-height: 130%;
        letter-spacing: 0.39px;
      `,
      Medium: css`
        font-family: "Pretendard-Medium";
        font-size: 13px;
        line-height: 130%;
        letter-spacing: 0.39px;
      `,
      Regular: css`
        font-family: "Pretendard-Regular";
        font-size: 13px;
        line-height: 130%;
        letter-spacing: 0.39px;
      `,
    },
  
    Caption2: {
      Bold: css`
        font-family: "Pretendard-Bold";
        font-size: 12px;
        line-height: 130%;
        letter-spacing: 0.36px;
      `,
      Medium: css`
        font-family: "Pretendard-Medium";
        font-size: 12px;
        line-height: 130%;
        letter-spacing: 0.36px;
      `,
      Regular: css`
        font-family: "Pretendard-Regular";
        font-size: 12px;
        line-height: 130%;
        letter-spacing: 0.36px;
      `,
    },
  },
  BitBit: {
    Title1: css`
    font-family: "DNFBitBitv2";
    font-size: 36px;
    line-height: 130%;
    letter-spacing: -1.08px;
    `,
    Title2: css`
      font-family: "DNFBitBitv2";
      font-size: 28px;
      line-height: 130%;
      letter-spacing: -0.84px;
    `,
    Title3: css`
      font-family: "DNFBitBitv2";
      font-size: 24px;
      line-height: 130%;
      letter-spacing: -0.48px;
    `,
    Heading1: css`
      font-family: "DNFBitBitv2";
      font-size: 22px;
      line-height: 130%;
      letter-spacing: -0.44px;
    `,
    Heading2: css`
      font-family: "DNFBitBitv2";
      font-size: 20px;
      line-height: 140%;
      letter-spacing: -0.2px;
    `,
    Headline: css`
      font-family: "DNFBitBitv2";
      font-size: 18px;
      line-height: 150%;
    `,
    Body1: css`
      font-family: "DNFBitBitv2";
      font-size: 16px;
      line-height: 150%;
      letter-spacing: -0.16px;
    `,
    Body2: css`
      font-family: "DNFBitBitv2";
      font-size: 15px;
      line-height: 150%;
      letter-spacing: -0.16px;
    `,
    Label: css`
      font-family: "DNFBitBitv2";
      font-size: 14px;
      line-height: 140%;
      letter-spacing: 0.28px;
    `,
    Caption1: css`
      font-family: "DNFBitBitv2";
      font-size: 13px;
      line-height: 130%;
      letter-spacing: 0.39px;
    `,
    Caption2: css`
      font-family: "DNFBitBitv2";
      font-size: 12px;
      line-height: 130%;
      letter-spacing: 0.36px;
    `,
  }
});