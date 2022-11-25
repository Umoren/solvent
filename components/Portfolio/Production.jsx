import { Box, Grid, GridItem, Heading, Link, Text } from "@chakra-ui/react"
import { production } from "../../mock/production"
import Image from 'next/image'

const Production = () => {
    return (
        <Box textColor={'white'} px={{ base: 8, md: 24 }}>
            <Heading
                as="h1"
                fontSize={{ base: '24px', md: '48px', }}
                lineHeight={'32.4px'}
                fontWeight={'800'}
                py={{ base: 0, md: 4 }}
                mt={{ base: 8, md: 0 }}
                textAlign={'center'}
            >
                Production
            </Heading>
            {production.map(product => (
                <Box key={product.id}>
                    <Grid templateColumns={{ md: 'repeat(2, 1fr)' }} mb={24} mt={{ base: 0, sm: 8 }}>
                        <GridItem
                            width={'100%'}
                            px={{ base: 8 }}
                            p={0}
                        >
                            <Heading
                                as="h5"
                                fontSize={{ base: '24px', md: '36px' }}
                                lineHeight={'32.4px'}
                                fontWeight={'500'}
                                py={4}
                                mt={{ base: 8, md: 0 }}
                            >
                                {product.name}
                            </Heading>

                            <Text
                                fontWeight={'400'}
                                fontSize={{ md: '16px' }}
                                lineHeight={'30px'}
                                width={{ md: '60ch' }}
                                mb={4}
                            >

                                Framework:  {product.framework}
                            </Text>

                            {product?.about?.episode && (<Text
                                fontWeight={'400'}
                                fontSize={{ md: '16px' }}
                                lineHeight={'30px'}
                                width={{ md: '60ch' }}
                                mb={4}
                            >

                                Number of Episodes:  {product.about.episode}
                            </Text>)}

                            <Text
                                fontWeight={'400'}
                                fontSize={{ md: '16px' }}
                                lineHeight={'30px'}
                                width={{ md: '60ch' }}
                                mb={4}
                            >

                                Platform:  {product.about.platform}
                            </Text>

                            {product?.about?.views && (<Text
                                fontWeight={'400'}
                                fontSize={{ md: '16px' }}
                                lineHeight={'30px'}
                                width={{ md: '60ch' }}
                                mb={4}
                            >

                                Total Number of Views:  {product.about.episode}
                            </Text>)}

                            <Text
                                fontWeight={'400'}
                                fontSize={{ md: '16px' }}
                                lineHeight={'30px'}
                                width={{ md: '60ch' }}
                                mb={4}
                            >

                                For more info:
                                <Link href={product.link}> See More </Link>
                            </Text>


                        </GridItem>

                        <GridItem>
                            <Image
                                src={product.image}
                                placeholder="blur"
                                quality={100}
                                width={product.width}
                                height={product.height}
                                objectFit="contain"
                                blurDataURL={`data:application/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48RXJyb3I+PENvZGU+SHR0cFZlcnNpb25Ob3RTdXBwb3J0ZWQ8L0NvZGU+PE1lc3NhZ2U+VGhlIEhUVFAgdmVyc2lvbiBzcGVjaWZpZWQgaXMgbm90IHN1cHBvcnRlZC48L01lc3NhZ2U+PFJlcXVlc3RJZD43MkQ4NUVCQkMxQjg3QUVGPC9SZXF1ZXN0SWQ+PEhvc3RJZD5FdWxFc05sTWVLYnBHNStSVlc1bWFFTWlENzJNQ1pCTW8zbytGWmJuVnBYVVJrV1RQZkxoZC9iSWpoa0pUWDJ3czBOSVJQQVcyNGY1U3BwdUNEVkQwK25qQVkvbDNsVDQ8L0hvc3RJZD48L0Vycm9yPg==`}
                                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                        </GridItem>
                    </Grid>
                </Box>
            ))}

        </Box>
    )
}

export default Production