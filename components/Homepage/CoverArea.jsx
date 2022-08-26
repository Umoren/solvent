import { Box, Heading, Text } from "@chakra-ui/react";


export default function CoverArea() {
    return (
        <Box
            px={{ base: 8, md: 24 }}
            backgroundImage="url('assets/coverArea.png')"
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            backgroundPosition={{ sm: 'center', md: 'revert', }}
            backgroundSize={{ xl: 'cover' }}
            backgroundRepeat={{ xl: 'no-repeat' }}
            backgroundAttachment={'fixed'}
            border="none"
            position={'relative'}
            width={'100%'}
            bottom={'7.5rem'}
            zIndex={'0'}
            height={'100vh'}
        >
            <Heading
                color={'#fff'}
                fontWeight={'500'}
                fontSize={{ base: '24px', md: '48px' }}
                lineHeight={{ md: '62px' }}
                width={{ md: '27ch', base: '100%' }}
            >
                We nurture your brand from the growth and development stage to a point of recognition.
            </Heading>

            <Text
                color={'#D0D0D0'}
                lineHeight={'30px'}
                fontWeight={'400'}
                width={{ md: '52ch' }}
            >
                Solvent is a multi-national digital agency with the aim to transform businesses into reputable brands,
                while protecting its image with the right digital solutions.
            </Text>
        </Box>
    )
}