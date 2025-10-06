import EmptyMessage from "@components/friend/EmptyMessage";
import FriendActionButton from "@components/friend/FriendActionButton";
import FriendItem from "@components/friend/FriendItem";
import friendApi from "@src/api/friend/friend.api";
import { LegacyPalette } from "@src/constants/color/color";
import { useGetMyFriendsQuery } from "@src/queries/friend/friend.query";
import { toast } from "react-toastify";
import styled from "styled-components";

const MyFriendItemContainer = ({ friendName }: { friendName: string }) => {
  const { data: myFriends, refetch: refetchMyFriends } = useGetMyFriendsQuery();

  const filteredFriends = myFriends.filter((item) =>
    item.nickname.toLowerCase().includes(friendName.toLowerCase())
  );

  return myFriends.length === 0 ? (
    <EmptyMessage text="아직 친구가 없어요!" subText="친구 추가를 해주세요." />
  ) : (
    <MyFriendListDataWrapper>
      {filteredFriends.map((item, idx) => (
        <div>
          <FriendItem
            key={idx}
            username={item.nickname}
            profileImg={item.profileImage}
            level={item.level}
          />
          <FriendActionButton
            type="CLOSE"
            handleButtonClick={() => {
              friendApi
                .deleteMyFriend(item.userId)
                .then(() => {
                  toast.success("친구 삭제를 성공했습니다.");
                  refetchMyFriends();
                })
                .catch(() => toast.error("친구 삭제를 실패했습니다."));
            }}
          />
        </div>
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
    display: flex;
    gap: 20px;
    border-radius: 8px;
    align-items: center;

    &:hover {
      background-color: ${LegacyPalette.fillNormal};
    }
  }
`;
