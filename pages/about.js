import { Box } from "@chakra-ui/react";
import CoverArea from "../components/About/CoverArea";
import Objectives from "../components/About/Objectives";
import Team from "../components/About/Team";
import Value from "../components/About/Value";
import BlogSection from "../components/Blog/BlogSection";
import Navbar from "../components/About/Navbar";
export default function About() {
    return (
        <Box>
            <Navbar />
            <CoverArea />
            <Objectives />
            <Value />
            <Team />
            <BlogSection />
        </Box>
    )
}