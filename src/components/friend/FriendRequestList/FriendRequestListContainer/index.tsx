import FriendActionButton from "@components/friend/Button";
import FriendItem from "@components/friend/FriendItem";
import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import { useGetMyFriendRequestsQuery } from "@src/queries/friend/friend.query";
import styled from "styled-components";

const FriendRequestListContainer = ({
  type,
}: {
  type: "sents" | "requests";
}) => {
  const { data: myFriendRequests } = useGetMyFriendRequestsQuery(type);

  return (
    <FriendRequestListWrapper>
      <p>
        {type === "requests" ? "받은" : "보낸"} 친구 요청
        <span>{myFriendRequests.length}</span>
      </p>
      <FriendRequestListDataWrapper>
        {myFriendRequests.map((_, i) => (
          <>
            {i !== 0 && <hr />}
            <div key={i}>
              <FriendItem />
              <FriendRequestButtonWrapper>
                <FriendActionButton type="CHECK" />
                <FriendActionButton type="CLOSE" />
              </FriendRequestButtonWrapper>
            </div>
          </>
        ))}
      </FriendRequestListDataWrapper>
    </FriendRequestListWrapper>
  );
};

export default FriendRequestListContainer;

export const FriendRequestListWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    display: flex;
    gap: 8px;
    ${LegacyTypography.Pretendard.Body1.Medium};
    color: ${LegacyPalette.labelAlternative};

    span {
      ${LegacyTypography.Pretendard.Body1.Bold};
      color: ${LegacyPalette.labelNeutral};
    }
  }
`;

export const FriendRequestListDataWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;

  > div {
    padding: 8px;
    display: flex;
    gap: 20px;
    border-radius: 8px;

    &:hover {
      background-color: ${LegacyPalette.fillNormal};
    }
  }

  hr {
    border: 0.5px solid ${LegacyPalette.lineAlternative};
  }
`;

export const FriendRequestButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
`;
