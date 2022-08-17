import Footer from './Footer';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';


export default function Layout({ children }) {
    return (
        <>
            <Box>
                <Navbar />
                {children}
                <Footer />
            </Box>
        </>
    )
}