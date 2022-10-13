import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import ErrImg from "../assets/error.png";

const ErrorPage = () => {
  return (
    <Box maxWidth="1080px" mx="auto">
      <Image src={ErrImg} alt="error" />
    </Box>
  );
};

export default ErrorPage;
