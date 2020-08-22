import { makeStyles, Theme } from "@material-ui/core/styles";

export interface StyleProps {
  height: number;
}

export const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: {
    width: "100%",
    height: (props) => props.height,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  spinner: {
    color: "#FF329D",
  },
}));
