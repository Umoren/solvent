import { Button, Box, Icon } from "@chakra-ui/react";
import CoverArea from "../components/Homepage/CoverArea";
import KnowledgePanel from "../components/Homepage/KnowledgePanel";
import MediaCleanup from "../components/Homepage/MediaCleanup";

import Newspaper from "../components/Homepage/Newspaper";
import Niche from "../components/Homepage/Niche";
import SocialMedia from "../components/Homepage/SocialMedia";
import WhySolvent from "../components/Homepage/WhySolvent";
import BlogSection from "../components/Blog/BlogSection";
import { ArrowForwardIcon } from "@chakra-ui/icons"

export default function Home() {
  return (
    <div >
      <CoverArea />
      <WhySolvent />
      <Niche />
      <Newspaper />
      <KnowledgePanel />
      <MediaCleanup />
      <SocialMedia />
      <Box
        bgColor={'#000'}
        height={{ md: '20vh' }}
        color={'#fff'}
        display={{ base: "flex", md: 'grid' }}
        justifyContent={{ base: 'center', }}
        placeContent={{ md: 'center' }}
        border="none"
      >
        <Box
          as='button'
          height={{ md: '58px' }}
          width={{ md: '284px' }}
          lineHeight='1.2'
          transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
          border='1px'
          padding={{ base: '1rem', md: '0' }}
          marginTop={{ base: '3rem', md: '0' }}
          marginBottom={{ base: '2rem', md: '0' }}
          px='8px'
          fontSize='18px'
          fontWeight='500'
          borderColor='#15BE60'
          color='#15BE60'
          textTransform={'uppercase'}
          _active={{
            bg: '#dddfe2',
            transform: 'scale(0.98)',
            borderColor: '#bec3c9',
          }}
          _focus={{
            boxShadow:
              '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
          }}
        >
          View All Services
          <Icon
            as={ArrowForwardIcon}
            transition={'all .25s ease-in-out'}
            w={4}
            h={4}
            ml={2}
          />
        </Box>
      </Box>

      <BlogSection />

    </div>
  )
}
