import SearchBar from "@components/common/SearchBar";
import { Suspense, useState } from "react";
import styled from "styled-components";
import MyFriendItemContainer from "./MyFriendItemContainer";
import MyFriendsSkeleton from "@components/skeleton/MyFriendsSkeleton";

const MyFriendList = () => {
  const [friendName, setFriendName] = useState("");

  return (
    <MyFriendListContainer>
      <SearchBar
        value={friendName}
        handleValue={(s) => setFriendName(s)}
        placeholder="친구 이름으로 검색"
      />
      <Suspense fallback={<MyFriendsSkeleton />}>
        <MyFriendItemContainer friendName={friendName} />
      </Suspense>
    </MyFriendListContainer>
  );
};

export default MyFriendList;

const MyFriendListContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
`;
