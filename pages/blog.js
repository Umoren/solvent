import { Box } from "@chakra-ui/react"
import React from "react"
import Articles from "../components/Blog/Articles"
import { fetchAPI } from "../lib/api"

const Blog = ({ articles }) => {
    return (
        <Box>
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
            articles: articlesRes.data,
        },
        revalidate: 1,
    }
}

export default Blog
