import React from "react";
import { Avatar, Heading, VStack,Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Shubham!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";



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
        size="2xl"
        variant="subtle"
        src = "https://i.postimg.cc/jW6hDbqc/tsiocursordp.png"
        
      />

      <Text 
      as="h1" 
      color="#D6D8DA" 
      textAlign="center"
      size="l"
      p={2}
      >{greeting}</Text>

      <Heading as="h1"
        textAlign="center"
        size="2xl"
        color="#D6D8DA"
        ml={10}
        mr={10}
      >
        {bio1} {bio2}
      </Heading>




    </VStack>

  </FullScreenSection>
);

export default LandingSection;
