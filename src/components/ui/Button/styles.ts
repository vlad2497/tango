import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";

export interface StyleProps {
  color: "blue" | "dark" | "white";
  size: "small" | "medium";
}

const getSize = (size: string) => {
  switch (size) {
    case "small":
      return {
        width: 94,
        height: 36,
        lineHeight: "36px",
      };
    case "medium":
      return {
        width: 140,
        height: 52,
        lineHeight: "52px",
      };
    default:
      return {};
  }
};

const getColors = (color: string) => {
  switch (color) {
    case "blue":
      return {
        color: "white",
        backgroundColor: "#1CA8F3",
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#37B9FF",
        },
      };
    case "dark":
      return {
        color: "#7A79A5",
        backgroundColor: "#333253",
        border: "1px solid #7A79A5",
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#1CA8F3",
          color: "white",
        },
      };
    case "white":
      return {
        color: "#1CA8F3",
        backgroundColor: "transparent",
        "&:hover": {
          cursor: "pointer",
          color: "#37B9FF",
        },
      };
    default:
      return {};
  }
};

export const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: (props) => ({
    fontFamily: "Roboto",
    borderRadius: 16,
    textAlign: "center",
    border: "none",
    ...getColors(props.color),
    ...getSize(props.size),
  }),
}));
