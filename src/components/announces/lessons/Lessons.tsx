//Core
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
//Custom
import { Carousel, PageProgress } from "../../ui";
import { getLessonAnnounces } from "../../../store/modules/lessonAnnounces";
import { useSelector } from "../../../store/modules/rootReducer";
import Slide from "./Slide";
import NotAnnounces from "./../notAnnounces/NotAnnounces";

const carouselBreakpoints = {
  0: 1,
  786: 3,
  1100: 4,
};

const Lessons: React.FC = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.lessonAnnounces);

  useEffect(() => {
    dispatch(getLessonAnnounces());
  }, [dispatch]);

  if (loading) return <PageProgress height={80} />;
  if (!list || !list.length)
    return <NotAnnounces text="Ближайших уроков нет" />;

  return (
    <Carousel
      slides={list}
      SlideComponent={Slide}
      breakpoints={carouselBreakpoints}
    />
  );
};

export default Lessons;
