import {
  useGetEventDetailQuery,
  useGetEventQuery,
} from "@src/queries/event/event.query";
import { useState } from "react";

export const useEvent = () => {
  const [selectedEvent, setSelectedEvent] = useState<number>();

  const { data: events, isLoading: isEventsFetching } = useGetEventQuery();
  const { data: eventDetail } = useGetEventDetailQuery(selectedEvent!, {});
  const handleClickEvent = (id: number) => {
    setSelectedEvent(id);
  };

  return { events, eventDetail, handleClickEvent, isEventsFetching, selectedEvent };
};
