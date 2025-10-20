import FriendActionButton from "@components/friend/FriendActionButton";
import FriendItem from "@components/friend/FriendItem";
import friendApi from "@src/api/friend/friend.api";
import { LegacyPalette } from "@src/constants/color/color";
import { useSearchUserByNicknameQuery } from "@src/queries/user/user.queries";
import { toast } from "react-toastify";
import styled from "styled-components";

const UserListContainer = ({ username }: { username: string }) => {
  const { data: usersData } = useSearchUserByNicknameQuery(username);

  return (
    <FriendListContainer>
      {usersData!.map((item, idx) => (
        <div>
          <FriendItem
            profileImg={item.profileImage}
            username={item.nickname}
            level={item.level}
            key={idx}
          />
          <FriendActionButton
            type="SEND"
            handleButtonClick={() =>
              friendApi
                .postFriendByCode(item.friendCode)
                .then(() => toast.success("친구 요청을 성공했습니다."))
                .catch(() => toast.error("친구 요청을 실패했습니다."))
            }
          />
        </div>
      ))}
    </FriendListContainer>
  );
};

export default UserListContainer;

const FriendListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  > div {
    padding: 8px;
    border-radius: 8px;
    display: flex;
    gap: 20px;
    align-items: center;

    &:hover {
      background-color: ${LegacyPalette.fillNormal};
    }
  }
`;
