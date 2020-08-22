import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: 24,
    background: "#37365b",
    borderRadius: 20,
  },
  title: {
    //fontFamily: Roboto,
    fontWeight: 500,
    fontSize: 18,
    lineHeight: "21px",
    color: "white",
    marginBottom: 24,
  },
  info: {
    //fontFamily: Roboto,
    fontSize: 14,
    lineHeight: "16px",
    color: "#7A79A5",
    marginTop: 24,
  },
  img: {
    maxWidth: 152,
  },
}));
