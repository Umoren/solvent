import { Box, Heading, Grid, Text, GridItem, Link, LinkBox, Icon } from "@chakra-ui/react";
import { Link as NextLink } from 'next/link';
import { ArrowForwardIcon } from "@chakra-ui/icons"

export default function Niche() {
    return (
        <Box
            bgColor={'#000'}
            height={{ md: '50vh' }}
            px={{ base: 8, md: 24 }}
            color={'#fff'}
            display={{ md: 'grid' }}
            placeContent={{ md: 'center' }}
            border="none"
        >
            <Grid templateColumns={{ md: 'repeat(2, 1fr)' }} gap={6} >
                <GridItem textAlign={{ base: 'center', md: 'left' }}>
                    <Heading
                        as="h5"
                        fontWeight={'500'}
                        fontSize={{ md: '36px' }}
                        lineHeight={'43.2px'}
                        width={{ md: '20ch' }}
                    >
                        Carving a niche for ourselves
                    </Heading>

                    <LinkBox mt={4}>
                        <Link
                            as={NextLink}
                            to="/"
                            color="#15BE60"
                            fontWeight="400"
                            lineHeight="19.2px"
                        >
                            Explore All Packages
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

                <GridItem mb={{ base: 8, md: 0 }}>

                    <Text lineHeight={'36px'}>
                        Our core specialties surround the influence of growth management through content creation and marketing,
                        PR and advertising, social media management and marketing, campaign deployment and email marketing, brand development
                        strategy and management, talent consultancy, advisory and management.
                    </Text>
                </GridItem>
            </Grid>
        </Box>
    )
}