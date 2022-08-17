import { Box, Center, Heading, Text, Button, Icon, Link, } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons"

export default function WhySolvent() {
    return (
        <Box
            bgColor={'#000'}
            py={{ base: '4rem' }}
            px={{ base: '2rem' }}
            border="none"
        >
            <Center flexDirection={'column'} transition="all .25s ease" >
                <Heading
                    as={'h1'}
                    fontSize={{ base: '24px', md: '36px' }}
                    lineHeight={'43px'}
                    color={'#fff'}
                    mb={4}
                    mt={'4rem'}

                >

                    Why Solvent?
                </Heading>
                <Text
                    fontSize={{ md: '16px' }}
                    lineHeight={{ base: '30px' }}
                    fontWeight={'400'}
                    color={'#fff'}
                    mb={4}
                    textAlign={{ md: 'center' }}
                    width={{ md: '73ch' }}
                >
                    We started from a glassy dining table, forming the best-of-the-best players in the marketing industry on a mission to help people
                    by solving their problems, with the vision to uncover hidden aptitudes within businesses and partnerships..
                </Text>
                <Link href="/about"
                    textDecoration="none">
                    <Button
                        width={{ md: '284px' }}
                        height={{ md: '58px' }}
                        bgColor={'#15BE60'}
                        variant={'solid'}
                        borderRadius={'none'}
                        color={'#fff'}
                        padding={{ base: '1rem' }}
                        _hover={{ background: '#15BE60' }}

                    >
                        <Text
                            textTransform={'uppercase'}
                            textAlign={"center"}
                            width={'100%'}
                        >
                            About Us
                        </Text>
                        <Icon
                            as={ArrowForwardIcon}
                            transition={'all .25s ease-in-out'}
                            w={4}
                            h={4}
                            ml={'auto'}
                        />
                    </Button>
                </Link>
            </Center>
        </Box>
    )
}