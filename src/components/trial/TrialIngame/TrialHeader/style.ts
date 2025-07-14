import styled from "styled-components";

export const TrialHeaderContainer = styled.header<{
  $isLoading: string;
}>`
  display: flex;
  justify-content: space-between;
  align-items: start;
  transition: all 0.18s ease-out;
  transform: ${({ $isLoading }) => $isLoading === "true" ? "translateY(-200px)" : ""};
`

export const TrialScoreAndItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`