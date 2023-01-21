import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Theme from '../styles/theme'
import GlobalStyle from '../styles/globalStyles'
import React from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sahar ♥ Joshua</title>
      </Head>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
