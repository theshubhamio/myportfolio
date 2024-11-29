import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      align="flex-start"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      width="90%"
      alignItems="center"
      justifyContent="center"
      boxShadow="md"
      backgroundColor="gray.500"
      backdropFilter="blur(0.5px)"
      

      background="linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,1) 100%)"

    >
      {/* Image Section */}
      <Image src={imageSrc}
        alt={title} width="100%"
        style={{
          filter: "grayscale(1%)",
          opacity: 0.9
        }}

         />

      {/* Content Section */}
      <VStack align="flex-start"
        p={4}
        spacing={4}
      >
        {/* Title */}
        <Heading as="h3" size="md" color="gray.50">
          {title}
        </Heading>
        {/* Description */}
        <Text color="gray.200" fontSize="sm">
          {description}
        </Text>
        {/* See More Section */}
        <HStack spacing={2} color="gray.100" cursor="pointer">
          <Text fontWeight="bold">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  )
};

export default Card;
