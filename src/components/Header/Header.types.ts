import {ReactNode} from "react";

export interface IHeaderProps {
  activeTab: string
}

export interface IMainItem {
  icon: ReactNode
  shortText?: string
  text: string
  id: string
}

export interface INavItem {
  text: string
  id: string
}