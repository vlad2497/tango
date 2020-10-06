//Core
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@material-ui/core";
//UI
import { Carousel, PageProgress } from "../ui";
import Slide from "./Slide";
import Points from "./Points/Points";
//Store
import { useSelector } from "../../store/modules/rootReducer";
import { getStudentInfo } from "../../store/modules/studentInfo";

const carouselBreakpoints = {
  0: 1,
  786: 2,
  1530: 3,
};

const Tickets: React.FC = () => {
  const dispatch = useDispatch();
  const { list, points, loading } = useSelector((state) => state.studentInfo);

  useEffect(() => {
    dispatch(getStudentInfo());
  }, [dispatch]);

  if (loading) return <PageProgress height={160} />;
  if (!list || !list.length) return null;

  return (
    <>
      <Carousel
        slides={list}
        SlideComponent={Slide}
        breakpoints={carouselBreakpoints}
      />
      {points > 0 && (
        <Box mb="30px" mt="30px">
          <Points count={points} />
        </Box>
      )}
    </>
  );
};

export default Tickets;
