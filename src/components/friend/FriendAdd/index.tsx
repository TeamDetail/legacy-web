import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import { Suspense, useState } from "react";
import styled from "styled-components";
import MyFriendCodeContainer from "./MyFriendCodeContainer";
import MyFriendCodeSkeleton from "@components/skeleton/MyFriendCodeSkeleton";
import friendApi from "@src/api/friend/friend.api";
import { toast } from "react-toastify";
import SearchBar from "@components/common/SearchBar";
import UserListContainer from "./UserListContainer";
import { QueryClient } from "@tanstack/react-query";

const FriendAdd = () => {
  const [friendCode, setFriendCode] = useState("");
  const [username, setUsername] = useState("");
  const queryClient = new QueryClient();

  return (
    <FriendAddContainer>
      <Suspense fallback={<MyFriendCodeSkeleton />}>
        <MyFriendCodeContainer />
      </Suspense>
      <FriendAddLabelWrapper>
        친구 코드로 추가하기
        <form
          onSubmit={(e) => {
            e.preventDefault();
            friendApi
              .postFriendByCode(friendCode)
              .then(() => {
                toast.success("친구 요청을 보냈습니다.");
                queryClient.refetchQueries({ queryKey: ["getMyFriendRequests", "sent"] });
              })
              .catch(() => toast.error("친구 요청에 실패했습니다."));
          }}
        >
          <input
            type="text"
            placeholder="추가하고 싶은 친구의 코드 입력..."
            onChange={(e) => setFriendCode(e.target.value)}
          />
        </form>
      </FriendAddLabelWrapper>
      <hr />
      <FriendAddLabelWrapper>
        이름으로 검색하기
        <SearchBar
          placeholder="친구 이름으로 검색..."
          value={username}
          handleValue={(s) => setUsername(s)}
          handleSubmit={() => {}}
        />
      </FriendAddLabelWrapper>
      <Suspense>
        <UserListContainer username={username} />
      </Suspense>
    </FriendAddContainer>
  );
};

export default FriendAdd;

const FriendAddContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: auto;

  hr {
    border: 0.5px solid ${LegacyPalette.lineAlternative};
  }
`;

const FriendAddLabelWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${LegacyTypography.Pretendard.Body1.Medium};
  color: ${LegacyPalette.labelNeutral};

  input {
    width: 100%;
    padding: 12px 16px;
    background-color: ${LegacyPalette.fillNormal};
    border: none;
    border-radius: 16px;
    ${LegacyTypography.Pretendard.Body1.Medium};
    color: ${LegacyPalette.labelNormal};

    &::placeholder {
      color: ${LegacyPalette.labelAlternative};
    }
  }
`;
