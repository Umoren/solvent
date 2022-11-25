import { Box, Heading, Text, Grid, Stack, GridItem } from "@chakra-ui/react"
import Link from "next/link"
import Image from "next/image"

const Portfolio = () => {
    return (
        <Box textColor={'white'} px={{ base: 8, md: 24 }} mb={24} >
            <Box mb={10}>
                <Heading
                    as="h1"
                    fontSize={{ base: '36px' }}
                    color={'#fff'}
                    pt={2}
                    textAlign={'center'}
                    mb={8}
                > Our Portfolio</Heading>

                <Text textAlign={'center'}> We have a very strong Portfolio in Verification, Production, and Publication</Text>
            </Box>

            <Box >
                <Text> View our portfolio on...</Text>

                <Grid templateColumns={{ md: 'repeat(3, 1fr)' }} gridGap={'6'}>
                    <Link href={'/portfolio/production'}>
                        <GridItem cursor={'pointer'}>
                            <Box
                                maxWidth={'345px'}
                                height={'390px'}
                                bg={'#fff'}
                                boxShadow={'2xl'}
                                rounded={'none'}
                                p={6}
                                color={'#fff'}
                                overflow={'hidden'}
                                position={'relative'}
                            >
                                <Box
                                    bg={'gray.900'}
                                    mt={-6}
                                    mx={-6}
                                    mb={6}
                                    pos={'relative'}
                                >
                                    <Image
                                        src={`https://res.cloudinary.com/sammy365/image/upload/v1669382425/solvent/brianjotterYT_fcwd4y.jpg`}
                                        placeholder="blur"
                                        quality={100}
                                        width={1125}
                                        height={1000}
                                        objectFit="contain"
                                        blurDataURL={`data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48RXJyb3I+PENvZGU+SHR0cFZlcnNpb25Ob3RTdXBwb3J0ZWQ8L0NvZGU+PE1lc3NhZ2U+VGhlIEhUVFAgdmVyc2lvbiBzcGVjaWZpZWQgaXMgbm90IHN1cHBvcnRlZC48L01lc3NhZ2U+PFJlcXVlc3RJZD43MkQ4NUVCQkMxQjg3QUVGPC9SZXF1ZXN0SWQ+PEhvc3RJZD5FdWxFc05sTWVLYnBHNStSVlc1bWFFTWlENzJNQ1pCTW8zbytGWmJuVnBYVVJrV1RQZkxoZC9iSWpoa0pUWDJ3czBOSVJQQVcyNGY1U3BwdUNEVkQwK25qQVkvbDNsVDQ8L0hvc3RJZD48L0Vycm9yPg==`}
                                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
                                        style={{
                                            maxWidth: '100%',
                                            height: 'auto',
                                        }}
                                    />
                                </Box>
                                <Stack mx={6}>
                                    <Text color={'#000'} textAlign={'center'} fontSize={'24px'} >
                                        Production
                                    </Text>
                                </Stack>
                            </Box>
                        </GridItem>
                    </Link>

                    <GridItem cursor={'pointer'}>
                        <Link href={'/portfolio/publication'}>
                            <Box
                                maxWidth={'345px'}
                                height={'390px'}
                                bg={'#fff'}
                                boxShadow={'2xl'}
                                rounded={'none'}
                                p={6}
                                color={'#fff'}
                                overflow={'hidden'}
                                position={'relative'}
                            >
                                <Box
                                    bg={'gray.900'}
                                    mt={-6}
                                    mx={-6}
                                    mb={6}
                                    pos={'relative'}
                                >
                                    <Image
                                        src={`https://res.cloudinary.com/sammy365/image/upload/v1669382428/solvent/independent_dr8zl0.jpg`}
                                        placeholder="blur"
                                        quality={100}
                                        width={1125}
                                        height={1000}
                                        objectFit="contain"
                                        blurDataURL={`data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48RXJyb3I+PENvZGU+SHR0cFZlcnNpb25Ob3RTdXBwb3J0ZWQ8L0NvZGU+PE1lc3NhZ2U+VGhlIEhUVFAgdmVyc2lvbiBzcGVjaWZpZWQgaXMgbm90IHN1cHBvcnRlZC48L01lc3NhZ2U+PFJlcXVlc3RJZD43MkQ4NUVCQkMxQjg3QUVGPC9SZXF1ZXN0SWQ+PEhvc3RJZD5FdWxFc05sTWVLYnBHNStSVlc1bWFFTWlENzJNQ1pCTW8zbytGWmJuVnBYVVJrV1RQZkxoZC9iSWpoa0pUWDJ3czBOSVJQQVcyNGY1U3BwdUNEVkQwK25qQVkvbDNsVDQ8L0hvc3RJZD48L0Vycm9yPg==`}
                                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
                                        style={{
                                            maxWidth: '100%',
                                            height: 'auto',
                                        }}
                                    />
                                </Box>
                                <Stack mx={6}>
                                    <Text color={'#000'} textAlign={'center'} fontSize={'24px'} >
                                        Publication
                                    </Text>
                                </Stack>
                            </Box>
                        </Link>
                    </GridItem>

                    <GridItem cursor={'pointer'}>
                        <Link href={'/portfolio/verification'}>
                            <Box
                                maxWidth={'345px'}
                                height={'390px'}
                                bg={'#fff'}
                                boxShadow={'2xl'}
                                rounded={'none'}
                                p={6}
                                color={'#fff'}
                                overflow={'hidden'}
                                position={'relative'}
                            >
                                <Box
                                    bg={'gray.900'}
                                    mt={-6}
                                    mx={-6}
                                    mb={6}
                                    pos={'relative'}
                                >
                                    <Image
                                        src={`https://res.cloudinary.com/sammy365/image/upload/v1669382425/solvent/bo_hairs_rapkbc.jpg`}
                                        placeholder="blur"
                                        quality={100}
                                        width={1125}
                                        height={1000}
                                        objectFit="contain"
                                        blurDataURL={`data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48RXJyb3I+PENvZGU+SHR0cFZlcnNpb25Ob3RTdXBwb3J0ZWQ8L0NvZGU+PE1lc3NhZ2U+VGhlIEhUVFAgdmVyc2lvbiBzcGVjaWZpZWQgaXMgbm90IHN1cHBvcnRlZC48L01lc3NhZ2U+PFJlcXVlc3RJZD43MkQ4NUVCQkMxQjg3QUVGPC9SZXF1ZXN0SWQ+PEhvc3RJZD5FdWxFc05sTWVLYnBHNStSVlc1bWFFTWlENzJNQ1pCTW8zbytGWmJuVnBYVVJrV1RQZkxoZC9iSWpoa0pUWDJ3czBOSVJQQVcyNGY1U3BwdUNEVkQwK25qQVkvbDNsVDQ8L0hvc3RJZD48L0Vycm9yPg==`}
                                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
                                        style={{
                                            maxWidth: '100%',
                                            height: 'auto',
                                        }}
                                    />
                                </Box>
                                <Stack mx={6}>
                                    <Text color={'#000'} textAlign={'center'} fontSize={'24px'} >
                                        Verification
                                    </Text>
                                </Stack>
                            </Box>
                        </Link>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    )
}

export default Portfolio