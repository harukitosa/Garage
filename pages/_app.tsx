import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { AuthProvider } from '../src/context/Auth'
import Header from '../components/Header'
import '../styles/globals.css'
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
      <div>
        <Header/>
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
      </div>
  )
}

export default MyApp
