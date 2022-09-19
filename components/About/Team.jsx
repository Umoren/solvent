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
                    <Grid templateColumns={{ md: 'repeat(3, 1fr)' }} gap={24} my={12}>
                        <GridItem>
                            <Image src={'/assets/unique.jpeg'} alt="team member" objectFit={'cover'} borderRadius={'100%'} width={'180px'} height={'180px'} />
                            <Heading
                                as="h5"
                                fontSize={{ md: '22px' }}
                                fontWeight={'700'}
                                textAlign={'center'}
                                my={'.75rem'}
                            >
                                Obi Unique Kings
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
                            <Image src={'/assets/team1.jpeg'} alt="team member" borderRadius={'100%'} width={'180px'} height={'180px'} objectFit={'cover'} />
                            <Heading
                                as="h5"
                                fontSize={{ md: '22px' }}
                                fontWeight={'700'}
                                textAlign={'center'}
                                my={'.75rem'}
                            >
                                Adeolu Ogunmilade
                            </Heading>
                            <Text
                                fontWeight={'300'}
                                fontSize={'16px'}
                                textAlign={'center'}
                                opacity={'.8'}
                            >
                                Founder/COO
                            </Text>
                        </GridItem>
                        <GridItem>
                            <Image src={'/assets/team3.jpeg'} objectFit={'cover'} alt="team member" borderRadius={'100%'} width={'180px'} height={'180px'} />
                            <Heading
                                as="h5"
                                fontSize={{ md: '22px' }}
                                fontWeight={'700'}
                                textAlign={'center'}
                                my={'.75rem'}
                            >
                                JohnAkachi Prince
                            </Heading>
                            <Text
                                fontWeight={'300'}
                                fontSize={'16px'}
                                textAlign={'center'}
                                opacity={'.8'}
                            >
                                Brand Manager
                            </Text>
                        </GridItem>


                    </Grid>
                </Box>
            </Center>

        </Box>
    )
}