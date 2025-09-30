import SearchBar from "@components/common/SearchBar";
import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import { useState } from "react";
import styled from "styled-components";
import FriendItem from "../FriendItem";
import FriendActionButton from "../Button";

const FriendAdd = () => {
  const [friendName, setFriendName] = useState("");

  return (
    <FriendAddContainer>
      <FriendAddLabelWrapper>
        내 친구 코드<div>12058628</div>
      </FriendAddLabelWrapper>
      <FriendAddLabelWrapper>
        친구 코드로 추가하기
        <input type="text" placeholder="추가하고 싶은 친구의 코드 입력..." />
      </FriendAddLabelWrapper>
      <hr />
      <FriendAddLabelWrapper>
        이름으로 검색하기
        <SearchBar
          placeholder="친구 이름으로 검색..."
          value={friendName}
          handleValue={(s) => setFriendName(s)}
        />
      </FriendAddLabelWrapper>
      <FriendListContainer>
        {Array.from({ length: 20 }).map((_, idx) => (
          <div>
            <FriendItem key={idx} />
            <FriendActionButton type="SEND" />
          </div>
        ))}
      </FriendListContainer>
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

  div {
    width: 100%;
    padding: 12px 16px;
    background-color: ${LegacyPalette.fillNormal};
    border-radius: 16px;
    ${LegacyTypography.Pretendard.Title2.Medium};
    color: ${LegacyPalette.labelNormal};
  }

  > input {
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

const FriendListContainer = styled.div`
  width: 100%;
  flex-grow: 1;
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
