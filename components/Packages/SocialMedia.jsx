import { Box, Center, Grid, GridItem, Heading, Image, Text, Badge } from "@chakra-ui/react"
import GenericButton from "./Button";

const NewspaperPublications = () => {
    return (
        <Box color={'white'}>


            <Box py={16} m={{ base: 'auto', md: '0 0 0 6rem' }} px={{ base: '0', md: '0' }}>
                <Grid templateColumns={{ md: 'repeat(3, 1fr)' }} placeContent={{ base: 'center', md: 'auto' }} rowGap={{ base: '30', md: '40' }}>

                    <GridItem>
                        <Text mb={8} fontFamily={'IBM Plex Sans'}> Instablog Package </Text>
                        <GenericButton textColor={'#15BE60'} />
                    </GridItem>

                    <GridItem>
                        <Text mb={8} fontFamily={'IBM Plex Sans'}> Tundeednut Package </Text>
                        <GenericButton textColor={'#15BE60'} />
                    </GridItem>

                    <GridItem>
                        <Text mb={8} fontFamily={'IBM Plex Sans'}> Yabaleft Package </Text>
                        <GenericButton textColor={'#15BE60'} />
                    </GridItem>

                    <GridItem>
                        <Text mb={8} fontFamily={'IBM Plex Sans'}> Krakstv Package </Text>
                        <GenericButton textColor={'#15BE60'} />
                    </GridItem>

                    <GridItem>
                        <Text mb={8} fontFamily={'IBM Plex Sans'}> Krakstv Package </Text>
                        <GenericButton textColor={'#15BE60'} />
                    </GridItem>

                    <GridItem>
                        <Text mb={8} fontFamily={'IBM Plex Sans'}> Funnyafricanpics Package </Text>
                        <GenericButton textColor={'#15BE60'} />
                    </GridItem>

                    <GridItem>
                        <Text mb={8} fontFamily={'IBM Plex Sans'}> Gossipmill Package </Text>
                        <GenericButton textColor={'#15BE60'} />
                    </GridItem>

                    <GridItem>
                        <Text mb={8} fontFamily={'IBM Plex Sans'}> Premium Package</Text>
                        <Heading as="h1" fontSize={{ base: '30px', md: '40px' }}> Custom To You </Heading>
                        <Text fontSize={'12px'} fontWeight={'400'} my={4} color={'#B3B3B3'}> Select 2 or more packages, of your prefferred choice. </Text>
                        <GenericButton textColor={'#fff'} bgColor={'#15BE60'} />
                    </GridItem>


                </Grid>
            </Box>
        </Box >
    )
}

export default NewspaperPublications