import LegacyButton from "@components/common/LegacyButton";
import * as S from "./style";
import { LegacyPalette } from "@src/constants/color/color";
import useUserStore from "@src/store/useUserStore";
import { useEffect, useRef, useState } from "react";
import { ChangeEvent } from "react";
import { toast } from "react-toastify";
import { usePatchUserDataMutation } from "@src/queries/user/user.queries";
import useChangeImage from "@src/hooks/user/useChangeImage";

const ProfileFix = () => {
  const { userStoreData, setUserData } = useUserStore();
  const { preview, handleFileChange, handleSave } = useChangeImage();

  const [changedUserData, setChangedUserData] = useState({
    imageUrl: userStoreData.imageUrl,
    description: userStoreData.description,
  });

  const patchUserDataMutation = usePatchUserDataMutation();
  
  // 자기소개 변경
  const handleDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setChangedUserData(prev => ({...prev, description: e.target.value}))
  }
  useEffect(() => {
    if ( userStoreData ) {
      setChangedUserData({
        imageUrl: userStoreData.imageUrl,
        description: userStoreData.description
      })
    }
  }, [userStoreData])

  // 변경사항 확인
  const checkIsChanged = () => ((preview && preview !== userStoreData.imageUrl) || changedUserData.description.trim() !== userStoreData.description.trim());

  const completeFix = async () => {
    if (!checkIsChanged()) {
      toast.error("변경 데이터가 없습니다!");
    } else {
      try {
        const promises: Promise<boolean>[] = [];
        // 이미지 저장
        if (preview) {
          promises.push(handleSave());
        }
        // 자기소개 변경
        if (changedUserData.description.trim() !== userStoreData.description) {
          promises.push(
            new Promise((resolve, reject) => {
              patchUserDataMutation.mutate(
                { description: changedUserData.description.trim() },
                {
                  onSuccess: () => {
                    toast.success("자기소개 변경 성공!");
                    resolve(true);
                  },
                  onError: () => {
                    reject("변경 실패!");
                  },
                }
              );
            })
          );
        }
        await Promise.all(promises);
        setUserData({
          ...userStoreData,
          description: changedUserData.description.trim(),
          imageUrl: preview as string ?? changedUserData.imageUrl
        });
      } catch (error) {
        toast.error(error as string);
      }
    }
  }

  const fileRef = useRef<HTMLInputElement>(null);
  // input click method
  const handleClick = () => {
    fileRef?.current?.click();
  };

  return (
    <S.ProfileFixContainer>
      <header>
        <p>프로필 수정</p>
        <LegacyButton
          size="default"
          isBold={checkIsChanged()}
          isFilled={false}
          color={LegacyPalette.primaryNormal}
          customStyle={{
            color: checkIsChanged()
              ? LegacyPalette.primaryNormal
              : LegacyPalette.labelDisabled,
          }}
          width="fit-content"
          handleClick={() => completeFix()}
        >
          저장하기
        </LegacyButton>
      </header>
      <S.ProfileFixItem>
        <p>프로필 이미지</p>
        <S.ProfileFixUserImg
          $img={(preview as string) ?? userStoreData.imageUrl}
          onClick={handleClick}
        />
        <input
          ref={fileRef}
          onChange={handleFileChange}
          type="file"
          accept="image/png, image/jpeg, image/webp"
          // accept="image/*"
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
