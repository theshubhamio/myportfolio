import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

import photo1 from "../images/proj1.png";
import photo2 from "../images/proj2.png";
import photo3 from "../images/proj3.png";
import photo4 from "../images/proj4.png";

const dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const projects = [
  {
    title: "Portfolio Page",
    description: "You're currently viewing my portfolio website, a project I built to showcase my skills as a front-end developer. Created as part of the Meta Front-End Developer Professional Certificate Course, this site is hosted on GitHub Pages.",
    getImageSrc: () => photo1,
    projectUrl: "https://theshubhamio.github.io/myportfolio/"
  },
  {
    title: "That Snake Game",
    description: "A modern twist on the classic Snake game built with React. Features include a responsive grid, keyboard and UI controls, real-time gameplay, and a dynamic game-over state. Showcases proficiency in state management, user interaction handling, and responsive design principles. Perfect example of blending functionality with intuitive UI for a seamless user experience.",
    getImageSrc: () => photo2,
    projectUrl: "https://theshubhamio.github.io/thatsnakegame/"
  },
  {
    title: "RecallRival Game",
    description: "RecallRival is a dynamic 2-player memory game built using React, showcasing my skills in state management, dynamic UI rendering, and game logic implementation. The game features a responsive 5x5 grid, turn-based interactions, and player-specific logic with visual indicators. It demonstrates expertise in JavaScript, CSS animations, and creating intuitive user experiences. Designed with scalability, it supports both computer and same-screen multiplayer modes, with future scope for backend integration.",
    getImageSrc: () => photo3,
    projectUrl: "https://theshubhamio.github.io/recallrival/"
  },
  {
    title: "TypeItHero",
    description: "ypeItHero is an interactive typing speed game built with React, showcasing real-time keyboard input handling, dynamic state management, and custom animations. Players type falling words before they reach the bottom, with customizable text input and visual feedback for focused words. This project highlights skills in frontend development, user interface design, performance optimization, and problem-solving, demonstrating my ability to create engaging, responsive, and user-centric applications.",
    getImageSrc: () => photo4,
    projectUrl: "https://theshubhamio.github.io/typeithero/"
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
            projectUrl={project.projectUrl}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
