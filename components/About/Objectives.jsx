import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";

export default function Objectives() {
    return (
        <Box
            bgColor={'#000'}
            color={'#fff'}
            display={{ md: 'grid' }}
            placeContent={{ md: 'center' }}
            border="none"
            style={{ border: 'none' }}
        >
            <Grid templateColumns={{ md: 'repeat(2, 1fr)' }}>
                <GridItem px={{ base: '2rem', md: '4rem' }} py={{ base: '2rem', md: '4rem' }}>
                    <Heading
                        fontSize={{ base: '36px' }}
                        fontWeight={'500'}
                        lineHeight={'43.2px'}
                    >
                        Goals & Objectives
                    </Heading>

                    <Text
                        fontSize={{ md: '16px' }}
                        fontWeight={{ md: '400' }}
                        lineHeight={'32px'}
                        width={{ md: '60ch' }}
                        my={'1.5rem'}
                    >
                        We are defning the new age of online reputation,
                        bridging the gap between digital technology and the community at large.
                        This is how we plan to achieve our goals;
                    </Text>

                    <Box my={'2rem'}>
                        <Heading
                            fontWeight={'500'}
                            fontSize={{ md: '22px' }}
                            lineHeight={'26px'}
                            color={'#15BE60;'}
                        >
                            01
                        </Heading>

                        <Text
                            fontWeight={'400'}
                            fontSize={{ md: '16px' }}
                            lineHeight={'36px'}
                            width={{ md: '55ch' }}
                            my={'1rem'}
                        >
                            To cultivate a high-level brand awareness by delivering quality and strategic marketing content.
                        </Text>
                    </Box>
                    <Box my={'2rem'}>
                        <Heading
                            fontWeight={'500'}
                            fontSize={{ md: '22px' }}
                            lineHeight={'26px'}
                            color={'#15BE60;'}
                        >
                            02
                        </Heading>

                        <Text
                            fontWeight={'400'}
                            fontSize={{ md: '16px' }}
                            lineHeight={'36px'}
                            width={{ md: '55ch' }}
                            my={'1rem'}
                        >
                            To increase customer’s retention and preferences through the establishment of an ideal customer profile.
                        </Text>
                    </Box>
                    <Box my={'2rem'}>
                        <Heading
                            fontWeight={'500'}
                            fontSize={{ md: '22px' }}
                            lineHeight={'26px'}
                            color={'#15BE60;'}
                        >
                            03
                        </Heading>

                        <Text
                            fontWeight={'400'}
                            fontSize={{ md: '16px' }}
                            lineHeight={'36px'}
                            width={{ md: '55ch' }}
                            my={'1rem'}
                        >
                            To promote corporate sustainability by strengthen our client-base through customer’s
                            attraction and satisfaction, community relations, employee retention and reputation building.
                        </Text>
                    </Box>
                </GridItem>
                <GridItem>
                    <Image
                        src="/assets/objectives.png"
                        alt="objectives"
                    />
                </GridItem>
            </Grid>

        </Box>
    )
}