import * as S from "./style";
import Close from "@src/assets/close.svg?react";
import useRuin from "@src/hooks/map/useRuin";
import StarRating from "@components/common/StarRating";
import { useState } from "react";
import { RuinDetail } from "@src/types/map/ruin.type";
import SearchRuinsSkeleton from "@components/skeleton/SearchRuinsSkeleton";
import SearchBar from "@components/common/SearchBar";

interface SearchRuinsModalProps {
  close: () => void;
  onSelectRuin: (ruin: RuinDetail) => void;
}

const SearchRuinsModal = ({ close, onSelectRuin }: SearchRuinsModalProps) => {
  const { getRuinsByName, ruinsByName, isRuinsByNameFetching } = useRuin();
  const [name, setName] = useState<string>("");

  const handleSearchButtonClick = () => {
    getRuinsByName(name);
  };

  return (
    <S.SearchRuinsModalContainer>
      <S.SearchRuinsModalHeader>
        유적지 검색
        <div onClick={close}>
          <Close />
        </div>
      </S.SearchRuinsModalHeader>
      <S.SearchRuinsModalMain>
        <S.InputContainer>
          <SearchBar
            value={name}
            handleValue={(s: string) => setName(s)}
            placeholder="유적지 이름으로 검색.."
            handleSubmit={handleSearchButtonClick}
          />
          <S.SearchButton onClick={handleSearchButtonClick}>
            검색
          </S.SearchButton>
        </S.InputContainer>

        {ruinsByName ? (
          <S.SearchRuinsResultWrapper>
            {ruinsByName.map((item) => (
              <S.RuinNameScoreContainer
                key={item.ruinsId}
                onClick={() => onSelectRuin(item)}
              >
                <S.RuinNameContainer>
                  <span># {item.ruinsId}</span>
                  {item.name}
                  <p>{item.detailAddress}</p>
                </S.RuinNameContainer>
                <S.ScoreContainer $gap="2px">
                  <StarRating score={7} />
                  (302)
                </S.ScoreContainer>
              </S.RuinNameScoreContainer>
            ))}
          </S.SearchRuinsResultWrapper>
        ) : isRuinsByNameFetching ? (
          <SearchRuinsSkeleton />
        ) : (
          <S.EmptyCourseMessage>
            원하는 유적지를 검색해 주세요!
            <span>이름으로만 검색할 수 있어요.</span>
          </S.EmptyCourseMessage>
        )}
      </S.SearchRuinsModalMain>
    </S.SearchRuinsModalContainer>
  );
};

export default SearchRuinsModal;
