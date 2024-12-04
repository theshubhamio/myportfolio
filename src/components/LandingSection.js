import React from "react";
import { Avatar, Heading, VStack,Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import shubhamImage from '../images/tsiocursordp.png';





// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#0B0C10"
    id="landing-section"
  >

    <VStack>

      <Avatar
        name="Shubham"
        src={shubhamImage}
        size="2xl"
        variant="subtle"
        
      />

      <Text 
      as="h1" 
      color="#D6D8DA" 
      textAlign="center"
      size="l"
      p={2}
      >Hi, I am Shubham</Text>

      <Heading as="h1"
        textAlign="center"
        size="2xl"
        color="#D6D8DA"
        ml={10}
        mr={10}
      >
        A front-end developer
      </Heading>




    </VStack>

  </FullScreenSection>
);

export default LandingSection;
