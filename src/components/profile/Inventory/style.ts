import { skeletonAnimtaion } from "@components/skeleton/animation";
import styled from "styled-components";

export const InventoryContainer = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  height: 100%;
`;

export const InventorySkeleton = styled.div`
  ${skeletonAnimtaion}
  width: 100%;
  border-radius: 16px;
`