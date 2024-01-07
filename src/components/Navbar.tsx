import React from "react";
import { Link, NavLink } from "react-router-dom";
import IconYellowImg from "../../static/img/logos/Logo.svg";
import Blogs from "../pages/blogs/Blogs";
import { Box, Flex, HStack, Heading, LinkBox, Spacer } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <HStack
      justify={"space-between"}
      position="absolute"
      background={"#add8e6"}
      right="0"
      left="0"
      top="0"
    >
      <Heading fontSize={"25px"}>
        <a href="/">AARON GAO</a>
      </Heading>
      <HStack spacing={5}>
        <a href="/blogs">Blogs</a>
        <a href="/experience">Experience</a>
        <a href="/projects">Projects</a>
        <a href="/resume">Resume</a>
      </HStack>
    </HStack>
  );
};

export default Navbar;
