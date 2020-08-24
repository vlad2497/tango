import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 20,
    lineHeight: "23px",
    marginTop: 35,
    color: "white",
    marginBottom: 20,
  },
  footer: {
    height: 60,
  },
}));
