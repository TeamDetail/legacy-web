import { LegacySementicColor } from "@src/constants/color/sementic";
import styled from "styled-components";

export const CardContainer = styled.div<{ $size: "L" | "M" | "S" }>`
  display: flex;
  border: 3px ${LegacySementicColor.lineNeutral} solid;

`