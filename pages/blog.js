import { Box } from "@chakra-ui/react"
import React from "react"
import Articles from "../components/Blog/Articles"
import { fetchAPI } from "../lib/api"
import Navbar from "../components/Blog/Navbar"

const Blog = ({ articles }) => {
    return (
        <Box>
            <Navbar />
            <Articles articles={articles} padding={{ md: '5rem', base: '1rem' }} />
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
            articles: articlesRes.data,
        },
        revalidate: 1,
    }
}

export default Blog
