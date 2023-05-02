import React, {FC} from "react";
import styles from "./SearchFiled.module.scss"
import {IButtonProps} from "./SearchField.types";
import {MagniIcon} from "../../icons";

export const SearchField: FC<IButtonProps> = ({onChange, name}) => {

  return (
    <div className={styles.searchFieldWrapper}>
      <input
        className={styles.input}
        type={'text'}
        placeholder={'Search'}
        onChange={onChange}
        name={name}
      />
      <div className={styles.iconWrapper}>
        <MagniIcon />
      </div>
    </div>
  )
}

export default SearchField