import React, { FC, ReactNode } from 'react';
import styles from './QuestionsProgress.module.scss';
import { IQuestionsProgressProps } from './QuestionsProgress.types';
import classNames from 'classnames';

export const QuestionsProgress: FC<IQuestionsProgressProps> = ({
  totalAmount,
  currentStep,
}) => {
  const progressItem = (i: number): ReactNode => {
    return (
      <div
        key={i}
        className={
          i < currentStep
            ? classNames(styles.progressItem, styles.progressItemPassed)
            : styles.progressItem
        }
      />
    );
  };

  const renderFunction = (): ReactNode[] => {
    let progress = [];
    for (let i = 0; i < totalAmount; i++) {
      progress.push(progressItem(i));
    }
    return progress;
  };

  return <div className={styles.progressBox}>{renderFunction()}</div>;
};

export default QuestionsProgress;
