import {ReactNode} from "react";

export interface ICheckboxProps {
  checked: boolean
  onChange: () => {
    phoneNumber: string
    filledSms: string
    firstName: string
    lastName: string
    email: string
    birthday: string | number
    password: string,
    repeatPassword: string
    checkbox: boolean
  }
  placeholder?: string | ReactNode
  errorMessage?: string
  register: {
    name: string
    required?: {
      value: string | boolean
      message: string
    } | boolean
  }
}