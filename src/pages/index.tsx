import Head from 'next/head'
import React, {ReactNode, useEffect, useState} from "react";
import SideBar from "../components/SideBar/SideBar";
import { useRouter } from 'next/router'
import Web3Page from "../components/Web3Page";
import Header from "../components/Header";

export default function Home() {
  const router = useRouter()
  const {tab} = router.query
  const [activeItem, setActiveItem] = useState<string>('entrepreneurToolkit')

  const PageRender = ():ReactNode => {
    switch (tab) {
      case 'web3': {
        return <Web3Page activeTab={activeItem} setActiveTab={setActiveItem} />
      }
      default: return <></>
    }
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('authParams') as string)?.isLogin) {
      router.push('/')
    } else {
      router.push('/signup/accountType')
    }
  }, [])


  return (
    <>
      <Head>
        <title>Edegvana</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar activeItem={activeItem} setActiveItem={setActiveItem}/>
      <Header activeTab={activeItem}/>
      {PageRender()}
    </>
  )
}