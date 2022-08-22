import NextImage from './Image';
import {
    Box,
    Center,
    Heading,
    Text,
    Grid,
    Stack,
    Link,
    Icon,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from "@chakra-ui/icons"
import Moment from "react-moment"

export default function BlogCard({ article }) {
    return (
        <Box
            maxWidth={'345px'}
            height={'500px'}
            bg={'#1D201F'}
            boxShadow={'2xl'}
            rounded={'none'}
            p={6}
            color={'#fff'}
            overflow={'hidden'}
            position={'relative'}
        >
            <Box
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={6}
                pos={'relative'}
            >
                <NextImage image={article?.attributes?.image} />
            </Box>
            <Stack>
                <Heading
                    color={'#fff'}
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                    {article?.attributes?.title}
                </Heading>
                <Text color={'#9D9D9D'} fontSize={'14px'}>
                    <Moment format="MMM Do YYYY">
                        {article?.attributes?.published_at}
                    </Moment>
                </Text>
                <Text color={'#fff'}>
                    {article?.attributes?.description?.slice(0, 100)}
                </Text>
            </Stack>


            <Stack mt={6} align={'left'} position={'absolute'} bottom={'0'} pb={8}>
                <Link
                    href={`/blog/${article.attributes.slug}`}
                    to="/"
                    color="#15BE60"
                    fontWeight="400"
                    lineHeight="19.2px"
                >
                    Learn More
                    <Icon
                        as={ArrowForwardIcon}
                        transition={'all .25s ease-in-out'}
                        w={4}
                        h={4}
                    />
                </Link>
            </Stack>
        </Box>
    );
}