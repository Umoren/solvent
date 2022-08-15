import { Box } from "@chakra-ui/react";
import CoverArea from "../components/About/CoverArea";
import Objectives from "../components/About/Objectives";
import Team from "../components/About/Team";
import Value from "../components/About/Value";
import BlogSection from "../components/Blog/BlogSection";
import Navbar from "../components/About/Navbar";
import Head from 'next/head'
import Articles from "../components/Blog/Articles"
import { fetchAPI } from "../lib/api"
export default function About({ articles }) {
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
            <Articles articles={articles} />
        </Box>
    )
}
export async function getStaticProps() {
    // Run API calls in parallel
    const [articlesRes] = await Promise.all([
        fetchAPI("/articles", { populate: "*" }),

    ])

    return {
        props: {
            articles: articlesRes.data.slice(0, 4),
        },
        revalidate: 1,
    }
}