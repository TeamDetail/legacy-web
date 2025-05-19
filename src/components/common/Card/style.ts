import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import styled from "styled-components";

export const CardContainer = styled.div<{ $size: "L" | "M" | "S", $type: "SHINE" | "NORMAL" | "START" | "BLANK"}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: ${({ $size }) => $size === "L" ? 200 : $size === "M" ? 160 : 120};
  height: ${({ $size }) => $size === "L" ? 280 : $size === "M" ? 224 : 168};

  border: 3px ${({ $type }) => $type === "SHINE" ? LegacySementic.yellow.netural : LegacyPalette.lineNeutral} solid;
  border-radius: ${({ $size }) => $size === "L" ? 20 : $size === "M" ? 16 : 12};
  padding: ${({ $size }) => $size === "L" ? 16 : $size === "M" ? 12 : 10};

`