import { Box, Center, Grid, Heading, Text, GridItem, Link, Image, Flex } from "@chakra-ui/react";

export default function CoverArea() {
    return (
        <Box
            height={{ base: '70vh', md: '80vh' }}
            px={{ base: 8, md: 24 }}
            backgroundImage="url('assets/contact.png')"
            backgroundPosition={{ sm: 'center' }}
            border="none"
            color={'#fff'}
        >
            <Center flexDirection={'column'}>
                <Heading
                    as="h1"
                    fontSize={{ md: '36px' }}
                    color={'#fff'}
                    pt={24}
                > Contact us</Heading>
            </Center>
            <Grid templateColumns={{ md: 'repeat(3, 1fr)' }} mt={20}>

                <GridItem m="auto">
                    <Image src="/assets/sms-star.png" alt="sms-star" />
                    <Text fontFamily={'Syne'} fontSize={'22px'}> Email Address </Text>

                    <Text mt={4}>
                        <Link href="mailto:hello@solvent.com"> hello@solvent.com</Link>
                    </Text>
                </GridItem>

                <GridItem m="auto">
                    <Image src="/assets/headphone.png" alt="sms-star" />
                    <Text fontFamily={'Syne'} fontSize={'22px'}> Contact Line </Text>
                    <Text mt={4}>
                        <Link href="tel:+23490123456789"> +234 - 9012 - 345 -6789</Link>
                    </Text>
                </GridItem>

                <GridItem>
                    <Image src="/assets/sms-star.png" alt="sms-star" />
                    <Text fontFamily={'Syne'} fontSize={'22px'}> Social Media </Text>
                    <Box mt={4}>
                        <Flex gap={4}>
                            <Text color={'#15BE60'}> @SolventDigital </Text>
                            <Image src="/assets/tw.svg" alt="twitter" />
                            <Image src="/assets/fb.svg" alt="facebook" />
                            <Image src="/assets/msg.svg" alt="messenger" />
                            <Image src="/assets/ig.svg" alt="instagram" />
                        </Flex>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    )
}