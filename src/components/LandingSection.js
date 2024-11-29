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

      <Heading>Hi, I am Shubham</Heading>
      <h3>A full-stack developer</h3>




    </VStack>

  </FullScreenSection>
);

export default LandingSection;
