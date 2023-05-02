export interface IButtonProps {
  type?: string
  label: string
  onChange: () => void
  onFocus?: () => void
  name: string
  isPasswordFiled?: boolean
  value: string
  errorMessage?: string
  register: {
    name: string
    required?: {
      value: string | boolean
      message: string
    } | boolean
    pattern?: {
      value: string
      message: string
    }
  }
  strongGradate?: {
    easy: boolean
    medium: boolean
    hard: boolean
  }
}