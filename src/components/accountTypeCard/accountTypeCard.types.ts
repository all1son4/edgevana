import {ReactNode} from "react";

export interface IAccountTypeCardProps {
  text: string;
  icon: ReactNode
  title: string
  activeState: boolean
  onClick?: () => void
}