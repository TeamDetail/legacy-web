import { LegacyColorToken } from "./token";

export type ColorToken = {
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

export const LegacySementicColor: ColorToken = Object.freeze({
  primaryNormal: "#A05AE8",
  primaryAlternative: "rgba(100, 32, 170, 0.45)",

  labelNormal: LegacyColorToken.netural99,
  labelStrong: LegacyColorToken.common100,
  labelNeutral: LegacyColorToken.netural95,
  labelAlternative: LegacyColorToken.netural90,
  labelAssistive: LegacyColorToken.netural70,
  labelDisabled: LegacyColorToken.netural30,

  lineNormal: LegacyColorToken.netural50,
  lineNeutral: LegacyColorToken.netural30,
  lineAlternative: LegacyColorToken.netural25,

  fillNormal: LegacyColorToken.netural20,
  fillNeutral: LegacyColorToken.netural25,
  fillAlternative: LegacyColorToken.netural30,
  fillAssistive: LegacyColorToken.netural60,

  backgroundNormal: LegacyColorToken.netural15,
  backgroundNeutral: LegacyColorToken.netural10,
  backgroundAlternative: LegacyColorToken.netural7,

  statusNegative: LegacyColorToken.red50,
  statusCautionary: LegacyColorToken.yellow50,
  statusPositive: LegacyColorToken.green50,

  staticWhite: LegacyColorToken.common100,
  staticBlack: LegacyColorToken.common0,
});