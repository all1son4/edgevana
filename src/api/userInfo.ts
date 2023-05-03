import axios from "axios";
import {SERVER_URL} from "./constants";

type UserInfoResponse = {
  data: {
    firstName: string
    lastName: string
    email: string
    password: string
    accountType: string
    username: string
  }
  status: number
}

type UserInfo = {
  firstName?: string
  lastName?: string
  email?: string
  password?: string
  accountType?: string
  username?: string
}

export const setAccountType = async (type: string) => {
  try {
    const {data, status} = await axios.patch<UserInfoResponse>(
      `${SERVER_URL}/userInfo`,
      {
        accountType: type
      }
    )
    return {data, status}
  } catch (error) {
    console.log(error)
  }
}

export const getUserInfo = async () => {
  try {
    const {data, status} = await axios.get<UserInfoResponse>(
      `${SERVER_URL}/userInfo`
    )
    return {data, status}
  } catch (error) {
    console.log(error)
  }
}

export const sendUserInfo = async (info: UserInfo) => {
  try {
    const {data, status} = await axios.patch<UserInfoResponse>(
      `${SERVER_URL}/userInfo`,
      info
      )
    return {data, status}
  } catch (error) {
    console.log(error)
  }
}
