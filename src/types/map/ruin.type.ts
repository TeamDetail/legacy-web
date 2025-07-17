import { Card } from "../card/card.type";

export interface Ruin {
  ruinsId: number;
  latitude: number;
  longitude: number;
}

export interface RuinDetail {
  ruinsId: 0;
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
  latitude: 0;
  longitude: 0;
  cards: Card[];
}

export interface RuinQuizType {
  quizId: number;
  quizProblem: string;
  optionValue: string[];
}

export interface QuizAnswerType {
  quizId: number | null;
  answerOption: string;
}

export interface QuizAnswerResultType {
  blockGiven: boolean;
  results: [
    {
      quizId: number;
      isCorrect: boolean;
    }
  ];
}
