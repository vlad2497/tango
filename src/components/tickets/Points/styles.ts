import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  wrapper: {
    padding: 35,
    background: "linear-gradient(180deg, #6a6abe 0%, #45457c 100%)",
    borderRadius: 20,
  },
  label: {
    fontFamily: "Roboto",
    fontSize: 14,
    lineHeight: "16px",
    color: "white",
    marginBottom: 12,
  },
  value: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: 500,
    lineHeight: "20px",
    color: "white",
  },
}));
