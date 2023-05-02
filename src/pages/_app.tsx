import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React, {useEffect} from "react";
import {useRouter} from "next/router";

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('authParams') as string)?.isLogin) {
      router.push('/')
    } else {
      if (router.pathname === '/') {
        router.push('/signup/accountType')
      } else {
        router.push(`${router.pathname}`)
      }
    }
  }, [])

  return <>
    <Component {...pageProps}/>
  </>
}
