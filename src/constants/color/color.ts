import { LegacyColorBase } from "./base";

export type PaletteColorType = {
  primaryNormal: string;
  primaryAlternative: string;

  labelNormal: string;
  labelStrong: string;
  labelNeutral: string;
  labelAlternative: string;
  labelAssistive: string;
  labelDisabled: string;

  lineNormal: string;
  lineNeutral: string;
  lineAlternative: string;

  fillNormal: string;
  fillNeutral: string;
  fillAlternative: string;
  fillAssistive: string;

  backgroundNormal: string;
  backgroundNeutral: string;
  backgroundAlternative: string;

  statusNegative: string;
  statusCautionary: string;
  statusPositive: string;

  staticWhite: string;
  staticBlack: string;
};

export const LegacyPalette: PaletteColorType = Object.freeze({
  primaryNormal: "#A05AE8",
  primaryAlternative: "rgba(100, 32, 170, 0.45)",

  labelNormal: LegacyColorBase.netural99,
  labelStrong: LegacyColorBase.common100,
  labelNeutral: LegacyColorBase.netural95,
  labelAlternative: LegacyColorBase.netural90,
  labelAssistive: LegacyColorBase.netural70,
  labelDisabled: LegacyColorBase.netural30,

  lineNormal: LegacyColorBase.netural50,
  lineNeutral: LegacyColorBase.netural30,
  lineAlternative: LegacyColorBase.netural25,

  fillNormal: LegacyColorBase.netural20,
  fillNeutral: LegacyColorBase.netural25,
  fillAlternative: LegacyColorBase.netural30,
  fillAssistive: LegacyColorBase.netural60,

  backgroundNormal: "#1C1C1E",
  backgroundNeutral: LegacyColorBase.netural10,
  backgroundAlternative: LegacyColorBase.netural7,

  statusNegative: LegacyColorBase.red50,
  statusCautionary: LegacyColorBase.yellow50,
  statusPositive: LegacyColorBase.green50,

  staticWhite: LegacyColorBase.common100,
  staticBlack: LegacyColorBase.common0,
});

type SementicColorInit = {
  normal: string;
  alternative: string;
  netural: string;
}

type SementicColorType = {
  blue: SementicColorInit;
  purple: SementicColorInit;
  green: SementicColorInit;
  red: SementicColorInit;
  yellow: SementicColorInit;
}

export const LegacySementic: SementicColorType = Object.freeze({
  blue: {
    normal: "#62839E",
    alternative: "#647685",
    netural: "#5B96C7",
  },
  purple: {
    normal: "#A980CF",
    alternative: "#7D6D8C",
    netural: "#A980CF",
  },
  green: {
    normal: "#508050",
    alternative: "#677867",
    netural: "#508050",
  },
  red: {
    normal: "#D05458",
    alternative: "#6E4344",
    netural: "#F06969",
  },
  yellow: {
    normal: "#D1B13F",
    alternative: "#968341",
    netural: "#EDB900",
  },
})