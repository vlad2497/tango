import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";

export const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#1CA8F3",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1CA8F3",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#7A79A5",
    },
    "& .MuiInputBase-input": {
      color: "#7A79A5",
      fontFamily: "Roboto",
    },
  },
}));
