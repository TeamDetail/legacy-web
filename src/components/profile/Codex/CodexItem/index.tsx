import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken"
import styled from "styled-components"

interface CodexItemProps {
  title: string;
  currentCount: number;
  maxCount: number;
  onClick: () => void;
}
const CodexItem = ({title, currentCount, maxCount, onClick}: CodexItemProps) => {
  return (
    <CodexItemHover onClick={onClick}>
      <CodexItemContainer>
        {title}
        <div>
          <p>{`${currentCount} / ${maxCount}`}</p>
          •
          <span>{`${Math.floor((currentCount / maxCount) * 100)}% 수집`}</span>
        </div>
      </CodexItemContainer>
    </CodexItemHover>
  )
}

const CodexItemHover = styled.div`
  > :hover {
    background-color: ${LegacyPalette.backgroundNeutral};
  }
  cursor: pointer;
`
const CodexItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 8px;
  ${LegacyTypography.Pretendard.Heading1.Bold};
  color: ${LegacyPalette.labelNormal};
  border-radius: 12px;
  > div {
    display: flex;
    gap: 4px;
    padding: 8px 12px;
    border-radius: 8px;
    background-color: ${LegacyPalette.fillNormal};
    align-items: center;
    color: ${LegacyPalette.labelAlternative};
    ${LegacyTypography.Pretendard.Headline.Regular}
    > p {
      color: ${LegacyPalette.labelNormal};
      ${LegacyTypography.Pretendard.Headline.Bold};
    }
  }
`
export default CodexItem