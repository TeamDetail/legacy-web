import FriendActionButton from "@components/friend/FriendActionButton";
import EmptyMessage from "@components/friend/EmptyMessage";
import FriendItem from "@components/friend/FriendItem";
import friendApi from "@src/api/friend/friend.api";
import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import { useGetMyFriendRequestsQuery } from "@src/queries/friend/friend.query";
import { QueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import styled from "styled-components";

const FriendRequestListContainer = ({
  type,
}: {
  type: "sent" | "requests";
}) => {
  const { data: myFriendRequests, refetch: refetchMyFriendRequests } =
    useGetMyFriendRequestsQuery(type);
  const queryClient = new QueryClient();

  return (
    <FriendRequestListWrapper>
      <p>
        {type === "requests" ? "받은" : "보낸"} 친구 요청
        <span>{myFriendRequests.length}</span>
      </p>
      {myFriendRequests.length === 0 ? (
        <EmptyMessage
          text={`아직 ${
            type === "requests" ? "받은" : "보낸"
          } 친구 요청이 없어요!`}
          subText="친구 추가를 통해 새로운 친구를 만나보세요."
        />
      ) : (
        <FriendRequestListDataWrapper>
          {myFriendRequests.map((item, i) => (
            <>
              {i !== 0 && <hr />}
              <div key={i}>
                <FriendItem
                  username={
                    type === "requests"
                      ? item.senderNickname
                      : item.receiverNickname
                  }
                  level={
                    type === "requests" ? item.senderLevel : item.receiverLevel
                  }
                  profileImg={
                    type === "requests"
                      ? item.senderProfileImage
                      : item.receiverProfileImage
                  }
                />
                {type === "requests" ? (
                  <FriendRequestButtonWrapper>
                    <FriendActionButton
                      type="CHECK"
                      handleButtonClick={() =>
                        friendApi
                          .responseFriendRequest(item.requestId, "accept")
                          .then(() => {
                            toast.success("친구 요청을 수락했습니다.");
                            queryClient.invalidateQueries({
                              queryKey: ["getMyFriendRequests", type],
                            });
                            queryClient.refetchQueries({
                              queryKey: ["getMyFriends"],
                            });
                            refetchMyFriendRequests();
                          })
                          .catch(() =>
                            toast.error("친구 요청 수락을 실패했습니다.")
                          )
                      }
                    />
                    <FriendActionButton
                      type="CLOSE"
                      handleButtonClick={() =>
                        friendApi
                          .responseFriendRequest(item.requestId, "decline")
                          .then(() => {
                            toast.success("친구 요청을 거절했습니다.");
                            queryClient.invalidateQueries({
                              queryKey: ["getMyFriendRequests", type],
                            });
                            refetchMyFriendRequests();
                          })
                          .catch(() =>
                            toast.error("친구 요청 거절을 실패했습니다.")
                          )
                      }
                    />
                  </FriendRequestButtonWrapper>
                ) : (
                  <FriendRequestButtonWrapper>
                    <FriendActionButton
                      type="CLOSE"
                      handleButtonClick={() =>
                        friendApi
                          .cancleMyFriendRequest(item.requestId)
                          .then(() => {
                            toast.success("친구 요청을 취소했습니다.");
                            refetchMyFriendRequests();
                          })
                          .catch(() =>
                            toast.error("친구 요청 취소를 실패했습니다.")
                          )
                      }
                    />
                  </FriendRequestButtonWrapper>
                )}
              </div>
            </>
          ))}
        </FriendRequestListDataWrapper>
      )}
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
