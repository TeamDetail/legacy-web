import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import { useGetMyFriendCodeQuery } from "@src/queries/friend/friend.query";
import styled from "styled-components";

const MyFriendCodeContainer = () => {
  const { data: myFriendCode } = useGetMyFriendCodeQuery();

  return (
    <FriendAddLabelWrapper>
      내 친구 코드<div>{myFriendCode}</div>
    </FriendAddLabelWrapper>
  );
};

export default MyFriendCodeContainer;

const FriendAddLabelWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${LegacyTypography.Pretendard.Body1.Medium};
  color: ${LegacyPalette.labelNeutral};

  div {
    width: 100%;
    padding: 12px 16px;
    background-color: ${LegacyPalette.fillNormal};
    border-radius: 16px;
    ${LegacyTypography.Pretendard.Title2.Medium};
    color: ${LegacyPalette.labelNormal};
  }
`;
