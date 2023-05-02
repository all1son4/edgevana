import React, {FC} from "react";
import styles from "./RoundButton.module.scss"
import {IRoundButtonProps} from "./RoundButton.types";
import {ChevronRightIcon} from "../../icons";

export const RoundButton: FC<IRoundButtonProps> = ({direction = 'right', type = 'button', onClick, disabled= false}) => {

  const chevronDirection = direction !== 'right' ? styles.leftSide : styles.rightSide;

  const buttonStyle = !disabled ? styles.button : [styles.button, styles.buttonDisabled].join(' ');

  return (
    <button
      type={type}
      className={buttonStyle}
      onClick={onClick}
    >
      <div className={chevronDirection}>
        <ChevronRightIcon stroke={disabled ? '#4B516A' : '#2B3E9B'}/>
      </div>
    </button>
  )
}

export default RoundButton