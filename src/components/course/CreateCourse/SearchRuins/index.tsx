import styled from "styled-components";
import SearchIcon from "@src/assets/search.svg?react";
import { LegacyTypography } from "@src/constants/font/fontToken";
import { LegacyPalette } from "@src/constants/color/color";
import useRuin from "@src/hooks/map/useRuin";
import { Dispatch, SetStateAction, useState } from "react";
import CourseElementItem from "@components/course/CourseElementItem";
import { RuinDetail } from "@src/types/map/ruin.type";

interface SearchRuinsProps {
  selectedRuins: RuinDetail[];
  setSelectedRuins: Dispatch<SetStateAction<RuinDetail[]>>;
}

const SearchRuins = ({ selectedRuins, setSelectedRuins }: SearchRuinsProps) => {
  const { getRuinsByName, ruinsByName } = useRuin();
  const [name, setName] = useState<string>("");

  const handleSearchButtonClick = () => {
    getRuinsByName(name);
  };

  return (
    <SearchRuinsContainer>
      <InputContainer>
        <Search>
          <SearchIcon width={20} height={20} />
          <input
            placeholder="코스 이름으로 검색..."
            onChange={(e) => setName(e.target.value)}
          />
        </Search>
        <SearchButton onClick={handleSearchButtonClick}>검색</SearchButton>
      </InputContainer>
      {ruinsByName ? (
        <RuinsWrapper>
          {ruinsByName.map((item) => {
            const indexInSelected = selectedRuins.findIndex(
              (selected) => selected.ruinsId === item.ruinsId
            );

            const isSelected = indexInSelected !== -1;

            return (
              <CourseElementItem
                key={item.ruinsId}
                canSelect={true}
                isSelect={isSelected}
                index={isSelected ? indexInSelected : undefined!}
                ruinId={item.ruinsId}
                ruinName={item.name}
                ruinScore={8}
                explorerCount={55}
                explorerRatio={12}
                handleClick={() => {
                  if (!isSelected && selectedRuins.length < 30) {
                    setSelectedRuins((prev) => [...prev, item]);
                  }
                }}
                card={item.card}
              />
            );
          })}
        </RuinsWrapper>
      ) : (
        <EmptyCourseMessage>
          코스에 삽입할 유적을 골라주세요!
          <span>이름으로만 검색할 수 있어요.</span>
        </EmptyCourseMessage>
      )}
    </SearchRuinsContainer>
  );
};

export default SearchRuins;

const SearchRuinsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const RuinsWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 12px;
  padding-right: 12px;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  padding-right: 12px;
`;

export const Search = styled.div`
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

export const SearchButton = styled.div`
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

export const EmptyCourseMessage = styled.div`
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
