import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";



const dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const projects = [
  {
    title: "My Portfolio Webpage",
    description: "This portfolio website showcases my front-end development skills, built as part of the Meta Front-End Developer Professional Certificate Course.",
    getImageSrc: () => "https://i.postimg.cc/Y9FDcc7h/imgproj1.png",
    projectUrl: "https://theshubhamio.github.io/myportfolio/"
  },
  {
    title: "That Snake Game",
    description: "A React-based Snake game featuring a responsive grid, real-time gameplay, and intuitive UI controls, showcasing expertise in state management and user interaction.",
    getImageSrc: () => "https://i.postimg.cc/wjxr1bXG/imgproj2.png",
    projectUrl: "https://theshubhamio.github.io/thatsnakegame/"
  },
  {
    title: "RecallRival",
    description: "RecallRival is a 2-player React memory game, showcasing expertise in state management, dynamic UI, and game logic.",
    getImageSrc: () => "https://i.postimg.cc/6Qy1021V/imgproj3.png",
    projectUrl: "https://theshubhamio.github.io/recallrival/"
  },
  {
    title: "TypeItHero",
    description: "TypeItHero is an interactive React typing game, showcasing real-time input handling, dynamic state management, and custom animations.",
    getImageSrc: () => "https://i.postimg.cc/P56RYzKr/imgproj4.png",
    projectUrl: "https://theshubhamio.github.io/typeithero/"
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#0B0C10"
      isDarkBackground
      alignItems="center"
      justifyContent="center"
      id="projects-section"
    >
      <Heading as="h1" size="2xl" textAlign="center" color="#D6D8DA" m={10}>
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
      >
        {projects.map((project) => (

          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            projectUrl={project.projectUrl}
          />

        ))}
      </Box>
    </FullScreenSection>


  );
};

export default ProjectsSection;
