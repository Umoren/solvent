import { Box, Heading, Image, Text, Grid, GridItem, LinkBox, Link, Icon } from "@chakra-ui/react";
import { Link as NextLink } from 'next/link';
import { ArrowForwardIcon } from "@chakra-ui/icons"

export default function KnowledgePanel() {
    return (
        <Box
            bgColor={'#000'}
            height={{ md: '80vh' }}
            color={'#fff'}
            display={{ md: 'grid' }}
            placeContent={{ md: 'center' }}
        >
            <Grid templateColumns={{ md: 'repeat(2, 1fr)' }}>
                <GridItem
                    margin={'auto'}
                    width={'100%'}
                    position={'relative'}
                    left={{ md: '65%' }}
                >
                    <Heading
                        as="h5"
                        fontSize={{ md: '27px' }}
                        lineHeight={'32.4px'}
                        fontWeight={'500'}
                    >
                        Google Knowledge Panel
                    </Heading>

                    <Text
                        fontWeight={'400'}
                        fontSize={{ md: '16px' }}
                        lineHeight={'36px'}
                        width={{ md: '60ch' }}
                    >
                        As Google expands, the number of themes that accelerate a robust outcome, the panels are more significant for marketing. Our skills, on the other hand, are put to use in the creation of an individual
                        verification process, as well as a comprehensive frame work of personal details and organization statuses.
                    </Text>
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
                                ml={2}
                            />
                        </Link>
                    </LinkBox>
                </GridItem>

                <GridItem>
                    <Image
                        src="/assets/knowledge.png"
                        alt="knowledge"
                        bg={'linear-gradient(270deg, #000000 13.68%, rgba(0, 0, 0, 0) 87.77%)'}

                    />
                </GridItem>
            </Grid>
        </Box>
    )
}