import Footer from './Footer';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Head from 'next/head';


export default function Layout({ children }) {
    return (
        <>
            <Box>
                <Head>
                    <link rel="shortcut icon" href="/favicon.ico" />
                </Head>
                <Navbar />
                {children}
                <Footer />
            </Box>
        </>
    )
}