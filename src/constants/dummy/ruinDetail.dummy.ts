import { RuinDetail } from "@src/types/map/ruin.type";

interface RuinDetailDummy extends RuinDetail {
  review: ReviewType[];
  rating: number;
  ratingCount: number;
  detail: string;
  explorerCount: number;
  explorerRatio: number;
}

interface ReviewType {
  reviewId: number;
  profileImg: string;
  username: string;
  creationDate: string;
  content: string;
  rating: number;
}
