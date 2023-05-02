import React, {FC} from 'react';
import styles from './RadioButton.module.scss'
import {IRadioButton} from "./RadioButton.types";

const RadioButton: FC<IRadioButton> = ({placeholder, register}) => {
  return (
    <div className={styles.radioWrapper}>
      <label className={styles.radio}>
        <input
          type="radio"
          value={placeholder}
          {...register}
        />
        <div className={styles.radioMark}/>
        <p className={styles.placeholder}>{placeholder}</p>
      </label>
    </div>
  )
}

export default RadioButton