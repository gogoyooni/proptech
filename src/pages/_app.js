// import '@/styles/globals.css'
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';

import { ThemeProvider, ChakraProvider, CSSReset,theme } from "@chakra-ui/react";

import Layout from '../../components/Layout';

export default function App({ Component, pageProps }) {
  NProgress.configure({showSpinner: false})

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  })

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  })
  return (
    <>
      <Head>
  
      </Head>
      <ChakraProvider>
        <Layout>
          {/* <CSSReset /> */}
          <Component {...pageProps} />
        </Layout>  
      </ChakraProvider>
  
    </>
  )   
}
