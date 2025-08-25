import { Select } from "@components/common/Select";
import * as S from "./style";
import SearchIcon from "@src/assets/search.svg?react";
import { useState, useMemo, useEffect } from "react";
import CourseItem from "../CourseItem";
import useCourse from "@src/hooks/course/useCourse";
import { Course } from "@src/types/course/course.type";

const CourseList = () => {
  const [clearSelect, setClearSelect] = useState("미완료");
  const [sortSelect, setSortSelect] = useState("최신");
  const [eventSelect, setEventSelect] = useState("전체");
  const [searchTerm, setSearchTerm] = useState("");

  const { courseData, isCourseDataLoading, getCourseData } = useCourse();

  const filterBySearch = (course: Course) =>
    course.courseName.toLowerCase().includes(searchTerm.toLowerCase());

  const filterByClear = (course: Course) => {
    if (clearSelect === "완료") return course.clear;
    if (clearSelect === "미완료") return !course.clear;
    return true;
  };

  const filterByEvent = (course: Course) => {
    if (eventSelect === "일반") return !course.eventId;
    if (eventSelect === "이벤트") return !!course.eventId;
    return true;
  };

  const sortCourses = (a: Course, b: Course) => {
    if (sortSelect === "최신") return b.courseId - a.courseId;
    if (sortSelect === "인기") return b.heartCount - a.heartCount;
    if (sortSelect === "클리어 수") return b.clearCount - a.clearCount;
    return 0;
  };

  const filteredAndSortedData = useMemo(() => {
    if (!courseData) return [];

    return courseData
      .filter(filterBySearch)
      .filter(filterByClear)
      .filter(filterByEvent)
      .sort(sortCourses);
  }, [courseData, clearSelect, sortSelect, eventSelect, searchTerm]);

  useEffect(() => {
    getCourseData();
  }, []);

  return (
    <S.CourseListContainer>
      <S.SearchContainer>
        <S.Search>
          <SearchIcon width={20} height={20} />
          <input
            placeholder="코스 이름으로 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </S.Search>
        <S.SelectContainer>
          <Select
            items={["전체", "미완료", "완료"]}
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

      {courseData === undefined && isCourseDataLoading ? (
        <></>
      ) : (
        <S.DataContainer>
          {filteredAndSortedData.map((item) => (
            <CourseItem
              key={item.courseId}
              courseId={item.courseId}
              thumbnailUrl={item.thumbnail}
              courseLength={item.maxRuinsCount}
              clearRuinsCount={item.clearRuinsCount}
              courseDetail={item.description}
              courseName={item.courseName}
              eventId={item.eventId}
              tags={item.tag}
              isHeart={item.heart}
              isClear={item.clear}
              heartCount={item.heartCount}
              clearCount={item.clearCount}
              size="small"
              creator={item.creator}
              disabled={false}
            />
          ))}
        </S.DataContainer>
      )}
    </S.CourseListContainer>
  );
};

export default CourseList;
