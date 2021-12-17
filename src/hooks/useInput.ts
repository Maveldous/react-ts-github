import React, { useState } from "react";

export interface InputInfo {
  bind: {
    value: string,
    onChange(event: React.ChangeEvent<HTMLInputElement>): void,
  },
  value: string,
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
}

export const useInput = (inputValue:string):InputInfo => {
  const [value, setInputValue] = useState(inputValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {setInputValue(event.target.value);}

  return {
    bind: {
      value,
      onChange
    },
    value,
    setInputValue,
  }
}