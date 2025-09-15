import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";
import Close from "@src/assets/close.svg?react";
import ScoreInput from "./ScoreInput";
import { useState } from "react";
import LegacyButton from "@components/common/LegacyButton";
import { RuinDetail } from "@src/types/map/ruin.type";
import { toast } from "react-toastify";
import ruinApi from "@src/api/map/ruin.api";

const Comment = ({
  close,
  selectedRuinsId,
  refetchCommentData,
}: {
  close: () => void;
  selectedRuinsId: RuinDetail;
  refetchCommentData: () => void;
}) => {
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmitComment = async () => {
    if (comment === "") {
      toast.error("한줄평을 작성해주세요!");
      return;
    }
    if (score === 0) {
      toast.error("점수를 매겨주세요!");
      return;
    }
    try {
      const data = await ruinApi.writeComment(
        selectedRuinsId.ruinsId,
        score,
        comment
      );
      if (data) {
        toast.success("한줄평 작성 완료!");
        refetchCommentData();
        close();
      }
    } catch {
      toast.error("한줄평 작성 실패!");
    }
  };

  return (
    <CommentModalContainer>
      <CommentModalHeader>
        한줄평 남기기
        <Close width={24} height={24} onClick={close} />
      </CommentModalHeader>
      <CommentModalMain>
        <CommentRuinInfo>
          <span>#{selectedRuinsId.ruinsId}</span>
          {selectedRuinsId.name}
        </CommentRuinInfo>
        <ScoreInput score={score} setScore={setScore} />
        <textarea onChange={(e) => setComment(e.target.value)} />
        <LegacyButton
          isBold
          isFilled={false}
          color={LegacySementic.blue.netural}
          size="default"
          width="100%"
          children={<ButtonText>작성 완료!</ButtonText>}
          handleClick={handleSubmitComment}
        />
      </CommentModalMain>
    </CommentModalContainer>
  );
};

export default Comment;

const CommentModalContainer = styled.div`
  width: 416px;
  height: 360px;
  border-radius: 20px;
  background-color: ${LegacyPalette.backgroundNormal};
  display: flex;
  padding: 16px 20px;
  flex-direction: column;
  gap: 12px;
`;

const CommentModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${LegacyTypography.Pretendard.Heading1.Bold};
  color: ${LegacyPalette.labelNormal};
`;

const CommentModalMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  textarea {
    width: 100%;
    height: 100%;
    padding: 16px;
    resize: none;
    background-color: ${LegacyPalette.fillNormal};
    border: none;
    border-radius: 16px;

    ${LegacyTypography.Pretendard.Body2.Bold};
    color: ${LegacyPalette.labelNormal};

    &::placeholder {
      ${LegacyTypography.Pretendard.Body2.Bold};
      color: ${LegacyPalette.labelAlternative};
    }
  }
`;

const CommentRuinInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  ${LegacyTypography.Pretendard.Headline.Bold};
  color: ${LegacyPalette.labelNormal};

  span {
    ${LegacyTypography.Pretendard.Caption1.Medium};
    color: ${LegacyPalette.labelAlternative};
  }
`;

const ButtonText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${LegacyTypography.Pretendard.Caption1.Bold};
  color: ${LegacySementic.blue.netural};
`;
