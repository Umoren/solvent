import { Box, Center, Heading, Text, Button, Icon } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons"

export default function WhySolvent() {
    return (
        <Box
            bgColor={'#000'}
            height={{ md: '50vh' }}
        >
            <Center flexDirection={'column'} >
                <Heading
                    as={'h3'}
                    fontSize={{ md: '36px' }}
                    lineHeight={'43px'}
                    color={'#fff'}
                    mb={4}
                    mt={'4rem'}
                >

                    Why Solvent?
                </Heading>
                <Text
                    fontSize={{ md: '16px' }}
                    lineHeight={{ md: '36px' }}
                    fontWeight={'400'}
                    color={'#fff'}
                    mb={4}
                    textAlign={'center'}
                    width={{ md: '73ch' }}
                >
                    We started from a glassy dining table, forming the best-of-the-best players in the marketing industry on a mission to help people
                    by solving their problems, with the vision to uncover hidden aptitudes within businesses and partnerships..
                </Text>
                <Button
                    width={{ md: '284px' }}
                    height={{ md: '58px' }}
                    bgColor={'#15BE60'}
                    variant={'solid'}
                    borderRadius={'none'}
                    color={'#fff'}
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
            </Center>
        </Box>
    )
}