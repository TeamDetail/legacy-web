import Tag from "@components/common/Tag";
import * as S from "./style";
import { useState } from "react";
import LegacyButton from "@components/common/LegacyButton";
import { LegacySementic } from "@src/constants/color/color";
import SearchRuins from "./SearchRuins";
import { RuinDetail } from "@src/types/map/ruin.type";
import CourseElementList from "../CourseElementList";
import useCourse from "@src/hooks/course/useCourse";

const CreateCourse = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedRuins, setSelectedRuins] = useState<RuinDetail[]>([]);
  const [description, setDescription] = useState<string>("");
  const [name, setName] = useState<string>("");

  const { handleCourseSubmit } = useCourse();

  return (
    <S.CreateCourseContainer>
      <S.CreateCourseHeader>
        <S.CreateCourseBaseInfoForm>
          <S.CourseNameInput
            type="text"
            placeholder="코스 이름을 입력해주세요.."
            onChange={(e) => setName(e.target.value)}
          />
          <Tag data={tags} setData={setTags} disabled={false} />
        </S.CreateCourseBaseInfoForm>
        <LegacyButton
          size="big"
          isBold={true}
          isFilled={false}
          color={LegacySementic.green.normal}
          handleClick={() => handleCourseSubmit(tags, name, description, selectedRuins.map(ruin => ruin.ruinsId))}
        >
          <S.CreateCourseButtonText>제작 완료!</S.CreateCourseButtonText>
        </LegacyButton>
      </S.CreateCourseHeader>
      <S.DescriptionContainer>
        코스 설명
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="코스 설명은 입력해주세요.."
          wrap="virtual"
        />
      </S.DescriptionContainer>
      <S.CreateCourseBody>
        <SearchRuins
          selectedRuins={selectedRuins}
          setSelectedRuins={setSelectedRuins}
        />
        <S.SelectRuinsContainer>
          <S.SelectRuinsHeader>
            {selectedRuins.length}개 선택<span>(5 ~ 30개 가능)</span>
          </S.SelectRuinsHeader>
          <CourseElementList
            create={true}
            ruins={selectedRuins}
            clearRuins={selectedRuins}
            setRuins={setSelectedRuins}
          />
        </S.SelectRuinsContainer>
      </S.CreateCourseBody>
    </S.CreateCourseContainer>
  );
};

export default CreateCourse;
