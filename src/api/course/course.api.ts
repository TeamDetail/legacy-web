import customAxios from "@src/libs/axios/customAxios";
import { Course } from "@src/types/course/course.type";

class CourseApi {
  public async getAllCourse(): Promise<Course[]> {
    const { data } = await customAxios.get("/course/popular");
    return data.data;
  }
}

export default new CourseApi();
