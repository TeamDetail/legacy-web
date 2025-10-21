import LegacyButton from "@components/common/LegacyButton";
import Title from "@components/common/Title";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import { LegacyTypography } from "@src/constants/font/fontToken";
import { usePatchMyTitle } from "@src/queries/user/user.queries";
import useUserStore from "@src/store/useUserStore";
import { TitleType } from "@src/types/user/user.type"
import { toast } from "react-toastify";
import styled from "styled-components"

type TitlePickerItemProps = {
  titleData: TitleType;
  isSelected: boolean;
  isEquiped: boolean;
  setSelect: () => void;
}

const TitlePickerItem = ({ titleData, isEquiped, isSelected, setSelect }: TitlePickerItemProps) => {
  const patchTitleMutation = usePatchMyTitle()
  const { setUserData, userStoreData } = useUserStore();
  return (
    <TitlePickerContainer
      $isEquiped={isEquiped.toString()}
      $isSelected={isSelected.toString()}
      onClick={setSelect}
    >
      <main>
        <Title name={titleData.name} styleId={titleData.styleId}/>
      </main>
      <section>
        <p>{titleData.name + (isEquiped ? " ( 장착 중 )" : "")}</p>
        <span>{titleData.content}</span>
      </section>
      {isSelected && (
        <LegacyButton
          size="default"
          isBold
          isFilled={false}
          width="100%"
          color={isEquiped ? LegacyPalette.lineNormal : LegacyPalette.primaryNormal}
          handleClick={() => {
            if (!isEquiped) {
              patchTitleMutation.mutate(titleData.titleId, {
                onSuccess: () => {
                  setUserData({...userStoreData, title: titleData})
                  toast.success("칭호 변경 성공!")
                },
                onError: () => {
                  toast.error("칭호 변경 실패! 다시 시도해주세요.")
                }
              })
            }
          }}
        >
          {isEquiped ? "장착 중" : "장착"}
        </LegacyButton>
      )}
    </TitlePickerContainer>
  )
}

export default TitlePickerItem

const TitlePickerContainer = styled.div<{
  $isEquiped: string;
  $isSelected: string;
}>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${({ $isSelected }) =>
    $isSelected === "true" && LegacyPalette.backgroundNeutral};
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
  > main {
    display: flex;
    padding: 8px;
    border-radius: 12px;
    background-color: ${LegacyPalette.fillNormal};
  }
  > section {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 0 12px;
    > p {
      ${LegacyTypography.Pretendard.Body2.Bold}
      color: ${({ $isEquiped }) =>
        $isEquiped === "true"
          ? LegacyPalette.primaryNormal
          : LegacyPalette.labelNormal};
    }
    > span {
      ${LegacyTypography.Pretendard.Caption1.Medium}
      color: ${LegacyPalette.labelAlternative};
      margin-bottom: ${({ $isSelected }) => $isSelected === "false" && "12px"};
    }
  }
  > div {
    color: ${({ $isEquiped }) =>
      $isEquiped === "true"
        ? LegacyPalette.lineNormal
        : LegacySementic.purple.netural};
  }
`;