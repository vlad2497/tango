import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .MuiDialog-paper": {
      borderRadius: 20,
    },
  },
  wrapper: {
    background: "#FFFFFF",
    boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.08)",
    padding: "32px 24px",
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: "23px",
    color: "#333253",
    marginBottom: 20,
  },
  text: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 17,
    lineHeight: "20px",
    color: "#333253",
    marginBottom: 30,
  },
}));
