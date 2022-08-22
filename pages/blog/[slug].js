/* eslint react/prop-types: 0 */
import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api";
import NextImage from "../../components/Blog/Image"
import { getStrapiMedia } from "../../lib/media";
import { Box, Heading, Image, Container, Center, Text, Stack } from "@chakra-ui/react"
import remarkGfm from 'remark-gfm'


const Article = ({ article }) => {
    const imageUrl = getStrapiMedia(article.attributes.image)


    return (
        <Box bg={'#000'} color={'#fff'}>
            <Box >
                <Image src={imageUrl} alt={'image'} width={'100%'} />
                <Container maxW={{ md: '1000px' }}>
                    <Center flexDirection={'column'} py={8}>
                        <Heading as="h1" fontSize={'36px'}> {article.attributes.title}</Heading>
                        <Text color={'#9D9D9D'} fontSize={'14px'}>
                            <Moment format="MMM Do YYYY">
                                {article.attributes.published_at}
                            </Moment>
                        </Text>
                    </Center>
                    <Stack py={8}>
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                        >
                            {article.attributes.content}
                        </ReactMarkdown>
                    </Stack>

                </Container>
            </Box>
        </Box>
    )
}

export async function getStaticPaths() {
    const articlesRes = await fetchAPI("/articles", { fields: ["slug"] })

    return {
        paths: articlesRes.data.map((article) => ({
            params: {
                slug: article.attributes.slug,
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const articlesRes = await fetchAPI("/articles", {
        filters: {
            slug: params.slug,
        },
        populate: "*",
    })

    return {
        props: { article: articlesRes.data[0] },
        revalidate: 1,
    }
}

export default Article
