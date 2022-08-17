import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ArrowForwardIcon,
} from '@chakra-ui/icons';

export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box>
            <Flex
                bgColor={'transparent'}
                position={'relative'}
                zIndex={2}
                top={{ base: '-1rem' }}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 8 }}
                px={{ base: 8, md: 24 }}
                align={'center'}
                backgroundPosition={{ sm: 'center', md: 'revert', }}
                backgroundSize={{ xl: 'cover' }}
                backgroundRepeat={{ xl: 'no-repeat' }}
            >
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Link href="/">
                        <img src="/assets/solvent.png" alt="Logo" />
                    </Link>
                    <Flex display={{ base: 'none', md: 'flex' }} width="100%" alignItems="center" justifyContent="center" ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>

                    <Link href="/packages">
                        <Button
                            display={{ base: 'none', md: 'inline-flex' }}
                            fontSize={'xs'}
                            textTransform={'uppercase'}
                            fontWeight={600}
                            color={'white'}
                            variant={'outline'}
                            bg={'transparent'}
                            borderRadius={'none'}
                            padding="1.5rem"
                            _hover={{
                                bg: 'white',
                                color: '#000'
                            }}>
                            Explore Our packages
                            <Icon
                                as={ArrowForwardIcon}
                                transition={'all .25s ease-in-out'}
                                w={4}
                                h={4}
                                ml={8}
                            />
                        </Button>
                    </Link>

                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('white', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.500', 'white');

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                < Box key={navItem.label} >
                    <Link
                        p={2}
                        href={navItem.href ?? '#'}
                        fontSize={'sm'}
                        fontWeight={500}
                        color={linkColor}
                        _hover={{
                            textDecoration: 'none',
                            color: linkHoverColor,
                        }}
                        textTransform="uppercase"
                    >
                        {navItem.label}
                    </Link>

                </Box>
            ))
            }
        </Stack >
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={'#000'}
            height={'75vh'}
            p={4}
            color={'white'}
            display={{ md: 'none' }}>
            {MOBILE_NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={onToggle} >
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.100', 'gray.200')}>
                    {label}
                </Text>


            </Flex>
        </Stack>
    );
};


const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'About Us',
        href: '/about',
    },
    {
        label: 'Blog',
        href: '/blog',
    },
    {
        label: 'Contact Us',
        href: '/contact',
    },
];

const MOBILE_NAV_ITEMS = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'About Us',
        href: '/about',
    },
    {
        label: 'Blog',
        href: '/blog',
    },
    {
        label: 'Contact Us',
        href: '/contact',
    },
    {
        label: 'Explore Packages',
        href: '/packages'
    }
];