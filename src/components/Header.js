import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:theshubhamiohub@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/theshubhamio",
  },
  {
    icon: faInstagram,
    url: "https://instagram.com/theshubhamio",
  },
];

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [scrollPosition, setScrollPosition] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > scrollPosition) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.transform =
        scrollDirection === "down" ? "translateY(-200px)" : "translateY(0)";
    }
  }, [scrollDirection]);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transition="transform 0.3s ease-in-out"
      backgroundColor="#000000"
      zIndex={1000}
      background="linear-gradient(to bottom, rgba(24, 24, 27, 0.9), rgba(24, 24, 27, 0.03))"
      backdropFilter="blur(0.5px)"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          <nav>
            <HStack spacing={8}>
              <Link onClick={handleClick("landing")}>TheShubhamIO</Link>
              {socials.map((social, index) => (
                <Link key={index} href={social.url} target="_blank">
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </Link>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <Link onClick={handleClick("projects")}>Projects</Link>
              <Link onClick={handleClick("contactme")}>Contact me</Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
