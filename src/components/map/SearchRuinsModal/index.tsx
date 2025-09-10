import { LegacyPalette } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import styled from "styled-components";
import Close from "@src/assets/close.svg?react";
import SearchIcon from "@src/assets/search.svg?react";
import useRuin from "@src/hooks/map/useRuin";
import StarRating from "@components/common/StarRating";
import { useState } from "react";
import { RuinDetail } from "@src/types/map/ruin.type";

interface SearchRuinsModalProps {
  close: () => void;
  onSelectRuin: (ruin: RuinDetail) => void;
}

const SearchRuinsModal = ({ close, onSelectRuin }: SearchRuinsModalProps) => {
  const { getRuinsByName, ruinsByName } = useRuin();
  const [name, setName] = useState<string>("");

  const handleSearchButtonClick = () => {
    getRuinsByName(name);
  };

  return (
    <SearchRuinsModalContainer>
      <SearchRuinsModalHeader>
        유적지 검색
        <Close onClick={close} />
      </SearchRuinsModalHeader>
      <SearchRuinsModalMain>
        {/* 검색 입력 */}
        <InputContainer>
          <Search
            onSubmit={(e) => {
              e.preventDefault();
              handleSearchButtonClick();
            }}
          >
            <SearchIcon width={20} height={20} />
            <input
              placeholder="코스 이름으로 검색..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Search>
          <SearchButton onClick={handleSearchButtonClick}>검색</SearchButton>
        </InputContainer>

        {/* 검색 결과 */}
        {ruinsByName ? (
          <SearchRuinsResultWrapper>
            {ruinsByName.map((item) => (
              <RuinNameScoreContainer
                key={item.ruinsId}
                onClick={() => onSelectRuin(item)}
              >
                <RuinNameContainer>
                  <span># {item.ruinsId}</span>
                  {item.name}
                  <p>{item.detailAddress}</p>
                </RuinNameContainer>
                <ScoreContainer $gap="2px">
                  <StarRating score={7} />
                  (302)
                </ScoreContainer>
              </RuinNameScoreContainer>
            ))}
          </SearchRuinsResultWrapper>
        ) : (
          <EmptyCourseMessage>
            코스에 삽입할 유적을 골라주세요!
            <span>이름으로만 검색할 수 있어요.</span>
          </EmptyCourseMessage>
        )}
      </SearchRuinsModalMain>
    </SearchRuinsModalContainer>
  );
};

export default SearchRuinsModal;

const SearchRuinsModalContainer = styled.div`
  width: 440px;
  height: 520px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 20px;
  background-color: ${LegacyPalette.backgroundNormal};
  overflow: hidden;
`;

const SearchRuinsModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${LegacyTypography.Pretendard.Heading1.Bold};
  color: ${LegacyPalette.labelNormal};
`;

const SearchRuinsModalMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  padding-right: 12px;
`;

const Search = styled.form`
  flex-grow: 1;
  padding: 0px 12px;
  display: flex;
  gap: 8px;
  align-items: center;
  height: 36px;
  border-radius: 12px;
  background-color: ${LegacyPalette.fillNormal};

  input {
    ${LegacyTypography.Pretendard.Label.Medium};
    color: ${LegacyPalette.labelNormal};
    height: 100%;
    flex-grow: 1;
    border: none;
    background: none;

    &::placeholder {
      color: ${LegacyPalette.labelAlternative};
    }

    &:focus {
      outline: none;
    }
  }
`;

const SearchButton = styled.div`
  height: 36px;
  padding: 0 12px;
  ${LegacyTypography.Pretendard.Label.Bold};
  color: ${LegacyPalette.labelNormal};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${LegacyPalette.fillNormal};
  user-select: none;
  cursor: pointer;
`;

const EmptyCourseMessage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${LegacyTypography.Pretendard.Heading1.Bold};
  color: ${LegacyPalette.labelNormal};
  gap: 8px;

  span {
    ${LegacyTypography.Pretendard.Body1.Medium};
    color: ${LegacyPalette.labelAlternative};
  }
`;

const RuinNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  ${LegacyTypography.Pretendard.Headline.Bold};
  color: ${LegacyPalette.labelNormal};
  span {
    ${LegacyTypography.Pretendard.Caption1.Medium};
    color: ${LegacyPalette.labelAlternative};
  }
  p {
    ${LegacyTypography.Pretendard.Caption1.Regular};
    color: ${LegacyPalette.labelAlternative};
  }
`;

const ScoreContainer = styled.div<{ $gap: string }>`
  display: flex;
  gap: 2px;
  color: ${LegacyPalette.fillAlternative};
  ${LegacyTypography.Pretendard.Caption2.Medium}
`;

const RuinNameScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SearchRuinsResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
