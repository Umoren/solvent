import { Box } from "@chakra-ui/react";
import CoverArea from "../components/About/CoverArea";
import Objectives from "../components/About/Objectives";
import Team from "../components/About/Team";
import Value from "../components/About/Value";
import BlogSection from "../components/Blog/BlogSection";
import Navbar from "../components/About/Navbar";
import Head from 'next/head'
export default function About() {
    return (
        <Box>
            <Head>
                <title>About Solvent</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            <CoverArea />
            <Objectives />
            <Value />
            <Team />
            <BlogSection />
        </Box>
    )
}