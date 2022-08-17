import { Box, Heading, Image, Text, Grid, GridItem, LinkBox, Link, Icon } from "@chakra-ui/react";
import { Link as NextLink } from 'next/link';
import { ArrowForwardIcon } from "@chakra-ui/icons"

export default function KnowledgePanel() {
    return (
        <Box
            bgColor={'#000'}
            py={{ base: '2rem' }}
            color={'#fff'}
            display={{ md: 'grid' }}
            placeContent={{ md: 'center' }}
            border="none"
        >
            <Grid templateColumns={{ md: 'repeat(2, 1fr)' }}>
                <GridItem
                    margin={'auto'}
                    width={'100%'}
                    position={'relative'}
                    left={{ md: '65%' }}
                    px={{ base: 8 }}
                >
                    <Heading
                        as="h5"
                        fontSize={{ base: '24px', md: '36px' }}
                        lineHeight={'32.4px'}
                        fontWeight={'500'}
                        py={4}
                        mt={{ base: 8, md: 0 }}
                    >
                        Social Media Caption/Copywriting
                    </Heading>

                    <Text
                        fontWeight={'400'}
                        fontSize={{ md: '16px' }}
                        lineHeight={'30px'}
                        width={{ md: '60ch' }}
                    >
                        We help clients organize social media videos, pictures, and written narratives in the form of captions. As part of
                        this service, the clients who do not understand what to write about are relieved of their stress through storytelling.
                    </Text>
                    <LinkBox mt={4}>
                        <Link
                            href="/packages"
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

                <GridItem>
                    <Image
                        src="/assets/socialMedia.png"
                        alt="knowledge"
                        bg={'linear-gradient(270deg, #000000 13.68%, rgba(0, 0, 0, 0) 87.77%)'}

                        mt={{ base: 8, md: 0 }}
                    />
                </GridItem>
            </Grid>
        </Box>
    )
}