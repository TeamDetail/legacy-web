import TitlePickerItem from "@components/profile/Titles/TitlePickerItem";
import { useGetMyTitles } from "@src/queries/user/user.queries"
import useUserStore from "@src/store/useUserStore";
import { useState } from "react";
import styled from "styled-components"

const Titles = () => {
  const { data } = useGetMyTitles();
  const { userStoreData } = useUserStore();
  const [selectedId, setSelectedId] = useState(0);
  const selectedTitleData = data.find(
    (item) => userStoreData.title.titleId === item.titleId
  );
  return (
    <TitlesContainer>
      {selectedTitleData && (
        <TitlePickerItem
          titleData={selectedTitleData}
          isEquiped
          isSelected={selectedTitleData.titleId === selectedId}
          setSelect={() =>
            setSelectedId(
              selectedId === selectedTitleData.titleId
                ? 0
                : selectedTitleData.titleId
            )
          }
        />
      )}
      {data
      .filter(item => item.titleId !== selectedTitleData?.titleId)
      .map((item) => (
        <TitlePickerItem
          key={item.titleId}
          titleData={item}
          isEquiped={userStoreData.title.titleId === item.titleId}
          isSelected={item.titleId === selectedId}
          setSelect={() =>
            setSelectedId(selectedId === item.titleId ? 0 : item.titleId)
          }
        />
      ))}
    </TitlesContainer>
  );
}

export default Titles

const TitlesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  @media (max-width: 1040px) {
    display: flex;
    flex-direction: column;
  }
  gap: 16px;
  width: 100%;
  overflow-y: scroll;
  overflow: visible;
`