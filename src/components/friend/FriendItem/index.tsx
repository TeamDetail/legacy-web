import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";

const FriendItem = () => {
  return (
    <FriendRequestItemContainer>
      <img
        src="https://pbs.twimg.com/media/G1mVTvkbQAAfSNA?format=jpg&name=large"
        alt=""
      />
      <FriendRequestItemDataWrapper>
        <p>
          안현우<span>Lv. 99</span>
        </p>
        <div>
          <div>BETA TESTER</div>
        </div>
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
  }
`;

const FriendRequestItemDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;

  p {
    ${LegacyTypography.Pretendard.Headline.Bold};
    color: ${LegacyPalette.labelNormal};

    display: flex;
    flex-direction: column;

    span {
      ${LegacyTypography.Pretendard.Label.Medium};
      color: ${LegacyPalette.labelAlternative};
    }
  }

  div {
    display: flex;
    flex-wrap: wrap;
    filter: drop-shadow(0px 2px 4px #0004);
    width: 100%;
    div {
      width: 100%;
      height: 20px;
      background-color: ${LegacyPalette.primaryNormal};

      display: flex;
      justify-content: center;
      align-items: center;

      font-family: "Pretendard-ExtraBold";
      font-size: 10px;
      line-height: 120%;
      letter-spacing: 0.36px;
      color: ${LegacyPalette.labelNormal};

      &:first-child:last-child {
        clip-path: polygon(
          0.75em 0,
          calc(100% - 0.75em) 0,
          100% 50%,
          calc(100% - 0.75em) 100%,
          0.75em 100%,
          0 50%
        );
      }
      flex-grow: 1;
      flex-shrink: 0;
      text-align: center;
    }
  }
`;
