import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { AuthProvider } from '../src/context/Auth'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
      <div>
        <AuthProvider>
        <Header/>
            <Component {...pageProps} />
        <Footer/>
        </AuthProvider>
      </div>
  )
}

export default MyApp
