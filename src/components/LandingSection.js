import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import shubhamImage from '../images/shubhamsmile1.png';




// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#000000"
    id="landing-section"
  >
    <VStack>

      <Avatar name="Shubham"
        src={shubhamImage}
        size="2xl"
        variant="subtle"
      ></Avatar>

      <h1>Hi, I am Shubham</h1>
      <Heading>A passionate full-stack developer.</Heading>
      <h1>Explore my portfolio below to see my latest projects and discover how I can bring value to your team.</h1>




    </VStack>

  </FullScreenSection>
);

export default LandingSection;
