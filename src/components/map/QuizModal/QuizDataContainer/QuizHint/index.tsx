import LegacyButton from "@components/common/LegacyButton";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import { useGetQuizHint } from "@src/queries/map/map.queries";
import styled from "styled-components";

const QuizHint = ({ quizId }: { quizId: number | null }) => {
  const { data, refetch } = useGetQuizHint(quizId!, { enabled: false });
  return (
    <LegacyButton
      width="100%"
      size="default"
      isBold={!data}
      isFilled={false}
      color={LegacySementic.blue.netural}
      handleClick={refetch}
    >
      <HintText $data={(!!data).toString()}>{data ?? "힌트 확인 ( 300크레딧 )"}</HintText>
    </LegacyButton>
  );
}

export default QuizHint


const HintText = styled.span<{$data: string}>`
  color: ${({ $data }) => $data === "true" ? LegacyPalette.labelAlternative :  LegacySementic.blue.netural};
  ${LegacyTypography.Pretendard.Caption1.Bold};
`