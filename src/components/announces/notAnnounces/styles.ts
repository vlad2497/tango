import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  noEventsWrapper: {
    background: "#37365b",
    borderRadius: 20,
    paddingTop: 60,
    paddingBottom: 60,
  },
  noEventsText: {
    fontFamily: "Roboto",
    fontSize: 17,
    lineHeight: "20px",
    color: "#7877a3",
    marginTop: 30,
  },
}));
