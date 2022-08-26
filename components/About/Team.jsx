import { Box, Center, Heading, Text, Grid, GridItem, Image } from "@chakra-ui/react";

export default function Team() {
    return (
        <Box
            bgColor={'#000'}
            color={'#fff'}
            display={{ md: 'grid' }}
            placeContent={{ md: 'center' }}
            border="none"
            style={{ border: 'none' }}
            py={{ base: '2rem', md: "4rem" }}
            px={{ base: '2rem' }}
        >
            <Center flexDirection={'column'} alignItems={'center'}>
                <Heading
                    fontWeight={'500'}
                    fontSize={'36px'}
                    textAlign={'center'}
                >
                    Meet The Team
                </Heading>

                <Text
                    fontWeight={'400'}
                    fontSize={{ md: '16px' }}
                    my={'1.5rem'}
                    textAlign={{ base: 'center' }}
                >
                    Here are the people who help turn your dreams to reality
                </Text>

                <Box>
                    <Grid templateColumns={{ md: 'repeat(4, 1fr)' }} gap={24} my={12}>
                        <GridItem>
                            <Image src={'/assets/sodiq.png'} alt="team member" />
                            <Heading
                                as="h5"
                                fontSize={{ md: '22px' }}
                                fontWeight={'700'}
                                textAlign={'center'}
                                my={'.75rem'}
                            >
                                Sadiq Akinola
                            </Heading>
                            <Text
                                fontWeight={'300'}
                                fontSize={'16px'}
                                textAlign={'center'}
                                opacity={'.8'}
                            >
                                Founder/CEO
                            </Text>
                        </GridItem>
                        <GridItem>
                            <Image src={'/assets/farouk.png'} alt="team member" />
                            <Heading
                                as="h5"
                                fontSize={{ md: '22px' }}
                                fontWeight={'700'}
                                textAlign={'center'}
                                my={'.75rem'}
                            >
                                Farouk Ogunleye
                            </Heading>
                            <Text
                                fontWeight={'300'}
                                fontSize={'16px'}
                                textAlign={'center'}
                                opacity={'.8'}
                            >
                                Founder/CEO
                            </Text>
                        </GridItem>
                        <GridItem>
                            <Image src={'/assets/benita.png'} alt="team member" />
                            <Heading
                                as="h5"
                                fontSize={{ md: '22px' }}
                                fontWeight={'700'}
                                textAlign={'center'}
                                my={'.75rem'}
                            >
                                Benita Ubah
                            </Heading>
                            <Text
                                fontWeight={'300'}
                                fontSize={'16px'}
                                textAlign={'center'}
                                opacity={'.8'}
                            >
                                Founder/CEO
                            </Text>
                        </GridItem>
                        <GridItem>
                            <Image src={'/assets/daniels.png'} alt="team member" />
                            <Heading
                                as="h5"
                                fontSize={{ md: '22px' }}
                                fontWeight={'700'}
                                textAlign={'center'}
                                my={'.75rem'}
                            >
                                Daniels Olakunle
                            </Heading>
                            <Text
                                fontWeight={'300'}
                                fontSize={'16px'}
                                textAlign={'center'}
                                opacity={'.8'}
                            >
                                Founder/CEO
                            </Text>
                        </GridItem>

                    </Grid>
                </Box>
            </Center>

        </Box>
    )
}