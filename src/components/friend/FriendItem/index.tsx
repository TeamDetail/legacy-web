import Title from "@components/common/Title";
import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import type { TitleType } from "@src/types/user/user.type";
import styled from "styled-components";

const FriendItem = ({
  username,
  level,
  profileImg,
  title,
}: {
  username: string;
  level: number;
  profileImg: string;
  title: TitleType;
}) => {
  return (
    <FriendRequestItemContainer>
      <img src={profileImg} alt="profileImg" />
      <FriendRequestItemDataWrapper>
        <p>
          {username}
          <span>Lv. {level}</span>
        </p>
        {!!title && <Title name={title.name} styleId={title.styleId}/>}
      </FriendRequestItemDataWrapper>
    </FriendRequestItemContainer>
  );
};

export default FriendItem;

const FriendRequestItemContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-grow: 1;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    object-fit: cover;
  }
`;

const FriendRequestItemDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-grow: 1;

  > p {
    ${LegacyTypography.Pretendard.Headline.Bold};
    color: ${LegacyPalette.labelNormal};

    display: flex;
    flex-direction: column;

    > span {
      ${LegacyTypography.Pretendard.Label.Medium};
      color: ${LegacyPalette.labelAlternative};
    }
  }
`;
