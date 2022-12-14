import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>React Estate</title>
      </Head>

      <Box>
        <Box maxWidth="1280px" m="auto">
          <header>
            <Navbar />
          </header>
        </Box>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
};

export default Layout;
