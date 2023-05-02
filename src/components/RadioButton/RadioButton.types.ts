export interface IRadioButton {
  placeholder: string
  register: {
    name: string
    required?: {
      value: string | boolean
      message: string
    } | boolean
  }
}