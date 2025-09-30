import EmptyMessage from "@components/friend/EmptyMessage";
import FriendItem from "@components/friend/FriendItem";
import { LegacyPalette } from "@src/constants/color/color";
import { useGetMyFriendsQuery } from "@src/queries/friend/friend.query";
import styled from "styled-components";

const MyFriendItemContainer = () => {
  const { data: myFriends } = useGetMyFriendsQuery();

  return myFriends.length === 0 ? (
    <EmptyMessage text="아직 친구가 없어요!" subText="친구 추가를 해주세요." />
  ) : (
    <MyFriendListDataWrapper>
      {myFriends.map((_, idx) => (
        <FriendItem key={idx} />
      ))}
    </MyFriendListDataWrapper>
  );
};

export default MyFriendItemContainer;

const MyFriendListDataWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
  overflow-y: auto;

  > div {
    padding: 8px;

    border-radius: 8px;

    &:hover {
      background-color: ${LegacyPalette.fillNormal};
    }
  }
`;
