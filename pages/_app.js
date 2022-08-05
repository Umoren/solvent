import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout'
import theme from '../Theme'
import "@fontsource/syne"
import "@fontsource/fira-sans"
import "@fontsource/ibm-plex-sans"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
