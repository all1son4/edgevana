import Head from 'next/head'
import React, {useState} from "react";
import AccountTypeCard from "../../../components/accountTypeCard/accountTypeCard";
import {IndividualIcon, BusinessIcon, LogoIcon} from "../../../icons";
import Button from "../../../components/Button/button";
import styles from './index.module.scss'
import RoundButton from "../../../components/RoundButton/RoundButton";
import Image from 'next/image'
import {setAccountType} from "../../../api/userInfo";
import { useRouter } from 'next/router'

export default function AccountType() {

  const [activeState, setActiveState] = useState<string>('individual')

  const router = useRouter()

  const sendType = async () => {
    const response = await setAccountType(activeState)

    if (response?.data) {
      await router.push('http://localhost:3000/signup/generalInfo')
    }
  }

  return (
    <>
      <Head>
        <title>Edegvana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainPage}>
        <div className={styles.leftSide}>
          <div className={styles.logo}>
            <LogoIcon/>
          </div>
          <div className={styles.posCenterBox}>
            <h1 className={styles.title}>Welcome to Edgevana</h1>
            <p className={styles.subtitle}>Choose your account type to get started</p>
            <div className={styles.container}>
              <div className={styles.cardContainer}>
                <AccountTypeCard
                  text={'For individuals who want to participate, develop or build with a click of a button.'}
                  icon={<IndividualIcon/>}
                  title={'Individual'}
                  activeState={activeState === 'individual'}
                  onClick={() => setActiveState('individual')}
                />
                <AccountTypeCard
                  text={'For companies and institutions who need access to our suite of tools and real-time insights to manage and run their operations.'}
                  icon={<BusinessIcon/>}
                  title={'Business'}
                  activeState={activeState === 'business'}
                  onClick={() => setActiveState('business')}
                />
              </div>
              <Button
                buttonText={'Get Started'}
                onClick={sendType}
              />
            </div>
            <p className={styles.ask}>Already have an account? <span className={styles.askRedirect}>Sign in</span></p>
          </div>
          <span className={styles.info}>© Edegvana 2022</span>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.backgroundBox}>
            <Image className={styles.backgroundOne} src={'/GeneralInformation.png'} alt={'picture'} width={717} height={794} />
            <Image className={styles.backgroundTwo} src={'/Chats.png'} alt={'picture'} width={337} height={537} />
          </div>
          <div className={styles.additionalBlock}>
            <div className={styles.additionalTypography}>
              <h2 className={styles.additionalTitle}>Accelerating the next generation of the internet</h2>
              <p className={styles.additionalSubtitle}>Participate in over 100+ protocols with one click | Zero to operator in 60 seconds</p>
            </div>
            <div className={styles.buttonsBox}>
              <RoundButton onClick={null} disabled={true} direction={'left'} />
              <RoundButton onClick={null} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}