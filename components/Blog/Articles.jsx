import { Box, Grid } from "@chakra-ui/react";
import BlogCard from "./BlogCard";

export default function Articles({ articles }) {
    return (
        <Box py={8} bg={'#000'} color={'#fff'} display={'grid'} gridTemplateColumns={{ md: 'repeat(4,1fr)' }} gridGap={"2rem"} placeContent={{ base: 'center' }}>
            {articles.map((article, i) => (

                <BlogCard article={article} key={article.id} />

            ))
            }
        </Box >
    )
}