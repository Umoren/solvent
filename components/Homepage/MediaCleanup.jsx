import { Box, Grid, GridItem, Heading, Text, LinkBox, Link, Icon, Image } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Link as NextLink } from 'next/link';

export default function Newspaper() {
    return (
        <Box
            bgColor={'#000'}
            color={'#fff'}
            py={{ base: '2rem' }}
            display={{ md: 'grid' }}
            placeContent={{ md: 'center' }}
            border="none"
        >
            <Grid templateColumns={{ md: 'repeat(2, 1fr)' }} gap={6}>
                <GridItem order={{ base: 2, md: 0 }}>
                    <Image
                        src="/assets/media.png"
                        alt="Newspaper"
                        bg={'linear-gradient(270deg, #000000 7.4%, rgba(0, 0, 0, 0) 87.77%)'}
                        mt={{ base: 8, md: 0 }}
                    />
                </GridItem>

                <GridItem
                    margin={'auto'}
                    width={'100%'}
                    position={'relative'}
                    right={{ md: '35%' }}
                    px={{ base: 8 }}
                >
                    <Heading
                        as="h5"
                        fontSize={{ base: '24px', md: '36px' }}
                        lineHeight={'32.4px'}
                        fontWeight={'500'}
                        py={4}
                    >
                        Media Cleanup
                    </Heading>

                    <Text
                        fontWeight={'400'}
                        fontSize={{ md: '16px' }}
                        lineHeight={'30px'}
                        width={{ md: '60ch' }}
                    >
                        Defamation and other internet reputational damages have always caused more harm than good. On the other hand, it only takes one online defamatory post to harm someone&apos;s reputation. As a result, it is
                        critical to erase the false and misleading assertions swiftly, to prevent further spread and curb impending damages.
                    </Text>
                    <LinkBox mt={8}>
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
            </Grid>
        </Box>
    )
}