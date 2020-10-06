//Core
import React from "react";
import { Dialog as DailogUI, DialogContent, Grid } from "@material-ui/core";
import Linkify from "react-linkify";
//Styles
import { useStyles } from "./styles";
import Button from "../Button";

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title?: string;
  text?: string;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
}

const DialogInfo: React.FC<IProps> = ({
  title,
  text,
  open,
  setOpen,
  maxWidth = "xs",
}) => {
  const classes = useStyles();
  return (
    <DailogUI
      open={open}
      maxWidth={maxWidth}
      onClose={() => {
        setOpen(false);
      }}
      className={classes.root}
    >
      <DialogContent className={classes.wrapper}>
        {title && <div className={classes.title}>{title}</div>}
        {text && (
          <div className={classes.text}>
            <Linkify>{text}</Linkify>
          </div>
        )}
        <Grid container justify="center">
          <Button
            size="small"
            color="blue"
            text="Закрыть"
            onClick={() => setOpen(false)}
          />
        </Grid>
      </DialogContent>
    </DailogUI>
  );
};

export default DialogInfo;
