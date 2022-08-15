import '../styles/globals.css'
import '../styles/transitions.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import theme from '../Theme'
import "@fontsource/syne"
import "@fontsource/fira-sans"
import "@fontsource/ibm-plex-sans"
import Transition from '../components/Transition'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Transition>
          <Component {...pageProps} />
        </Transition>
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
