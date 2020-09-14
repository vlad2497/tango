//Core
import React from "react";
import { FormControl, OutlinedInput } from "@material-ui/core";
//Styles
import { useStyles } from "./styles";

interface IProps {
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type?: string;
}

const Input: React.FC<IProps> = ({ value, setValue, placeholder, type }) => {
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
        type={type}
      />
    </FormControl>
  );
};

export default Input;
