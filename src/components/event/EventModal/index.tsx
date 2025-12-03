import * as S from "./style";
import EventIcon from "@src/assets/star.svg?react";
import { LegacyPalette } from "@src/constants/color/color";
import Close from "@src/assets/close.svg?react";
import { useEvent } from "@src/hooks/event/useEvent";
import EventItem from "./EventItem";

const EventModal = ({ close }: { close: () => void }) => {
  const {
    events,
    eventDetail,
    handleClickEvent,
    selectedEvent,
    isEventsFetching,
  } = useEvent();
  return (
    <S.EventModalContainer>
      <S.EventModalHeader>
        <div>
          <EventIcon width={36} height={36} />
          우편함
        </div>
        <Close
          onClick={close}
          style={{ cursor: "pointer" }}
          fill={LegacyPalette.labelNormal}
        />
      </S.EventModalHeader>
      <S.EventModalMain>
        <S.EventListWrapper>
          <S.EventListContainer>
            {events?.length !== 0 ? (
              !isEventsFetching &&
              events!.map((item, idx) => (
                <EventItem
                  key={idx}
                  eventTitle={item.title}
                  eventSubText={item.shortDescription}
                  isSelected={selectedEvent === item.eventId}
                  onClick={() => {
                    handleClickEvent(item.eventId);
                  }}
                />
              ))
            ) : (
              <S.EmptyEventMessage>
                아직 진행중인 이벤트가 없어요!
              </S.EmptyEventMessage>
            )}
          </S.EventListContainer>
        </S.EventListWrapper>
        {eventDetail && (
          <S.EventContentContainer>
            <S.EventContentWrapper>
              {eventDetail.title}
              <span>
                {eventDetail.startAt} ~ {eventDetail.endAt}
              </span>
            </S.EventContentWrapper>
            {eventDetail.description}
          </S.EventContentContainer>
        )}
      </S.EventModalMain>
    </S.EventModalContainer>
  );
};

export default EventModal;
