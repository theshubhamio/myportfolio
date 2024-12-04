import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link, Stack } from "@chakra-ui/react";

const socials = [
  {
    icon: faGithub,
    url: "https://github.com/theshubhamio",
  },
  {
    icon: faInstagram,
    url: "https://instagram.com/theshubhamio",
  },
  {
    icon: faYoutube,
    url: "https://youtube.com/@theshubhamio",
  }
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
      backgroundColor="#1C1E22"
      zIndex={1000}
      margin="20px"
      border="2px solid #52575C"
      backdropFilter="blur(0.9px)"
      overflow="hidden"
      _hover={{
        transform: "scale(1.01)",
        boxShadow: "xl",
        borderColor: "#00BCD4", // Change border color on hover
        transition: "border-color 0.5s ease", // Animate the border color change
      }}
      borderRadius={50}



    >
      <Box color="white" margin="5px">
        {/* Parent Stack for responsive behavior */}
        <Stack
          direction={["column", "row"]}
          px={8}
          py={4}
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Social Links Section */}
          <nav>
            <HStack spacing={8}
              justifyContent={["center", "center"]}
              alignItems="center"
              flexWrap="wrap">
              
              {socials.map((social, index) => (
                <Link
                _hover={{
                  color: "#00BCD4",
                  transform: "scale(1.2)",
                  transition: "all 0.2s ease-in-out",
                }} 
                fontSize={"xl"}
                key={index} href={social.url} target="_blank">
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </Link>
              ))}
            </HStack>
          </nav>

          {/* Internal Links Section */}
          <nav>
            <HStack
              spacing={8}
              justifyContent={["center", "center"]}
              alignItems="center"
              flexWrap="wrap"
            >
              <Link 
              _hover={{
                color: "#00BCD4",
                transform: "scale(1.2)",
                transition: "all 0.2s ease-in-out",
              }}
              fontSize={"xl"}
              onClick={handleClick("projects")} fontWeight={"bold"}  >Projects</Link>
              <Link
              _hover={{
                color: "#00BCD4",
                transform: "scale(1.2)",
                transition: "all 0.2s ease-in-out",
              }}
              fontSize={"xl"}
               onClick={handleClick("contactme")} fontWeight={"bold"} >Contact me</Link>
            </HStack>
          </nav>
        </Stack>
      </Box>
    </Box>

  );
};

export default Header;
