//Core
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
//Custom
import { Carousel, PageProgress } from "../../ui";
import { getLessonAnnounces } from "../../../store/modules/lessonAnnounces";
import { useSelector } from "../../../store/modules/rootReducer";
import useFormatDate from "./hooks/useFormatDate";
import Slide from "./Slide";

const carouselBreakpoints = {
  0: 1,
  786: 3,
  1100: 4,
};

const Lessons: React.FC = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.lessonAnnounces);
  const { formatedList } = useFormatDate(list);

  useEffect(() => {
    dispatch(getLessonAnnounces());
  }, [dispatch]);

  if (loading) return <PageProgress height={80} />;

  return (
    <Carousel
      slides={formatedList}
      SlideComponent={Slide}
      breakpoints={carouselBreakpoints}
    />
  );
};

export default Lessons;
