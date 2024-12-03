import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faArrowRight, faArrowUpRightDots } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, projectUrl }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  const handleClick = () => {
    window.open(projectUrl, '_blank');
  };
  return (
    <VStack
      align="flex-start"
      overflow="hidden"
      alignItems="center"
      justifyContent="center"
      margin="25px"
      borderRadius={"25px"}
      background={"#0B0C10"}
      border="2px solid #52575C"
      transition="all 0.3s ease-in-out" // Adding smooth transition for border and other styles
      _hover={{
        transform: "scale(1.01)",
        boxShadow: "xl",
        borderColor: "#00BCD4", // Change border color on hover
        transition: "border-color 0.5s ease", // Animate the border color change
      }}
    >
      {/* Image Section */}
      <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
        <Image
          src={imageSrc}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.9) contrast(0.9) opacity(0.9)',
          }}
        />

        {/* Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(11, 12, 16, 1) 100%)',
            pointerEvents: 'none',
          }}
        ></div>
      </div>

      {/* Content Section */}
      <VStack align="flex-start" p={5} spacing={5}>
        <Heading as="h3" size="xl" color="#D6D8DA">
          {title}
        </Heading>
        <Text color="#A0A4A8" fontSize="xl">
          {description}
        </Text>
        <HStack
          onClick={handleClick}
          spacing={2}
          color="gray.100"
          cursor="pointer"
          _hover={{
            color: '#00BCD4',
            transform: 'scale(1.05)',
            transition: 'all 0.2s ease-in-out',
          }}
        >
          <Text color="#D6D8DA" fontWeight="bold" fontSize="2xl">Visit now</Text>
          <FontAwesomeIcon icon={faArrowRight} size="2x" />
        </HStack>
      </VStack>
    </VStack>
  )
};

export default Card;
