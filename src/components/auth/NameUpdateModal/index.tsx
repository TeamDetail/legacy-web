import LegacyButton from "@components/common/LegacyButton";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color"
import { LegacyTypography } from "@src/constants/font/fontToken";
import { useUpdateUserNameMutation } from "@src/queries/user/user.queries";
import useModalStore from "@src/store/useModalStore";
import useUserStore from "@src/store/useUserStore";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components"

const NameUpdateModal = () => {
  const updateUserNameMutation = useUpdateUserNameMutation()
  const { setCloseModal } = useModalStore()
  const {setUserData, userStoreData} = useUserStore()
  const [name, setName] = useState("");
  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const decideName = () => {
    updateUserNameMutation.mutate(
      { nickname: name },
      {
        onSuccess: () => {
          toast.success(
            <div>
              이름 설정 성공!
              <br />
              레거시에 온 것을 환영해요!
            </div>
          );
          setUserData({ ...userStoreData, nickname: name });
          setCloseModal();
        },
        onError: () =>
          toast.error(
            <div>
              이름 설정 실패!
              <br />
              다시 시도하거나, 문의를 남겨주세요!
            </div>
          ),
      }
    );
  }


  return (
    <NameUpdateModalContainer>
      <p>이름을 알려주세요!</p>
      <input
        type="text"
        autoComplete="off"
        placeholder="당신의 이름은?"
        value={name}
        onChange={handleName}
      />
      <LegacyButton
        size="default"
        isBold
        isFilled={false}
        color={LegacySementic.purple.normal}
        width="100%"
        handleClick={decideName}
      >
        <span>레거시 시작하기</span>
      </LegacyButton>
    </NameUpdateModalContainer>
  );
}

export default NameUpdateModal

const NameUpdateModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 280px;
  height: fit-content;
  padding: 20px;
  border-radius: 20px;
  background-color: ${LegacyPalette.backgroundNormal};
  > p {
    color: ${LegacyPalette.labelNormal};
    ${LegacyTypography.Pretendard.Heading1.Bold}
  }
  > input {
    outline: none;
    border: none;
    background-color: ${LegacyPalette.fillNormal};
    width: 240px;
    height: 40px;
    border-radius: 12px;
    padding: 12px;
    color: ${LegacyPalette.labelNormal};
  }
  > input::placeholder {
    color: ${LegacyPalette.labelAlternative};
  }

  span {
    color: ${LegacySementic.purple.normal};
    ${LegacyTypography.Pretendard.Caption2.Medium}
  }
`