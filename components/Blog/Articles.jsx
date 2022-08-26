import { Box } from "@chakra-ui/react";
import BlogCard from "./BlogCard";

export default function Articles({ articles, padding }) {
    return (
        <Box bg={'#000'} color={'#fff'} px={padding}>
            <Box py={8} display={'grid'} gridTemplateColumns={{ md: 'repeat(4,1fr)' }} gridGap={"2rem"} placeContent={{ base: 'center' }}>

                {articles.map((article, i) => (

                    <BlogCard article={article} key={article.id} />

                ))
                }
            </Box >
        </Box>
    )
}