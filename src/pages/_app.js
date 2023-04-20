// import '@/styles/globals.css'
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';

import { ThemeProvider, ChakraProvider, CSSReset,theme } from "@chakra-ui/react";

import Layout from '../../components/Layout';

export default function App({ Component, pageProps }) {
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
