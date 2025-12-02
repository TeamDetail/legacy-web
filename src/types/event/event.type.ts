export interface Event {
  eventId: number;
  title: string;
  shortDescription: string;
}

export interface EventDetail {
  title: string;
  shortDescription: string;
  description: string;
  startAt: string;
  endAt: string;
}
