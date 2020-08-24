import { makeStyles, Theme } from "@material-ui/core/styles";

interface StyleProps {
  backgroundImage: string;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  wrapper: {
    backgroundImage: (props) => props.backgroundImage,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.08)",
    borderRadius: 20,
    padding: 24,
    position: "relative",
  },
  date: {
    fontFamily: "Roboto",
    fontSize: 14,
    lineHeight: "16px",
    color: "white",
    marginTop: 80,
    marginBottom: 11,
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 17,
    lineHeight: "20px",
    fontWeight: 500,
    color: "white",
    height: 60,
    marginBottom: 10,
  },
  address: {
    fontFamily: "Roboto",
    fontSize: 14,
    lineHeight: "16px",
    color: "white",
    paddingLeft: 9,
  },
}));
