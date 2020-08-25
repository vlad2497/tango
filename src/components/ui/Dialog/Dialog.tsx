//Core
import React from "react";
import {
  Dialog as DailogUI,
  DialogContent,
  Grid,
  Box,
} from "@material-ui/core";
//Styles
import { useStyles } from "./styles";
import Button from "../Button";

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title?: string;
  text?: string;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  onClick: () => void;
}

const Dialog: React.FC<IProps> = ({
  title,
  text,
  open,
  setOpen,
  maxWidth = "xs",
  onClick,
}) => {
  const classes = useStyles();
  return (
    <DailogUI
      open={open}
      maxWidth={maxWidth}
      onClose={() => {
        setOpen(false);
      }}
    >
      <DialogContent className={classes.wrapper}>
        {title && <div className={classes.title}>{title}</div>}
        {text && <div className={classes.text}>{text}</div>}
        <Grid container justify="flex-end">
          <Button
            size="small"
            color="white"
            text="Нет"
            onClick={() => {
              setOpen(false);
            }}
          />
          <Box ml={1}>
            <Button size="small" color="blue" text="Да" onClick={onClick} />
          </Box>
        </Grid>
      </DialogContent>
    </DailogUI>
  );
};

export default Dialog;
