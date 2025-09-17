import LegacyButton from "@components/common/LegacyButton";
import * as S from "./style";
import { LegacyPalette } from "@src/constants/color/color";
// import { Dispatch, SetStateAction } from "react";
import useUserStore from "@src/store/useUserStore";
import { useState } from "react";
import { ChangeEvent } from "react";
// import { toast } from "react-toastify";
// import { usePatchUserDataMutation } from "@src/queries/user/user.queries";

// type ProfileFixProps = {
//   setIsProfileFixPage: Dispatch<SetStateAction<boolean>>;  
// };

const ProfileFix = (
  // { setIsProfileFixPage }: ProfileFixProps
) => {
  const { userStoreData } = useUserStore();
  // const [successData, setSuccessData] = useState({
  //   isLoading: false,
  //   code: 0,
  // });
  // const patchUserDataMutation = usePatchUserDataMutation();

  const [changedUserData, setChangedUserData] = useState({
    imageUrl: userStoreData.imageUrl,
    description: userStoreData.description,
  });

  const handleDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setChangedUserData(prev => ({...prev, description: e.target.value}))
  }

  const checkChanged = () => {
    if (changedUserData.description === userStoreData.description && changedUserData.imageUrl === userStoreData.imageUrl) {
      return false
    }
    return true
  }

  // const completeFix = () => {
  //   if (!checkChanged()) {
  //     toast.error("변경 데이터가 없습니다!");
  //   } else {
  //     setSuccessData(prev => ({...prev, isLoading: true}))
  //     patchUserDataMutation.mutate({description: changedUserData.description}, {
  //       onSuccess: () => {
  //         setSuccessData(prev => ({...prev, code: prev.code + 1}))
  //       }
  //     })
  //   }
  // }

  return (
    <S.ProfileFixContainer>
      <header>
        <p>프로필 수정</p>
        <LegacyButton
          size="default"
          isBold={checkChanged()}
          isFilled={false}
          color={LegacyPalette.primaryNormal}
          customStyle={{color: checkChanged() ? LegacyPalette.primaryNormal : LegacyPalette.labelDisabled}}
          width="fit-content"
          // handleClick={() => completeFix()}
        >
          저장하기
        </LegacyButton>
      </header>
      <S.ProfileFixItem>
        <p>프로필 이미지</p>
        <S.ProfileFixUserImg
          src={changedUserData.imageUrl}
          alt="profileImg"
        />
      </S.ProfileFixItem>
      <S.ProfileFixItem>
        <p>자기소개</p>
        <S.ProfileUserDescription
          name="description"
          value={changedUserData.description}
          onChange={(e) => handleDescription(e)}
        />
      </S.ProfileFixItem>
    </S.ProfileFixContainer>
  );
};

export default ProfileFix;
