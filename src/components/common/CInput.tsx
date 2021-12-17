import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string,
  onChange(event: React.ChangeEvent<HTMLInputElement>): void,
}

const CInput:React.FC<InputProps> = (props) => {
  return <input {...props} />
}

export default CInput;