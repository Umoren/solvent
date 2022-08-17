import { Box, Heading, Text, Center } from "@chakra-ui/react";

export default function CoverArea() {
    return (
        <Box
            height={{ base: '100vh', md: '80vh' }}
            px={{ base: 8, md: 24 }}
            backgroundImage="url('assets/about.png')"
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            backgroundPosition={{ sm: 'center', md: 'revert' }}
            backgroundColor={'#000'}
            border="none"
            backgroundSize={{ xl: 'cover' }}
            backgroundRepeat={{ xl: 'no-repeat' }}
        >
            <Center flexDirection={'column'} alignItems={'center'}>
                <Heading
                    color={'#fff'}
                    fontWeight={'500'}
                    fontSize={{ base: '36px' }}
                    lineHeight={{ md: '43.2px' }}
                    width={{ base: '100%' }}
                    textAlign={'center'}
                >
                    About Us
                </Heading>

                <Text
                    color={'#D0D0D0'}
                    lineHeight={'30px'}
                    fontWeight={'400'}
                    textAlign={'center'}
                    mt={8}
                    width={{ md: '78ch', base: '100%' }}
                >
                    Over the years, the brand has succeeded in providing clients across the world with topnotch services. These services are however utilized to propagate and provide a framework through which people are viewed and understood positively. The overarching goal of the brand is centered on image and capacity building, which is illustrated through the multifaceted functions of the brand. Our utmost value is to create a reliable management style which thrives in a trusting environment. However, we deliver
                    superlative, resourceful, and tactical communications which are reinforced by the industry’s leading processes.
                </Text>
            </Center>

        </Box>
    )
}