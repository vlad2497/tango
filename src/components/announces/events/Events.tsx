//Core
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
//Custom
import { Carousel, PageProgress } from "../../ui";
import { useSelector } from "../../../store/modules/rootReducer";
import Slide from "./Slide";
import { getEventAnnounces } from "../../../store/modules/eventAnnounces";
import NotAnnounces from "./../notAnnounces/NotAnnounces";

const carouselBreakpoints = {
  0: 1,
  786: 3,
  1100: 4,
};

const Events: React.FC = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.eventAnnounces);

  useEffect(() => {
    dispatch(getEventAnnounces());
  }, [dispatch]);

  if (loading) return <PageProgress height={80} />;
  if (!list || !list.length)
    return <NotAnnounces text="Ближайших мероприятий нет" />;

  return (
    <Carousel
      slides={list}
      SlideComponent={Slide}
      breakpoints={carouselBreakpoints}
    />
  );
};

export default Events;
