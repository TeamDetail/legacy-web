import customAxios from "@src/libs/axios/customAxios";
import {
  QuizAnswerResultType,
  QuizAnswerType,
  RuinQuizType,
} from "@src/types/map/ruin.type";

class QuizApi {
  public async getRuinQuiz(
    id: number | null
  ): Promise<RuinQuizType[] | undefined> {
    if (id) {
      const { data } = await customAxios.get(`/quiz/web/${id}`);
      return data.data;
    }
    return undefined;
  }

  public async checkRuinQuizAnswer(
    answer: QuizAnswerType[]
  ): Promise<QuizAnswerResultType> {
    const { data } = await customAxios.post(`/quiz/check`, answer);
    return data.data;
  }

  public async getRuinQuizHint(
    id: number
  ): Promise<string> {
    const { data } = await customAxios.get(`quiz/hint/${id}`);
    return data.data;
  }
}

export default new QuizApi();
