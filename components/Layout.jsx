import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>React Estate</title>
      </Head>

      <Box maxWidth="1280px" mx="auto">
        <header>
          {/* <Navbar/> */}
          Navbar
        </header>
        <main>{children}</main>
        <footer>
          {/* <Footer/> */}
          Footer
        </footer>
      </Box>
    </>
  );
};

export default Layout;
