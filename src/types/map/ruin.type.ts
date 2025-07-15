export interface Ruin {
  ruinsId: number;
  latitude: number;
  longitude: number;
}

export interface RuinDetail {
  ruinsId: number;
  ruinsImage: string;
  category: string;
  name: string;
  chineseName: string;
  englishName: string;
  location: string;
  detailAddress: string;
  periodName: string;
  specifiedDate: string;
  owner: string;
  manager: string;
  latitude: number;
  longitude: number;
}

export interface RuinDetailType {
  ruinsId?: number;
  ruinsImage?: string;
  category?: string;
  name?: string;
  chineseName?: string;
  englishName?: string;
  location?: string;
  detailAddress?: string;
  periodName?: string;
  specifiedDate?: string;
  owner?: string;
  manager?: string;
  latitude: number;
  longitude: number;
  type: "normal" | "ruin";
}

export interface RuinQuizType {
  quizId: number;
  quizProblem: string;
  optionValue: string[];
}
