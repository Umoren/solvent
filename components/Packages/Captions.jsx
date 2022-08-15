import { Box, Center, Grid, GridItem, Heading, Image, Text, Badge } from "@chakra-ui/react"
import GenericButton from "./Button";

const Captions = () => {
    return (
        <Box color={'white'} height={{ md: '50vh' }}>

            <Box py={16} m={{ base: 'auto', md: '0 0 0 6rem' }} px={{ base: '0', md: '0' }}>
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

                        <GenericButton textColor={'#15BE60'} mt={8} />
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