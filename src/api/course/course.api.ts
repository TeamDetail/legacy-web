import customAxios from "@src/libs/axios/customAxios";
import { Course, CourseDetail } from "@src/types/course/course.type";

class CourseApi {
  public async getAllCourse(): Promise<Course[]> {
    const { data } = await customAxios.get("/course");
    return data.data;
  }
  public async getCourseDetailbyId(id: number): Promise<CourseDetail> {
    const { data } = await customAxios.get(`/course/${id}`);
    return data.data;
  }
  public async createCourse(
    tag: string[],
    name: string,
    description: string,
    ruinsId: number[]
  ) {
    const { data } = await customAxios.post("/course", {
      name,
      description,
      ruinsId,
      tag,
    });
    return data.data;
  }
}

export default new CourseApi();
