import React, {FC, ReactNode, useEffect, useState} from "react";

import styles from './SideBar.module.scss'
import {LogoIcon, LogoutIcon, SunIcon, MoonIcon} from "../../icons";
import {menuList} from './SideBar.constants'
import {getUserInfo} from "../../api/userInfo";
import {ISideBarProps} from "./SideBar.types";
import {useRouter} from "next/router";
import Button from "../Button/button";

interface IMenuItem {
  icon: ReactNode
  text: string
  id: string
}

export const SideBar: FC<ISideBarProps> = ({activeItem, setActiveItem, menuVision, setMenuVision}) => {
  const [theme, setTheme] = useState<string>('light')
  const [userInfo, setUserInfo] = useState<object>({})

  const router = useRouter()

  const themeHandler = (): void => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const itemHandler = (id: string) => {
    setActiveItem(id)
    router.replace({
      query: { ...router.query, tab: id },
    });
    setMenuVision(false)
  }

  const logoutHandler = ():void => {
    localStorage.removeItem('authParams')
    router.push('/signup/accountType')
  }

  const menuStyleSetting = {
    display: 'grid'
  }

  useEffect(() => {
    (async () => {
      const response = await getUserInfo()
      if (response?.data) {
        setUserInfo(response.data)
      }
    })()
  }, [])

  return (
    <nav
      style={menuVision ? menuStyleSetting : {}}
      className={styles.sideBar}
    >
      <div className={styles.logo}>
        <LogoIcon />
        <div className={styles.buttonWrapper}>
          <Button
            buttonText={'X'}
            onClick={() => {setMenuVision(!menuVision)}}
          />
        </div>
      </div>
      <ul className={styles.menu}>
        {menuList.map((item: IMenuItem) => {
          return <li
            className={activeItem === item.id
              ? [styles.menuItem, styles.menuItemActive].join(' ')
              : styles.menuItem}
            onClick={() => {itemHandler(item.id)}}
            key={item.id}
          >
            {item.icon}
            {item.text}
          </li>
        })}
      </ul>
      <div className={styles.downBox}>
        <div className={styles.aboutUser}>
          <div className={styles.userPhoto}>
            <img src={'/USerPhoto.jpeg'} alt={'user-photo'}/>
          </div>
          <div className={styles.userInfo}>
            <p className={styles.userName}>{userInfo?.firstName} {userInfo?.lastName}</p>
            <p className={styles.userEmail}>{userInfo?.email}</p>
          </div>
          <div className={styles.logoutLogo} onClick={logoutHandler}>
            <LogoutIcon />
          </div>
        </div>
        <div className={theme === 'light' ? styles.themeSwitcher : [styles.themeSwitcher, styles.anotherSwitcher].join(' ')}>
          <div
            className={[
              styles.variant, theme === 'light' ? styles.variantActiveLight : ''].join(' ')}
            onClick={themeHandler}
          >
            <SunIcon  fill={theme === 'light' ? '#2B3E9B' : '#4B516A'}/>
            <p>Light</p>
          </div>
          <div
            className={[styles.variant, theme === 'dark' ? styles.variantActiveDark : ''].join(' ')}
            onClick={themeHandler}
          >
            <MoonIcon fill={theme === 'dark' ? '#FFFFFF' : '#4B516A'}/>
            <p>Dark</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default SideBar