import React, {FC} from "react";
import styles from "./button.module.scss"
import {IButtonProps} from "./button.types";

export const Button: FC<IButtonProps> = ({buttonText, type = 'button', onClick, variant = 'primary'}) => {

  const buttonStyleType = () => {
    switch(variant) {
      case 'primary': {
        return styles.button
      }
      case 'cancel': {
        return [styles.button, styles.cancelType].join(' ')
      }
      default: return styles.button
    }
  }

  return (
    <button
      type={type}
      className={buttonStyleType()}
      onClick={onClick}
    >
      {buttonText}
    </button>
  )
}

export default Button