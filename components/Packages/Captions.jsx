import { Box, Center, Grid, GridItem, Heading, Image, Text, Badge } from "@chakra-ui/react"
import GenericButton from "./Button";

const Captions = () => {
    return (
        <Box color={'white'} height={{ md: '50vh' }} mt={{ md: '-10rem' }} mb={{ md: '5rem' }} position={'relative'} top={{ md: '-3rem' }}>

            <Box pb={{ base: 16 }} pt={{ base: 0, md: 0 }} m={{ base: 'auto', md: '0 0 0 6rem' }} px={{ base: '0', md: '0' }} mt={{ md: '-10rem' }} mb={{ md: '5rem' }}>
                <Grid templateColumns={{ md: 'repeat(2, 1fr)' }} placeContent={{ base: 'center', md: 'auto' }}>
                    <GridItem display="flex" flexDirection={'column'} gap={4} m='auto'>
                        <Text fontSize={'16px'}> Monthly Package </Text>
                        <Heading
                            as="h3"
                            fontWeight="700"
                            fontSize={{ base: '30px', md: '40px' }}
                            fontFamily={'IBM Plex Sans'}
                            mb={16}
                        >
                            ₦20,000
                            <span style={{ fontSize: '16px' }}> per month</span>
                        </Heading>

                        <GenericButton textColor={'#15BE60'} />
                    </GridItem>

                    <GridItem display="flex" flexDirection={'column'} gap={4}>
                        <Text fontSize={'16px'}> Basic Package </Text>
                        <Heading
                            as="h3"
                            fontWeight="700"
                            fontSize={{ base: '30px', md: '40px' }}
                            fontFamily={'IBM Plex Sans'}
                            mb={16}
                        >
                            ₦200,000
                            <span style={{ fontSize: '16px' }}> per year</span>
                        </Heading>

                        <GenericButton textColor={'#15BE60'} />
                    </GridItem>

                </Grid>
            </Box>
        </Box >
    )
}

export default Captions