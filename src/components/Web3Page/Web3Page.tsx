import styles from './Web3Page.module.scss';
import React, { FC, useEffect, useState } from 'react';
import { navigationTabs, questionsStep } from './Web3Page.constants';
import QuestionsProgress from '../QuestionsProgress/QuestionsProgress';
import Button from '../Button/Button';
import RadioButton from '../RadioButton/RadioButton';
import {
  getAnswers,
  getQuestionNumber,
  sendAnswer,
  setQuestionNumber,
} from '../../api/questions';
import { useForm } from 'react-hook-form';
import { IWeb3PagerProps } from './Web3Page.types';
import classNames from 'classnames';

interface INavigationTabs {
  id: string;
  text: string;
}

const Web3Page: FC<IWeb3PagerProps> = ({ activeTab, setActiveTab }) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [answers, setAnswers] = useState<object>({});

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ shouldFocusError: false });

  const nextButtonHandler = async (eventData: any) => {
    if (isValid) {
      setAnswers((prev) => ({
        ...prev,
        [`questionNumber${currentQuestion}`]:
          eventData[`questionNumber${currentQuestion}`],
      }));
      const responseAnswers = await sendAnswer({
        ...answers,
        [`questionNumber${currentQuestion}`]:
          eventData[`questionNumber${currentQuestion}`],
      });

      if (responseAnswers?.data) {
        const response = await setQuestionNumber(currentQuestion + 1);
        if (response?.data) {
          setCurrentQuestion(Number(response.data.number));
          reset();
        }
      }
    }
  };

  const cancelButtonHandler = async () => {
    if (currentQuestion > 1) {
      const response = await setQuestionNumber(currentQuestion - 1);

      if (response?.data) {
        setCurrentQuestion(Number(response.data.number));
      }
    }
  };

  const resetButtonHandler = async () => {
    const response = await setQuestionNumber(1);

    if (response?.data) {
      setCurrentQuestion(Number(response.data.number));
      reset();
    }
    await sendAnswer({});
  };

  useEffect(() => {
    (async () => {
      const responseQuestion = await getQuestionNumber();
      if (responseQuestion?.data) {
        setCurrentQuestion(Number(responseQuestion.data.number));
      }

      const responseAnswers = await getAnswers();
      if (responseAnswers?.data) {
        setAnswers(responseAnswers.data.answers);
      }
    })();
  }, []);

  return (
    <main className={styles.mainPage}>
      <div className={styles.content}>
        <ul className={styles.navigation}>
          {navigationTabs.map((item: INavigationTabs) => (
            <li
              key={item.id}
              className={
                activeTab === item.id
                  ? classNames(
                      styles.navigationItem,
                      styles.navigationItemActive
                    )
                  : styles.navigationItem
              }
              onClick={() => {
                setActiveTab(item.id);
                reset();
              }}
            >
              {item.text}
            </li>
          ))}
        </ul>
        {activeTab === 'entrepreneurToolkit' && (
          <form
            className={styles.guideBox}
            onSubmit={handleSubmit(nextButtonHandler)}
          >
            <h2 className={styles.guideTitle}>Setup Guide</h2>
            <p className={styles.guideInfoText}>
              Unlock your highest potential with our personalized guide!
            </p>
            <p className={styles.guideInfoText}>
              {currentQuestion - 1}/7 Questions answered
            </p>
            <div className={styles.progressWrapper}>
              <QuestionsProgress
                currentStep={currentQuestion - 1}
                totalAmount={7}
              />
            </div>
            <div className={styles.questionBox}>
              {currentQuestion <= 7 && (
                <div className={styles.questionNumber}>
                  <p>{currentQuestion}</p>
                </div>
              )}
              <p className={styles.question}>
                {questionsStep[currentQuestion].question}
              </p>
            </div>
            <div className={styles.radioBlock}>
              {questionsStep[currentQuestion].variants.map((item, index) => {
                return (
                  <RadioButton
                    placeholder={item}
                    key={index}
                    register={register(`questionNumber${currentQuestion}`, {
                      required: {
                        value: true,
                        message: 'Please choose one variant',
                      },
                    })}
                  />
                );
              })}
              {errors[`questionNumber${currentQuestion}`]?.message && (
                <p className={styles.errorMessage}>
                  {errors[`questionNumber${currentQuestion}`]?.message}
                </p>
              )}
            </div>
            {currentQuestion <= 7 ? (
              <div className={styles.buttonBox}>
                <Button
                  buttonText={'Cancel'}
                  onClick={cancelButtonHandler}
                  variant={'cancel'}
                />
                <Button buttonText={'Next'} onClick={null} type={'submit'} />
              </div>
            ) : (
              <Button buttonText={'Reset'} onClick={resetButtonHandler} />
            )}
          </form>
        )}
      </div>
    </main>
  );
};

export default Web3Page;
