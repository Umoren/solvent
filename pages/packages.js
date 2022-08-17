import CoverArea from "../components/Packages/CoverArea"
import Articles from "../components/Blog/Articles"
import { fetchAPI } from "../lib/api"

const Packages = ({ articles }) => {
    return (
        <>
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