import { Box, Grid } from "@chakra-ui/react";
import BlogCard from "./BlogCard";

export default function BlogSection() {
    return (
        <Box
            bgColor={'#000'}
            py={24}
            color={'#fff'}
            display={{ md: 'grid' }}
            placeContent={{ md: 'center' }}
            border="none"
            style={{ border: 'none' }}
        >
            <Grid templateColumns={{ md: 'repeat(4, 1fr)' }} gridGap={'6'}>

                <BlogCard
                    title={'Global Banking Guide'}
                    description={'Disrupt traditional banking and deliver new services like credit builder loans, crypto savings accounts and branded cards to new audiences.'}
                    date={'Feb 01, 2022'}
                    image="/assets/blogImage1.png" />

                <BlogCard
                    title={'Global Banking Guide'}
                    description={'Disrupt traditional banking and deliver new services like credit builder loans, crypto savings accounts and branded cards to new audiences.'}
                    date={'Feb 01, 2022'}
                    image="/assets/blogImage1.png" />

                <BlogCard
                    title={'Global Banking Guide'}
                    description={'Disrupt traditional banking and deliver new services like credit builder loans, crypto savings accounts and branded cards to new audiences.'}
                    date={'Feb 01, 2022'}
                    image="/assets/blogImage1.png" />

                <BlogCard
                    title={'Global Banking Guide'}
                    description={'Disrupt traditional banking and deliver new services like credit builder loans, crypto savings accounts and branded cards to new audiences.'}
                    date={'Feb 01, 2022'}
                    image="/assets/blogImage1.png" />
            </Grid>
        </Box>
    )
}