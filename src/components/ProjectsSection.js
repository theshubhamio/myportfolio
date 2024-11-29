import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

import photo1 from "../images/proj1.png";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";

const dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const projects = [
  {
    title: "A Simple Portfolio",
    description: "A simple React app to showcase my best projects starting as a developer. This project is a part of Meta Front-End Developer Professional Certificate Course.",
    getImageSrc: () => photo1,
  },
  {
    title: "Project 2",
    description: dummyText,
    getImageSrc: () => photo2,
  },
  {
    title: "Project 3",
    description: dummyText,
    getImageSrc: () => photo3,
  },
  {
    title: "Project 4",
    description: dummyText,
    getImageSrc: () => photo4,
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#000000"
      isDarkBackground
      p={8}
      alignItems="center"
      justifyContent="center"
      margin="10%"
      borderRadius="lg"
      spacing={8}
      id="projects-section"
    >
      <Heading as="h1" textAlign="center" color="white" mb={8}>
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, minmax(0, 1fr))" }}
        gridGap={8}
        justifyContent="center"
        alignItems="center"
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
