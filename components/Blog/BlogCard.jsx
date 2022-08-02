import Image from 'next/image';
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    LinkBox,
    Link,
    Icon,
} from '@chakra-ui/react';
import { Link as NextLink } from 'next/link';
import { ArrowForwardIcon } from "@chakra-ui/icons"

export default function BlogCard({ image, title, date, description, }) {
    return (
        <Center py={6}>
            <Box
                maxW={'345px'}
                maxH={'483px'}
                w={'full'}
                h={'full'}
                bg={'#1D201F'}
                boxShadow={'2xl'}
                rounded={'none'}
                p={6}
                color={'#fff'}
                overflow={'hidden'}>
                <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Image
                        src={image}
                        layout={'fill'}
                    />
                </Box>
                <Stack>
                    <Heading
                        color={'#fff'}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        {title}
                    </Heading>
                    <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                            <Text color={'#9D9D9D'}>{date}</Text>
                        </Stack>
                    </Stack>
                    <Text color={'#fff'}>
                        {description}
                    </Text>
                </Stack>

                <LinkBox mt={4}>
                    <Link
                        as={NextLink}
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
                </LinkBox>
            </Box>
        </Center>
    );
}