import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box
            bgColor={'#000'}
            color={'#fff'}
        >
            <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Box mb={'2.5rem'}>
                    <Image
                        src="/assets/barChart.svg"
                        alt="footerIcon"
                        width={"65px"}
                        height={"65px"}
                        margin={'auto'}
                    />
                    <Text
                        fontWeight={'400'}
                        fontSize={{ md: '20px' }}
                        lineHeight={'46px'}
                        textAlign={'center'}
                        width={'55ch'}
                    >
                        Our job is to nurture your brand from the growth and development stage to a point
                        of recognition and building a reputable online presence. We can go on,
                        but we’ll let our portfolio speak for itself.
                    </Text>
                </Box>
                <Box borderTop={'1px solid #FFFFFF'} opacity={'0.2'} width={'100%'}>
                </Box>

                <Box
                    py={'2.5rem'}
                >
                    <Image
                        src="/assets/solvent.svg"
                        alt="solvent logo"
                        width="159px"
                        height=" 31.05px"
                        opacity={'0.9'}
                        m={'auto'}
                    />
                    <Text
                        opacity={'1'}
                    >
                        © Solvent Inc. All rights reserved.
                    </Text>
                </Box>
            </Flex>
        </Box>
    )
}