import { Box, Grid, Heading, Center } from "@chakra-ui/react";
import BlogCard from "./BlogCard";

export default function Articles({ articles, padding }) {
    return (
        <Box bg={'#000'} color={'#fff'} px={padding}>
            <Center>
                <Heading as="h1" fontSize={'36px'} py={6}> Blog</Heading>
            </Center>
            <Box py={8} display={'grid'} gridTemplateColumns={{ md: 'repeat(4,1fr)' }} gridGap={"2rem"} placeContent={{ base: 'center' }}>

                {articles.map((article, i) => (

                    <BlogCard article={article} key={article.id} />

                ))
                }
            </Box >
        </Box>
    )
}