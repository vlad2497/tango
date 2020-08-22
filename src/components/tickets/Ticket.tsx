//Core
import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
//Custom
import { Carousel, PageProgress } from "../ui";
import Slide from "./Slide";
import { useSelector } from "../../store/modules/rootReducer";
import { getTicketsList } from "../../store/modules/tickets";

const Tickets: React.FC = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(getTicketsList("32"));
  }, [dispatch]);

  const getSlide = useCallback((slide) => {
    return <Slide {...slide} />;
  }, []);

  if (loading) return <PageProgress height={160} />;
  if (!list) return null;

  return <Carousel slides={list} getSlide={getSlide} />;
};

export default Tickets;
