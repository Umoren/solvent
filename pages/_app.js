import '../styles/globals.css'
import '../styles/transitions.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import theme from '../Theme'
import "@fontsource/syne"
import "@fontsource/fira-sans"
import "@fontsource/ibm-plex-sans"
import Transition from '../components/Transition'
import Head from "next/head";


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>

      </Head>
      <Layout>
        <Transition>
          <Component {...pageProps} />
        </Transition>
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
