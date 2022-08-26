import CoverArea from "../components/Packages/CoverArea"
import Articles from "../components/Blog/Articles"
import { fetchAPI } from "../lib/api"
import Head from "next/head"

const Packages = ({ articles }) => {
    return (
        <>
            <Head>
                <title> Our Packages</title>
            </Head>
            <CoverArea />
            <Articles articles={articles} />
        </>
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


export default Packages