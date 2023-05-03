import styles from "./Header.module.scss";
import {navigationTabs, mainTabs} from "./Header.constants";
import SearchField from "../SearchField/SearchFiled";
import React, {FC} from "react";
import {useRouter} from "next/router";
import {IHeaderProps, IMainItem, INavItem} from "./Header.types";
import Button from "../Button/Button";

const Header: FC<IHeaderProps> = ({activeTab, setMenuVision, menuVision}) => {
  const router = useRouter()
  const {tab} = router.query

  const pageIcon = mainTabs.find((item:IMainItem) => item.id === tab)?.icon || null
  const pageTitle =  mainTabs.find((item:IMainItem) => item.id === tab)?.text || ''
  const rootRoute = mainTabs.find((item:IMainItem) => item.id === tab)?.shortText || ''
  const addRoute = navigationTabs.find((item: INavItem) => item.id === activeTab)?.text || ''

  return (
    <>
      <header className={styles.header}>
        {pageTitle
          ? <div className={styles.infoBox}>
          <div className={styles.iconWrapper}>
            {pageIcon}
          </div>
          <div className={styles.info}>
            <h1 className={styles.pageName}>{pageTitle}</h1>
            <p className={styles.pageNav}>{`${rootRoute} ${addRoute && '/'} ${addRoute}`}
            </p>
          </div>
          <div className={styles.buttonWrapper}>
            <Button
              onClick={() => {setMenuVision(!menuVision)}}
              buttonText={'Menu'}
            />
          </div>
        </div>
          : <div className={styles.infoBox}>
              <div className={styles.info}>
                <h1 className={styles.pageName}>Welcome to Edgevanga</h1>
              </div>
              <div className={styles.buttonWrapper}>
                <Button
                  onClick={() => {setMenuVision(!menuVision)}}
                  buttonText={'Menu'}
                />
              </div>
          </div>
        }
        <div className={styles.searchField}>
          <SearchField onChange={null} name={'searchField'} />
        </div>
      </header>
    </>
  )
}

export default Header