import LegacyButton from "@components/common/LegacyButton";
import * as S from "./style";
import MailIcon from "@src/assets/mail.svg?react";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import useMail from "@src/hooks/mail/useMail";
import MailItem from "./mailItem";
import { ItemType, Mail } from "@src/types/inventory/inventory.type";
import { useState } from "react";
import MailsSkeleton from "@components/skeleton/MailsSkeleton";
import Close from "@src/assets/close.svg?react";
import mailApi from "@src/api/mail/mail.api";
import { toast } from "react-toastify";
import ReceiveItem from "./ReceiveItem";
import Item from "@components/common/Item";

const MailBox = ({ close }: { close: () => void }) => {
  const { mails, isMailsFetching } = useMail();

  const [selectMail, setSelectMail] = useState<Mail>();
  const [receiveItems, setReceiveItems] = useState<ItemType[]>([]);

  const handleReceiveReward = async () => {
    if (mails!.length !== 0) {
      try {
        const data = await mailApi.getAllReward();
        setReceiveItems(data);
      } catch {
        toast.error("보상 받기 실패!");
      }
    } else {
      toast.error("수령할 보상이 없습니다.");
    }
  };

  return (
    <S.MailBoxModalContainer>
      <S.MailBoxModalHeader>
        <div>
          <MailIcon width={36} height={36} />
          우편함
        </div>
        <Close onClick={close} style={{ cursor: "pointer" }} fill={LegacyPalette.labelNormal} />
      </S.MailBoxModalHeader>
      {receiveItems?.length === 0 ? (
        <S.MailBoxModalMain>
          <S.MailListWrapper>
            <S.MailListContainer>
              {mails?.length !== 0 ? (
                isMailsFetching ? (
                  <MailsSkeleton />
                ) : (
                  mails!.map((item, idx) => (
                    <MailItem
                      key={idx}
                      mailTitle={item.mailTitle}
                      sendAt={item.sendAt}
                      isSelected={selectMail === item}
                      onClick={() => {
                        setSelectMail(item);
                      }}
                    />
                  ))
                )
              ) : (
                <S.EmptyMailMessage>
                  아직 도착한 우편이 없어요!
                </S.EmptyMailMessage>
              )}
            </S.MailListContainer>
            <LegacyButton
              size="default"
              isBold
              isFilled={false}
              color={LegacySementic.yellow.netural}
              width="100%"
              children={<S.RecieveButtonText>일괄 수령</S.RecieveButtonText>}
              handleClick={handleReceiveReward}
            />
          </S.MailListWrapper>
          {selectMail ? (
            <S.MailContentContainer>
              <S.MailContentWrapper>
                {selectMail.mailTitle}
                <span>{selectMail.mailContent}</span>
              </S.MailContentWrapper>
              {selectMail.itemData.length !== 0 && (
                <S.MailRewardContainer>
                  구성품
                  <div>
                    {selectMail.itemData.map((item, idx) => (
                      <Item size="normal" itemType={item.itemType} key={idx}/>
                    ))}
                  </div>
                </S.MailRewardContainer>
              )}
            </S.MailContentContainer>
          ) : (
            <S.NoneSelectMailMessage>
              우편을 선택해주세요!
              <span>수령한 우편은 자동으로 삭제됩니다.</span>
            </S.NoneSelectMailMessage>
          )}
        </S.MailBoxModalMain>
      ) : (
        <ReceiveItem
          receiveItems={receiveItems!}
          setReceiveItems={setReceiveItems}
        />
      )}
    </S.MailBoxModalContainer>
  );
};

export default MailBox;
