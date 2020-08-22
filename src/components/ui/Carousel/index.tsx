//Core
import React, { useMemo } from "react";
import Carousel from "react-material-ui-carousel";
import { Grid } from "@material-ui/core";
//Custom
import { useWindowSize } from "./../../../hooks/useWindowSize";
//Styles
import { useStyles } from "./styles";

const chunkArray = (arr: any, size: number) =>
  arr.reduce(
    (acc: any, _: any, i: number) =>
      i % size ? acc : [...acc, arr.slice(i, i + size)],
    []
  );

interface IProps {
  slides: any;
  getSlide: any;
}

const CustomCarousel: React.FC<IProps> = ({ slides, getSlide }) => {
  const classes = useStyles();
  const [width] = useWindowSize();

  const chunkedBanners = useMemo(() => {
    return width < 786
      ? chunkArray(slides, 1)
      : width < 1530
      ? chunkArray(slides, 2)
      : chunkArray(slides, 3);
  }, [slides, width]);

  const gridValue = useMemo(() => {
    return width < 786 ? 12 : width < 1530 ? 6 : 4;
  }, [width]);

  return (
    <Carousel
      fullHeightHover={false}
      className={classes.root}
      indicators={false}
      navButtonsAlwaysVisible
      autoPlay={false}
    >
      {chunkedBanners.map((slide: any) => (
        <Grid
          spacing={3}
          direction="row"
          justify="center"
          alignItems="center"
          container
          key={Math.random()}
        >
          {slide.map((item: any) => (
            <Grid item sm={gridValue} key={Math.random()}>
              {getSlide(item)}
            </Grid>
          ))}
        </Grid>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
