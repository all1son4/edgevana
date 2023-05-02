import {ReactNode} from "react";

export interface IHeaderProps {
  activeTab: string
  setMenuVision: (boolean) => void
  menuVision: boolean
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