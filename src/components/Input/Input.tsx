import React, { FC, useState } from 'react';
import styles from './input.module.scss';
import { IButtonProps } from './input.types';
import { EyeIcon } from '../../icons';
import classNames from 'classnames';

export const Input: FC<IButtonProps> = ({
  label,
  type = 'text',
  onChange,
  name,
  onFocus,
  isPasswordField,
  value,
  register,
  errorMessage = '',
  strongGradate,
}) => {
  const [inputType, setInputType] = useState<string | undefined>(type);

  const passwordVisibilityHandler = (): void => {
    inputType === 'password' ? setInputType('text') : setInputType('password');
  };

  const filledLine: { background: string; borderRadius: string } = {
    background: '#EEF1FE',
    borderRadius: '35px',
  };

  const inputStyle = errorMessage
    ? classNames(styles.input, styles.inputError)
    : styles.input;

  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        type={inputType}
        value={value}
        id={name}
        className={inputStyle}
        autoComplete={'off'}
        {...register}
        onChange={onChange}
        onFocus={onFocus}
      />
      {isPasswordField && (
        <div className={styles.iconWrapper} onClick={passwordVisibilityHandler}>
          <EyeIcon />
        </div>
      )}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      {isPasswordField && (
        <div className={styles.strongBox}>
          <div
            className={styles.strongItem}
            style={!strongGradate?.easy ? filledLine : {}}
          />
          <div
            className={styles.strongItem}
            style={!strongGradate?.medium ? filledLine : {}}
          />
          <div
            className={styles.strongItem}
            style={!strongGradate?.hard ? filledLine : {}}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
