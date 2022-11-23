import { Box, Center, Heading, LinkBox, Link, Icon, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Link as NextLink } from 'next/link';

export default function Value() {
    return (
        <Box
            bgColor={'#000'}
            color={'#fff'}
            display={{ md: 'grid' }}
            placeContent={{ md: 'center' }}
            border="none"
            style={{ border: 'none' }}
            py={{ base: '2rem', md: "4rem" }}
            px={{ base: '2rem' }}
        >
            <Center flexDir={'column'} alignItems={'center'}>
                <Heading
                    fontWeight={500}
                    fontSize={'36px'}
                    textAlign={'center'}
                >
                    Our Value Proposition
                </Heading>

                <Text
                    fontWeight={400}
                    fontSize={{ md: '16px' }}
                    lineHeight={'36px'}
                    width={{ md: '69ch' }}
                    my={'1.5rem'}
                    textAlign={'center'}
                >
                    The first thing to building a brand will be a name. That’s not very correct. It begins with a very nice logo?
                    No, not exactly, but, if you ask the right questions, we thought, it might produce us a name.
                    Solvent, our value alone is in its name. A substance that dissolves a solute, resulting in a solution is what we stand for. We’re that substance, dissolving
                    whatever possible digital problems there is, and delivering that solution to you on a platter of a Job-Well-Done!
                </Text>

                <LinkBox mt={4}>
                    <Link
                        href="https://drive.google.com/file/d/1Wlt0emC4SNrRP4u61gBngNvLK83LfCLy/view?usp=sharing"
                        color="#15BE60"
                        fontWeight="400"
                        lineHeight="19.2px"
                    >
                        Learn More
                        <Icon
                            as={ArrowForwardIcon}
                            transition={'all .25s ease-in-out'}
                            w={4}
                            h={4}
                            ml={2}
                        />
                    </Link>
                </LinkBox>
            </Center>
        </Box>
    )
}