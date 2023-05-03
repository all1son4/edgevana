import React, { FC } from 'react';
import { IAccountTypeCardProps } from './accountTypeCard.types';
import styles from './accountTypeCard.module.scss';
import classNames from 'classnames';

export const AccountTypeCard: FC<IAccountTypeCardProps> = ({
  title,
  icon,
  text,
  activeState,
  onClick,
}) => {
  const cardStyle = activeState
    ? classNames(styles.cardActive, styles.card)
    : styles.card;

  return (
    <div className={cardStyle} onClick={onClick}>
      <div className={styles.iconContainer}>{icon}</div>
      <div className={styles.typography}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardText}>{text}</p>
      </div>
    </div>
  );
};

export default AccountTypeCard;
