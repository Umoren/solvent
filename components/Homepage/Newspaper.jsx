import { Box, Grid, GridItem, Heading, Text, LinkBox, Link, Icon, Image } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Link as NextLink } from 'next/link';

export default function Newspaper() {
    return (
        <Box
            bgColor={'#000'}
            height={{ md: '80vh' }}
            color={'#fff'}
            display={{ md: 'grid' }}
            placeContent={{ md: 'center' }}
        >
            <Grid templateColumns={{ md: 'repeat(2, 1fr)' }} gap={6}>
                <GridItem>
                    <Image
                        src="/assets/Newspaper.png"
                        alt="Newspaper"
                        bg={'linear-gradient(270deg, #000000 7.4%, rgba(0, 0, 0, 0) 87.77%)'}
                    />
                </GridItem>

                <GridItem
                    margin={'auto'}
                    width={'100%'}
                    position={'relative'}
                    right={{ md: '35%' }}
                >
                    <Heading
                        as="h5"
                        fontSize={{ md: '27px' }}
                        lineHeight={'32.4px'}
                        fontWeight={'500'}
                    >
                        Newspaper Publications
                    </Heading>

                    <Text
                        fontWeight={'400'}
                        fontSize={{ md: '16px' }}
                        lineHeight={'36px'}
                        width={{ md: '60ch' }}
                    >
                        The brand provides newspaper article writing services for publications. These articles connect a large readership with
                        the assistance of different national daily newspapers. And also, backdate publications to when the event occurred.
                    </Text>
                    <LinkBox mt={8}>
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
                                ml={2}
                            />
                        </Link>
                    </LinkBox>
                </GridItem>
            </Grid>
        </Box>
    )
}