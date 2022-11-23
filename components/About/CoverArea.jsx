import { Box, Heading, Text, Center, Link } from "@chakra-ui/react";
import Button from '../Packages/Button';

export default function CoverArea() {
    return (
        <Box
            px={{ base: 8, md: 24 }}
            backgroundImage="url('assets/about.png')"
            display={'flex'}
            mt={{ base: '1rem', md: '0rem' }}
            pt={{ base: '3rem' }}
            flexDirection={'column'}
            justifyContent={'center'}
            textAlign={'justify'}
            backgroundPosition={{ md: 'revert' }}
            backgroundColor={'#000'}
            border="none"
            backgroundSize={{ xl: 'cover' }}
            backgroundRepeat={{ xl: 'no-repeat' }}
            position={'relative'}
            width={'100%'}
            bottom={'7.5rem'}
            zIndex={'0'}
            height={'100vh'}
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
                    fontSize={'14px'}
                    textAlign={{ base: 'justify', md: 'center' }}
                    mt={2}
                    width={{ md: '78ch', base: '100%' }}
                >
                    Over the years, the brand has succeeded in providing clients across the world with topnotch services. These services are however utilized to propagate and provide a framework through which people are viewed and understood positively. The overarching goal of the brand is centered on image and capacity building, which is illustrated through the multifaceted functions of the brand. Our utmost value is to create a reliable management style which thrives in a trusting environment. However, we deliver
                    superlative, resourceful, and tactical communications which are reinforced by the industry’s leading processes.
                </Text>

                <Box my={8}>
                    <Link
                        href="https://drive.google.com/file/d/1Wlt0emC4SNrRP4u61gBngNvLK83LfCLy/view?usp=sharing"
                    >

                        <Button label="View our Portfolio" style={{ fontSize: "14px" }} />
                    </Link>
                </Box>

            </Center>

        </Box>
    )
}