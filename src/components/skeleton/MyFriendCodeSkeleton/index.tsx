import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";
import { skeletonAnimtaion } from "../animation";

const MyFriendCodeSkeleton = () => {
  return (
    <FriendAddLabelWrapper>
      내 친구 코드
      <div />
    </FriendAddLabelWrapper>
  );
};

export default MyFriendCodeSkeleton;

const FriendAddLabelWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${LegacyTypography.Pretendard.Body1.Medium};
  color: ${LegacyPalette.labelNeutral};

  div {
    width: 100%;
    border-radius: 16px;
    ${skeletonAnimtaion};
  }
`;
