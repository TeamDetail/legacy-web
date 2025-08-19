import { Select } from "@components/common/Select";
import * as S from "./style";
import SearchIcon from "@src/assets/search.svg?react";
import { useState } from "react";
import { courseDummy } from "@src/constants/dummy/course.dummy";
import CourseItem from "./CourseItem";

const CourseList = () => {
  const [clearSelect, setClearSelect] = useState("미완료");
  const [sortSelect, setSortSelect] = useState("최신");
  const [eventSelect, setEventSelect] = useState("전체");

  return (
    <S.CourseListContainer>
      <S.SearchContainer>
        <S.Search>
          <SearchIcon width={20} height={20} />
          <input placeholder="코스 이름으로 검색..." />
        </S.Search>
        <S.SelectContainer>
          <Select
            items={["미완료", "완료", "전체"]}
            value={clearSelect}
            onSelectedItemChange={(type: string) => setClearSelect(type)}
          />
          <S.SelectWrapper>
            <Select
              items={["최신", "인기", "클리어 수"]}
              value={sortSelect}
              onSelectedItemChange={(type: string) => setSortSelect(type)}
            />
            <Select
              items={["전체", "일반", "이벤트"]}
              value={eventSelect}
              onSelectedItemChange={(type: string) => setEventSelect(type)}
            />
          </S.SelectWrapper>
        </S.SelectContainer>
      </S.SearchContainer>
      <S.DataContainer>
        {courseDummy.map((item) => (
          <CourseItem
            key={item.courseId}
            thumbnailUrl={item.thumbnail}
            courseLength={item.maxRuinsCount}
            clearRuinsCount={item.clearRuinsCount}
            courseDetail={item.description}
            courseName={item.name}
            eventId={null}
            tags={item.tag}
          />
        ))}
      </S.DataContainer>
    </S.CourseListContainer>
  );
};

export default CourseList;
