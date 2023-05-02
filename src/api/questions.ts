import axios from "axios";
import {SERVER_URL} from "./constants";

type QuestionNumberResponse = {
  data: {
    questionNumber: number
  }
  status: number
}

export const getQuestionNumber = async () => {
  try {
    const {data, status} =  await axios.get<QuestionNumberResponse>(
      `${SERVER_URL}/questionNumber`,
      {
        headers: {
          Accept: 'application/json',
        }
      }
    )
    return {data, status}
  } catch (error) {
    console.log(error)
  }
}

export const setQuestionNumber = async (number: number) => {
  try {
    const {data, status} = await axios.patch<QuestionNumberResponse>(
      `${SERVER_URL}/questionNumber`,
      {
        number: number
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    )
    return {data, status}
  } catch (error) {
    console.log(error)
  }
}

export const sendAnswer = async (data: object) => {
  try {
    return await axios.patch<object>(
      `${SERVER_URL}/questions`,
      {
        answers: data
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
      )
  } catch (error) {
    console.log(error)
  }
}

export const getAnswers = async () => {
  try {
    return await axios.get<object>(
      `${SERVER_URL}/questions`,
      {
      headers: {
        Accept: 'application/json',
      },
    }
    )
  } catch (error) {
    console.log(error)
  }
}