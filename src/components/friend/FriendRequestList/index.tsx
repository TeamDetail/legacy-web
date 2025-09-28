import FriendRequestItem from "../FriendItem";
import * as S from "./style";
import FriendActionButton from "../Button";

const FriendRequestList = () => {
  return (
    <S.FriendRequestListContainer>
      <S.FriendRequestListWrapper>
        <p>
          받은 친구 요청<span>124</span>
        </p>
        <S.FriendRequestListDataWrapper>
          {Array.from({ length: 10 }).map((_, i) => (
            <>
              {i !== 0 && <hr />}
              <div key={i}>
                <FriendRequestItem />
                <S.FriendRequestButtonWrapper>
                  <FriendActionButton type="CHECK" />
                  <FriendActionButton type="CLOSE" />
                </S.FriendRequestButtonWrapper>
              </div>
            </>
          ))}
        </S.FriendRequestListDataWrapper>
      </S.FriendRequestListWrapper>
      <S.FriendRequestListWrapper>
        <p>
          보낸 친구 요청<span>3</span>
        </p>
        <S.FriendRequestListDataWrapper>
          {Array.from({ length: 10 }).map((_, i) => (
            <>
              {i !== 0 && <hr />}
              <div key={i}>
                <FriendRequestItem />
                <FriendActionButton type="CLOSE" />
              </div>
            </>
          ))}
        </S.FriendRequestListDataWrapper>
      </S.FriendRequestListWrapper>
    </S.FriendRequestListContainer>
  );
};

export default FriendRequestList;
