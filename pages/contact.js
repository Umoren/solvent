import CoverArea from "../components/Contact/CoverArea"
import { Box } from "@chakra-ui/react"
import Head from 'next/head'
import Articles from "../components/Blog/Articles"
import { fetchAPI } from "../lib/api"
const Contact = ({ articles }) => {
    return (
        <Box>
            <Head>
                <title>Contact Us</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <CoverArea />

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

export default Contact