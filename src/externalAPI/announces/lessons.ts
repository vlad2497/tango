//Core
import axios from "axios";
//Custom
import { serverHost } from "../index";
import { ILessonAnnounce } from "./../../interfaces/ILessonAnnounce";

interface ILessonAnnounceResponse {
  data: {
    data: ILessonAnnounce[];
  };
}

export const getLessons = async () => {
  const response: ILessonAnnounceResponse = await await axios.get(
    `${serverHost}/api/student/lessonAnnounces`,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response.data.data;
};
