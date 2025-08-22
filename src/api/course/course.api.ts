import customAxios from "@src/libs/axios/customAxios";
import { Course, CourseRuins } from "@src/types/course/course.type";

class CourseApi {
  public async getAllCourse(): Promise<Course[]> {
    const { data } = await customAxios.get("/course");
    return data.data;
  }
  public async getCourseRuinsbyId(id: number): Promise<CourseRuins> {
    const { data } = await customAxios.get(`/course/${id}`);
    return data.data;
  }
}

export default new CourseApi();
