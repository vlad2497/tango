//Core
import React, { useMemo, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Grid } from "@material-ui/core";
//Custom
import { useWindowSize } from "./../../../hooks/useWindowSize";
//Styles
import { useStyles } from "./styles";

const chunkArray = (arr: any, size: number) => {
  if (size === 1) {
    return [...arr.map((item: any) => [item])];
  }
  const result = arr.reduce((acc: any, _: any, i: number) => {
    return i % size ? acc : [...acc, arr.slice(i, i + size)];
  }, []);
  return result;
};

const getSize = (size: number): 2 | 3 | 4 | 6 | 12 => {
  switch (size) {
    case 1:
      return 12;
    case 2:
      return 6;
    case 3:
      return 4;
    case 4:
      return 3;
    case 6:
      return 2;
    default:
      return 12;
  }
};

interface IProps {
  slides: any;
  SlideComponent: any;
  breakpoints: any;
}

const CustomCarousel: React.FC<IProps> = ({
  slides,
  SlideComponent,
  breakpoints,
}) => {
  const classes = useStyles();
  const [width] = useWindowSize();
  const [key, setKey] = useState<number>(0);
  const [start, setStart] = useState<number>(0);

  const chunkedBanners = useMemo(() => {
    let result = chunkArray(slides, 1);
    for (let key in breakpoints) {
      if (width > +key) result = chunkArray(slides, breakpoints[key]);
    }
    return result;
  }, [breakpoints, slides, width]);

  const getGridSize = useMemo(() => {
    let result = getSize(1);
    for (let key in breakpoints) {
      if (width > +key) result = getSize(breakpoints[key]);
    }
    return result;
  }, [breakpoints, width]);

  return (
    <div key={key}>
      <Carousel
        fullHeightHover={false}
        className={classes.root}
        indicators={false}
        navButtonsAlwaysVisible
        autoPlay={false}
        startAt={start}
        onChange={(index: number, active: number) => {
          setKey((prev) => {
            setStart(index);
            return prev + 1;
          });
        }}
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
              <Grid
                item
                sm={getGridSize}
                key={Math.random()}
                className={classes.fullWidth}
              >
                <SlideComponent {...item} />
              </Grid>
            ))}
          </Grid>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
