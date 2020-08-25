//Core
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
//Custom
import { Carousel, PageProgress } from "../ui";
import Slide from "./Slide";
import { useSelector } from "../../store/modules/rootReducer";
import { getTicketsList } from "../../store/modules/tickets";

const carouselBreakpoints = {
  0: 1,
  786: 2,
  1530: 3,
};

const Tickets: React.FC = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(getTicketsList());
  }, [dispatch]);

  if (loading) return <PageProgress height={160} />;
  if (!list || !list.length) return null;

  return (
    <Carousel
      slides={list}
      SlideComponent={Slide}
      breakpoints={carouselBreakpoints}
    />
  );
};

export default Tickets;
