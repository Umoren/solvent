import { Box, Heading, Text, Center, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NewspaperPublications from "./NewspaperPublications";
import NewspaperBackdated from "./NewspaperBackdated";
import InternationalPublications from "./InternationalPublications";
import SocialMedia from "./SocialMedia";
import styles from './select.module.css';
import Captions from './Captions';
import GenericButton from "./Button";

export default function CoverArea() {
    const [selectPackage, setSelectPackage] = useState("newspaperPublication")
    const [newspaperPublication, setNewspaperPublication] = useState(false);
    const [newspaperBackdated, setNewspaperBackdated] = useState(false);
    const [internationalPublication, setInternationalPublication] = useState(false);
    const [socialMedia, setSocialMedia] = useState(false);
    const [captions, setCaptions] = useState(false)
    const [wikipedia, setWikipedia] = useState(false)
    const [knowledgePanel, setKnowledgePanel] = useState(false)
    const [mediaCleanup, setMediaCleanup] = useState(false)

    const handleOnChange = (e) => {
        setSelectPackage(e.target.value)
    }
    const makeOptionsCapitalLetter = (str) => {
        return str.toUpperCase();
    }
    const renderResult = () => {
        let result;
        selectPackage === "newspaperPublication"
            ? (result = "select package")
            : (makeOptionsCapitalLetter(selectPackage));
        return result;
    }

    useEffect(() => {
        selectPackage === "newspaperPublication" ? setNewspaperPublication(true) : setNewspaperPublication(false);
        selectPackage === "newspaperBackdated" ? setNewspaperBackdated(true) : setNewspaperBackdated(false);
        selectPackage === "international" ? setInternationalPublication(true) : setInternationalPublication(false)
        selectPackage === "socialMedia" ? setSocialMedia(true) : setSocialMedia(false)
        selectPackage === "captions" ? setCaptions(true) : setCaptions(false)
        selectPackage === "wikipedia" ? setWikipedia(true) : setWikipedia(false)
        selectPackage === "knowledgePanel" ? setKnowledgePanel(true) : setKnowledgePanel(false)
        selectPackage === "mediaCleanup" ? setMediaCleanup(true) : setMediaCleanup(false)
    })
    return (
        <>
            <Box
                px={{ base: 8, md: 24 }}
                backgroundImage="url('assets/newspaper-pub.png')"
                backgroundPosition={{ sm: 'center', md: 'revert' }}
                backgroundColor={'#000'}
                border="none"
                backgroundSize={{ xl: 'cover' }}
                backgroundRepeat={{ xl: 'no-repeat' }}
                position={'relative'}
                width={'100%'}
                bottom={'7.5rem'}
                zIndex={'0'}
                height={{ base: '75vh', md: '100vh' }}
            >
                <Center flexDirection={'column'} alignItems={'center'}>
                    <Heading
                        color={'#fff'}
                        fontWeight={'500'}
                        fontSize={{ base: '36px' }}
                        lineHeight={{ md: '43.2px' }}
                        width={{ base: '100%' }}
                        textAlign={'center'}
                        mt={{ base: '7rem', md: '10rem' }}
                    >
                        Our Packages
                    </Heading>

                    <select className={styles.select} placeholder='Select option' value={selectPackage} onChange={handleOnChange}>
                        <option value="newspaperPublication"> Newspaper Publications</option>
                        <option value="newspaperBackdated"> Newspaper Publication (Backdated)</option>
                        <option value="international"> International Publications </option>
                        <option value="socialMedia"> Social Media & Blogs </option>
                        <option value="captions"> CAPTIONS GENERATION & COPYWRITE</option>
                        <option value="wikipedia"> Wikipedia </option>
                        <option value="knowledgePanel"> Google Knowledge Panel </option>
                        <option value="mediaCleanup"> Media Cleanup </option>
                    </select>
                </Center>


                {newspaperPublication &&
                    <Box color={'#fff'}>
                        <Center flexDirection={'column'}>
                            <Text
                                fontWeight={400}
                                fontSize={{ md: '16px' }}
                                lineHeight={{ md: '36px' }}
                                textAlign={{ base: 'justify', md: 'center' }}
                                width={{ md: '77ch' }}
                                mt={4}
                            >
                                The brand provides newspaper article writing services for publications.
                                These articles connect a large readership with the assistance of different national daily newspapers.
                            </Text>
                            <Text
                                fontWeight={400}
                                fontSize={{ md: '16px' }}
                                lineHeight={{ md: '36px' }}
                                width={{ md: '70ch' }}
                                textAlign={{ base: 'justify', md: 'center' }}
                            >
                                Vanguard, Daily Sun, The Nation, Daily Independence, Leadership, Guardian, Tribune, Daily Times, Punch & This Day
                            </Text>
                        </Center>
                    </Box>

                }
                {newspaperBackdated &&
                    <Box color={'#fff'}>
                        <Center flexDirection={'column'}>
                            <Text
                                fontWeight={400}
                                fontSize={{ md: '16px' }}
                                lineHeight={{ md: '36px' }}
                                textAlign={'center'}
                                width={{ md: '77ch' }}
                                mt={4}
                            >
                                The brand provides newspaper article writing services for publications.
                                These articles connect a large readership with the assistance of different national daily newspapers.
                            </Text>
                            <Text
                                fontWeight={400}
                                fontSize={{ md: '16px' }}
                                lineHeight={{ md: '36px' }}
                                width={{ md: '70ch' }}
                                textAlign={'center'}
                            >
                                Vanguard, Daily Sun, The Nation, Daily Independence, Leadership, Guardian, Tribune, Daily Times, Punch & This Day
                            </Text>
                        </Center>
                    </Box>
                }

                {internationalPublication && <InternationalPublications />}
                {socialMedia &&
                    <Box color={'#fff'}>
                        <Center flexDirection={'column'}>
                            <Text
                                fontWeight={400}
                                fontSize={{ md: '16px' }}
                                lineHeight={{ md: '36px' }}
                                textAlign={'center'}
                                width={{ md: '77ch' }}
                                mt={4}
                            >
                                We recognize that liaising with the top social media blogs is a difficult task for the majority of business owners.
                                Our role is to facilitate communication between these clients and the blogs.
                                However, we act as an intermediary between a client and the blog&apos;s administrators.
                            </Text>
                        </Center>
                    </Box>
                }
                {captions &&
                    <Box color={'#fff'}>
                        <Center flexDirection={'column'}>
                            <Text
                                fontWeight={400}
                                fontSize={{ md: '16px' }}
                                lineHeight={{ md: '36px' }}
                                textAlign={'center'}
                                width={{ md: '77ch' }}
                                mt={4}
                            >
                                We help clients organize social media videos, pictures, and written narratives in the form of captions.
                                As part of this service, the clients who do not understand what to write about are relieved of their
                                boredom through storytelling.
                            </Text>
                        </Center>
                    </Box>
                }
                {wikipedia &&
                    <Box color={'#fff'}>
                        <Center flexDirection={'column'}>
                            <Text
                                fontWeight={400}
                                fontSize={{ md: '16px' }}
                                lineHeight={{ md: '36px' }}
                                textAlign={'center'}
                                width={{ md: '77ch' }}
                                my={8}
                            >
                                We build Wikipedia profile information for companies and individuals who use the marketplace.
                                It is because it makes them more trustworthy and available to the public. We also update personal
                                details and achievements to a Wikipedia biography page.
                            </Text>

                            <GenericButton label={"CONTACT US"} bgColor={'#15BE60'} textColor={'#fff'} />
                        </Center>
                    </Box>
                }
                {knowledgePanel &&
                    <Box color={'#fff'}>
                        <Center flexDirection={'column'}>
                            <Text
                                fontWeight={400}
                                fontSize={{ md: '16px' }}
                                lineHeight={{ md: '36px' }}
                                textAlign={'center'}
                                width={{ md: '77ch' }}
                                my={8}
                            >
                                As Google expands, the number of themes that accelerate a robust outcome, the panels are more significant for marketing.
                                Our skills, on the other hand, are put to use in the creation of an individual verification process, as well as a comprehensive
                                frame work of personal details and organization statuses.
                            </Text>

                            <GenericButton label={"CONTACT US"} bgColor={'#15BE60'} textColor={'#fff'} />
                        </Center>
                    </Box>
                }
                {mediaCleanup &&
                    <Box color={'#fff'}>
                        <Center flexDirection={'column'}>
                            <Text
                                fontWeight={400}
                                fontSize={{ md: '16px' }}
                                lineHeight={{ md: '36px' }}
                                textAlign={'center'}
                                width={{ md: '77ch' }}
                                my={8}
                            >
                                Defamation and other internet reputational damages have always caused more harm than good.
                                On the other hand, it only takes one online defamatory post to harm someone&apos;s reputation.
                                As a result, it is critical to erase the false and misleading assertions swiftly,
                                to prevent further spread and curb impending damages.
                            </Text>

                            <GenericButton label={"CONTACT US"} bgColor={'#15BE60'} textColor={'#fff'} />
                        </Center>
                    </Box>
                }
            </Box>
            <Box
                bgColor="#000"
            >
                {newspaperPublication && <NewspaperPublications />}
                {newspaperBackdated && <NewspaperBackdated />}
                {socialMedia && <SocialMedia />}
                {captions && <Captions />}
            </Box>
        </>
    )
}