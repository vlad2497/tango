//Core
import React from "react";
import { FormControl, OutlinedInput } from "@material-ui/core";
//Styles
import { useStyles } from "./styles";

interface IProps {
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<IProps> = ({ value, setValue, placeholder }) => {
  const classes = useStyles();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormControl className={classes.root} variant="outlined">
      <OutlinedInput
        value={value}
        onChange={changeHandler}
        name="login"
        placeholder={placeholder}
      />
    </FormControl>
  );
};

export default Input;
