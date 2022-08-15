import Navbar from "../components/Contact/Navbar"
import CoverArea from "../components/Contact/CoverArea"
import { Box } from "@chakra-ui/react"
import Head from 'next/head'
const Contact = () => {
    return (
        <Box>
            <Head>
                <title>Contact Us</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <CoverArea />
        </Box>
    )
}

export default Contact