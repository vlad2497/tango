import { makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    overflow: "visible",
    "& .MuiButtonBase-root[aria-label='Next']": {
      backgroundColor: "#7A79A5",
      opacity: 1,
      width: 21,
      height: 21,
      top: 50,
      right: -50,
      "& .MuiSvgIcon-root": {
        color: "#333253",
      },
    },
    "& .MuiButtonBase-root[aria-label='Previous']": {
      backgroundColor: "#7A79A5",
      opacity: 1,
      width: 21,
      height: 21,
      top: 50,
      left: -50,
      "& .MuiSvgIcon-root": {
        color: "#333253",
      },
    },
  },
  fullWidth: {
    width: "100%",
  },
}));
