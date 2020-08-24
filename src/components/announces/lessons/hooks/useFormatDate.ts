//Core
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
//Custom
import { ILessonAnnounce } from "./../../../../interfaces/ILessonAnnounce";
import { IFormattedLessonAnnounce } from "./../interfaces/IFormattedLessonAnnounce";

const getTime = (start: string, finish: string): string => {
  const startArray: string[] = start.split(" ");
  const finishArray: string[] = finish.split(" ");
  const result: string = `${startArray[1].substring(
    0,
    5
  )} - ${finishArray[1].substring(0, 5)}`;
  return result;
};

const getDate = (date: string): string => {
  const dateString: string = format(new Date(date), "dd.MM");
  const weekDay: string = format(new Date(date), "EEEE", { locale: ru });
  return `${weekDay.charAt(0).toUpperCase()}${weekDay.substring(
    1
  )} ${dateString}`;
};

const useFormatDate = (list: ILessonAnnounce[] | null) => {
  const [formatedList, setFormatedList] = useState<
    IFormattedLessonAnnounce[] | []
  >([]);

  useEffect(() => {
    if (list && list.length) {
      const formattedList: IFormattedLessonAnnounce[] = [
        ...list.map((item) => {
          const newItem: IFormattedLessonAnnounce = {
            name: item.name,
            address: item.address,
            time: getTime(item.start_date, item.end_date),
            date: getDate(item.start_date),
          };
          return newItem;
        }),
      ];
      setFormatedList(formattedList);
    }
  }, [list]);

  return { formatedList };
};

export default useFormatDate;
