import StarRating from "@components/common/StarRating";
import { LegacyPalette } from "@src/constants/color/color";
import { ruinDetailDummy } from "@src/constants/dummy/ruinDetail.dummy";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

const Review = () => {
  const firstRuinDetail = ruinDetailDummy[0];

  return (
    <ReviewWrapper>
      {firstRuinDetail.review.map((item, idx) => (
        <ReviewContainer key={idx}>
          <UserInfoWrapper>
            <img src={item.profileImg} alt="userProfileImg" />
            <UserInfoContainer>
              {item.username}
              <span>{item.creationDate}</span>
            </UserInfoContainer>
          </UserInfoWrapper>
          <StarRating score={item.rating} />
          {item.content}
        </ReviewContainer>
      ))}
    </ReviewWrapper>
  );
};

export default Review;

const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
  overflow: hidden;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
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
