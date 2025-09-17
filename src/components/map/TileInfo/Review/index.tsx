import LegacyButton from "@components/common/LegacyButton";
import StarRating from "@components/common/StarRating";
import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import { CommentType } from "@src/types/map/ruin.type";
import styled from "styled-components";

const Review = ({
  openCommentModal,
  commentData,
}: {
  openCommentModal: () => void;
  commentData: CommentType[];
}) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}. ${month}. ${day}`;
  };

  return (
    <ReviewWrapper>
      <LegacyButton
        size="small"
        isFilled={false}
        isBold={false}
        color={LegacyPalette.labelAlternative}
        children={<ButtonText>한줄평 남기기</ButtonText>}
        handleClick={openCommentModal}
        width="100%"
      />
      <CommentContainer>
        {commentData?.length !== 0 ? (
          commentData!.map((item, idx) => (
            <ReviewContainer key={idx}>
              <UserInfoWrapper>
                <img src={item.userImgUrl} alt="userProfileImg" />
                <UserInfoContainer>
                  {item.userName}
                  <span>{formatDate(item.createAt)}</span>
                </UserInfoContainer>
              </UserInfoWrapper>
              <StarRating score={item.rating} />
              {item.comment}
            </ReviewContainer>
          ))
        ) : (
          <EmptyCommentText>
            아직 한줄평이 없어요.<span>첫 리뷰를 남겨보세요!</span>
          </EmptyCommentText>
        )}
      </CommentContainer>
    </ReviewWrapper>
  );
};

export default Review;

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  min-height: 0;
  overflow: hidden;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-shrink: 0;
  ${LegacyTypography.Pretendard.Caption2.Regular};
  color: ${LegacyPalette.labelNormal};
`;

const UserInfoWrapper = styled.div`
  display: flex;
  gap: 8px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 999px;
    object-fit: cover;
  }
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${LegacyTypography.Pretendard.Body1.Bold};
  color: ${LegacyPalette.labelNormal};
  span {
    ${LegacyTypography.Pretendard.Caption2.Regular};
    color: ${LegacyPalette.labelAlternative};
  }
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding-right: 4px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${LegacyPalette.lineNeutral};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${LegacyPalette.labelAlternative};
  }
`;

const ButtonText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${LegacyTypography.Pretendard.Caption2.Bold};
  color: ${LegacyPalette.labelAlternative};
`;

const EmptyCommentText = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  ${LegacyTypography.Pretendard.Body1.Bold};
  color: ${LegacyPalette.labelNormal};
  span {
    ${LegacyTypography.Pretendard.Caption2.Medium};
    color: ${LegacyPalette.labelAlternative};
  }
`;
