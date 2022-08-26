import { Box, Center, Grid, Heading, Text, GridItem, Link, Image, Flex } from "@chakra-ui/react";

export default function CoverArea() {
    return (
        <Box
            px={{ base: 16, md: 24 }}
            pt={{ md: 28 }}
            backgroundImage="url('assets/contact.png')"
            backgroundPosition={{ base: '100% 10%', md: 'revert' }}
            border="none"
            color={'#fff'}
            backgroundSize={{ xl: 'cover' }}
            backgroundRepeat={{ base: 'no-repeat', xl: 'no-repeat' }}
            position={'relative'}
            width={'100%'}
            bottom={'7.5rem'}
            zIndex={'0'}
            height={'100vh'}
        >
            <Center flexDirection={'column'}>
                <Heading
                    as="h1"
                    fontSize={{ base: '36px' }}
                    color={'#fff'}
                    pt={24}
                > Contact us</Heading>
            </Center>
            <Grid templateColumns={{ md: 'repeat(3, 1fr)' }} mt={8} rowGap={{ base: 30 }}>

                <GridItem m={{ md: "auto" }}>
                    <Image src="/assets/sms-star.png" alt="sms-star" />
                    <Text fontFamily={'Syne'} fontSize={'22px'}> Email Address </Text>

                    <Text mt={4}>
                        <Link href="mailto:hello@solvent.com"> hello@solvent.com</Link>
                    </Text>
                </GridItem>

                <GridItem m={{ md: 'auto' }}>
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
                        <Flex alignCenter={'center'}>
                            <Text color={'#15BE60'}> @SolventDigital </Text>
                            <Link href="https://twitter.com/solventdigital?s=21&t=8-q7WBo-_h4cyH_0UI5NoQ" m="auto">
                                <Image src="/assets/tw.svg" alt="twitter" />
                            </Link>
                            <Link href="https://www.facebook.com/Solvent-Digital-106635372163615/" m="auto">
                                <Image src="/assets/fb.svg" alt="facebook" />
                            </Link>
                            <Link m="auto">
                                <Image src="/assets/msg.svg" alt="messenger" />
                            </Link>
                            <Link href="https://instagram.com/solventdigital?igshid=YmMyMTA2M2Y=" m="auto">
                                <Image src="/assets/ig.svg" alt="instagram" />
                            </Link>
                            <Link href="https://www.tiktok.com/@solventdigital?_t=8UuUNpHecLd&_r=1" m="auto">
                                <Image src="/assets/tiktok.svg" alt="tiktok" />
                            </Link>
                        </Flex>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    )
}