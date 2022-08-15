import { Box, Text, Center, Grid, Image, GridItem } from "@chakra-ui/react"

const InternationalPublications = () => {
    return (
        <Box color={'white'} my={8}>
            <Center flexDirection={'column'}>
                <Text
                    fontWeight={400}
                    fontSize={{ md: '16px' }}
                    lineHeight={{ md: '36px' }}
                    textAlign={'center'}
                    width={{ md: '77ch' }}
                >
                    We give your brand international recognition,
                    by writing and publishing press articles to notable international press platforms.
                </Text>


                <Grid templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' }} gridGap={8} mt={8}>
                    <GridItem>
                        <Image
                            src="/assets/forbesReal.png"
                            alt="forbes"
                            opacity={0.7}
                            _hover={{
                                opacity: 1,
                            }}
                        />
                    </GridItem>
                    <GridItem>
                        <Image
                            src="/assets/yahooFinance.png"
                            alt="yahoo finance"
                            opacity={0.7}
                            _hover={{
                                opacity: 1,
                            }}
                        />
                    </GridItem>
                    <GridItem>
                        <Image
                            src="/assets/yahooNews.png"
                            alt="yahoo news"
                            opacity={0.7}
                            _hover={{
                                opacity: 1,
                            }}
                        />
                    </GridItem>
                    <GridItem>
                        <Image
                            src="/assets/cbs.png"
                            alt="cbs news"
                            opacity={0.7}
                            _hover={{
                                opacity: 1,
                            }}
                        />
                    </GridItem>
                    <GridItem>
                        <Image
                            src="/assets/fox.png"
                            alt="fox news"
                            opacity={0.7}
                            _hover={{
                                opacity: 1,
                            }}
                        />
                    </GridItem>
                    <GridItem>
                        <Image
                            src="/assets/bloomberg.png"
                            alt="bloomberg news"
                            opacity={0.7}
                            _hover={{
                                opacity: 1,
                            }}
                        />
                    </GridItem>

                </Grid>
            </Center>

        </Box>
    )
}

export default InternationalPublications