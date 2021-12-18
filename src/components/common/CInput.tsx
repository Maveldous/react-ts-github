import React, { InputHTMLAttributes } from "react";

import styles from "../../assets/scss/components/input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string,
  onChange(event: React.ChangeEvent<HTMLInputElement>): void,
}

const CInput:React.FC<InputProps> = (props) => {
  return (
    <label className={styles['c-input']}>
      <input {...props} className={styles['c-input__field']}/>
    </label>
  )
}

export default CInput;