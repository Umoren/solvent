import { Box, Center, Grid, GridItem, Heading, Image, Text, Badge, Link } from "@chakra-ui/react"
import GenericButton from "./Button";

const NewspaperBackdated = () => {
    return (
        <Box color={'white'} height={{ md: '50vh' }} mt={{ md: '-10rem' }} mb={{ md: '5rem' }} position={'relative'} top={{ md: '-3rem' }}>


            <Box pb={{ base: 16 }} pt={{ base: 0, md: 0 }} m={{ base: 'auto', md: '0 0 0 6rem' }} px={{ base: '0', md: '0' }}>
                <Grid templateColumns={{ md: 'repeat(3, 1fr)' }} placeContent={{ base: 'center', md: 'auto' }}>
                    <GridItem display="flex" flexDirection={'column'} gap={4}>
                        <Text fontSize={'16px'}> Basic Package </Text>
                        <Heading
                            as="h3"
                            fontWeight="700"
                            fontSize={{ base: '30px', md: '40px' }}
                            fontFamily={'IBM Plex Sans'}
                        >
                            ₦40,000
                        </Heading>
                        <Box display="flex" gap={2} mb={12}>
                            <Image
                                src="/assets/radio.svg"
                                alt="radio"
                            />
                            <Text>
                                1 publication
                            </Text>
                        </Box>
                        <Link href="https://forms.gle/GLxNR6MYjEJ81mDD6">
                            <GenericButton textColor={'#15BE60'} />
                        </Link>
                    </GridItem>

                    <GridItem display="flex" flexDirection={'column'}>
                        <Box>
                            <Text fontSize={'16px'}> Premium Package
                                <Badge
                                    ml='1'
                                    bgColor={'#15BE60'}
                                    color={'white'}
                                >
                                    Recommended
                                </Badge>
                            </Text>
                        </Box>
                        <Heading
                            as="h3"
                            fontWeight="700"
                            fontSize={{ base: '30px', md: '40px' }}
                            fontFamily={'IBM Plex Sans'}
                            mt={4}
                        >
                            ₦200,000
                        </Heading>
                        <Box display="flex" gap={2} mt={4}>
                            <Image
                                src="/assets/radio.svg"
                                alt="radio"
                            />
                            <Text>
                                5 publications
                            </Text>
                        </Box>

                        <Box display="flex" gap={2} mb={10}>
                            <Image
                                src="/assets/radio.svg"
                                alt="radio"
                            />
                            <Text>
                                15% possible discount
                            </Text>
                        </Box>

                        <Link href="https://forms.gle/GLxNR6MYjEJ81mDD6">
                            <GenericButton textColor={'#15BE60'} />
                        </Link>
                    </GridItem>

                    <GridItem display="flex" flexDirection={'column'}>
                        <Box>
                            <Text fontSize={'16px'}> Pro Package

                            </Text>
                        </Box>
                        <Heading
                            as="h3"
                            fontWeight="700"
                            fontSize={{ base: '30px', md: '40px' }}
                            fontFamily={'IBM Plex Sans'}
                            mt={4}
                        >
                            ₦400,000
                        </Heading>
                        <Box display="flex" gap={2} mt={4}>
                            <Image
                                src="/assets/radio.svg"
                                alt="radio"
                            />
                            <Text>
                                10 publications
                            </Text>
                        </Box>

                        <Box display="flex" gap={2} mb={10}>
                            <Image
                                src="/assets/radio.svg"
                                alt="radio"
                            />
                            <Text>
                                10% possible discount
                            </Text>
                        </Box>
                        <Link href="https://forms.gle/GLxNR6MYjEJ81mDD6">
                            <GenericButton textColor={'#15BE60'} />
                        </Link>
                    </GridItem>

                </Grid>
            </Box>
        </Box >
    )
}

export default NewspaperBackdated