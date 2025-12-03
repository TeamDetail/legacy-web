import customAxios from "@src/libs/axios/customAxios";
import { Event, EventDetail } from "@src/types/event/event.type";

class EventApi {
  public async getEvent(): Promise<Event[]> {
    const { data } = await customAxios.get("/events");
    return data.data;
  }

  public async getEventDetail(id: number): Promise<EventDetail> {
    const { data } = await customAxios.get(`/events/${id}`);
    return data.data;
  }
}

export default new EventApi();
