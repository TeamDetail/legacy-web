import LegacyButton from "@components/common/LegacyButton";
import * as S from "./style";
import MailIcon from "@src/assets/mail.svg?react";
import { LegacySementic } from "@src/constants/color/color";
import useMail from "@src/hooks/mail/useMail";
import MailItem from "./mailItem";
import { Mail } from "@src/types/inventory/inventory.type";
import { useState } from "react";
import MailsSkeleton from "@components/skeleton/MailsSkeleton";
import Close from "@src/assets/close.svg?react";

const MailBox = ({ close }: { close: () => void }) => {
  const { mails, isMailsFetching } = useMail();

  const [selectMail, setSelectMail] = useState<Mail>();

  return (
    <S.MailBoxModalContainer>
      <S.MailBoxModalHeader>
        <div>
          <MailIcon width={36} height={36} />
          우편함
        </div>
        <Close onClick={close} style={{ cursor: "pointer" }} />
      </S.MailBoxModalHeader>
      <S.MailBoxModalMain>
        <S.MailListWrapper>
          <S.MailListContainer>
            {mails?.length !== 0 ? (
              isMailsFetching ? (
                <MailsSkeleton />
              ) : (
                mails!.map((item) => (
                  <MailItem
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
                    <img
                      key={idx}
                      src="https://i.namu.wiki/i/GvVcesfJVnFMKclMa_8360-2xqRXd9vnS4xSxqNYv0YI-gKjrTycw5ufrTHGBZ00BqbFNIZy-rUaUaepu3WLmw.webp"
                      alt="itemImg"
                    />
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
    </S.MailBoxModalContainer>
  );
};

export default MailBox;
