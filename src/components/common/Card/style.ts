import { LegacySementicColor } from "@src/constants/color/sementic";
import styled from "styled-components";

export const CardContainer = styled.div<{ $size: "L" | "M" | "S" }>`
  display: flex;
  border: 3px ${LegacySementicColor.lineNeutral} solid;
  border-radius: ${({ $size }) => $size === "L" ? 20 : $size === "M" ? 16 : 12};
  
`