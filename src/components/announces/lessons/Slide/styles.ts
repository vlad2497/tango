import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    background: "linear-gradient(180deg, #8A51F9 0%, #6139B2 100%)",
    boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.08)",
    borderRadius: 20,
    padding: 24,
  },
  date: {
    fontFamily: "Roboto",
    fontSize: 14,
    lineHeight: "16px",
    color: "white",
    marginBottom: 11,
  },
  time: {
    fontFamily: "Roboto",
    fontSize: 14,
    lineHeight: "16px",
    fontWeight: 500,
    color: "white",
    background: "#FF329D",
    borderRadius: 6,
    textAlign: "center",
    marginBottom: 16,
    width: 83,
    padding: 4,
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 17,
    lineHeight: "20px",
    fontWeight: 500,
    color: "white",
    height: 80,
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
