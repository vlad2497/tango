import { makeStyles, Theme } from "@material-ui/core/styles";

export interface StyleProps {
  color: string;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  wrapper: {
    padding: 35,
    background: (props) => props.color,
    borderRadius: 20,
    position: "relative",
  },
  upDot: {
    backgroundColor: "#333253",
    position: "absolute",
    top: -12,
    left: "60%",
    width: 25,
    height: 25,
    borderRadius: "50%",
  },
  downDot: {
    backgroundColor: "#333253",
    position: "absolute",
    bottom: -12,
    left: "60%",
    width: 25,
    height: 25,
    borderRadius: "50%",
  },
  title: {
    //fontFamily: Roboto,
    fontWeight: 500,
    fontSize: 20,
    lineHeight: "23px",
    color: "white",
    marginBottom: 21,
  },
  info: {
    //fontFamily: Roboto,
    fontSize: 14,
    lineHeight: "16px",
    color: "white",
    marginBottom: 12,
  },
  date: {
    //fontFamily: Roboto,
    fontSize: 17,
    fontWeight: 500,
    lineHeight: "20px",
    color: "white",
  },
  lessonsLeft: {
    //fontFamily: Roboto,
    fontSize: 48,
    fontWeight: "bold",
    lineHeight: "56px",
    color: "white",
  },
  lessonsCount: {
    //fontFamily: Roboto,
    fontSize: 40,
    fontWeight: "bold",
    lineHeight: "47px",
    color: "white",
    opacity: 0.5,
  },
}));
