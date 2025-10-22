import { LegacyPalette, LegacySementic } from '@src/constants/color/color';
import { LegacyTypography } from '@src/constants/font/fontToken';
import { useGetQuizCost } from '@src/queries/map/map.queries';
import styled from 'styled-components';

const NeedCredit = () => {
  const { data } = useGetQuizCost();
  return (
    <CostText>
      {data.nextQuizCost} 크레딧 <span>( 누적 {data.currentExploreCount}회 )</span>
    </CostText>
  );
}

export default NeedCredit

const CostText = styled.div`
  display: flex;
  gap: 4px;
  ${LegacyTypography.Pretendard.Body1.Bold};
  color: ${LegacySementic.yellow.netural};
  span {
    ${LegacyTypography.Pretendard.Body2.Medium}
    color: ${LegacyPalette.labelAlternative}
  }
`;
