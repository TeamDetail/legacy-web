import SearchBar from "@components/common/SearchBar";
import { useState } from "react";
import styled from "styled-components";
import FriendItem from "../FriendItem";
import { LegacyPalette } from "@src/constants/color/color";

const MyFriendList = () => {
  const [friendName, setFriendName] = useState("");

  return (
    <MyFriendListContainer>
      <SearchBar
        value={friendName}
        handleValue={(s) => setFriendName(s)}
        placeholder="친구 이름으로 검색"
      />
      <MyFriendListDataWrapper>
        {Array.from({ length: 20 }).map((_, idx) => (
          <FriendItem key={idx} />
        ))}
      </MyFriendListDataWrapper>
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
