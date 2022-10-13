import { Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BiLogIn } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FcAbout, FcHome, FcMenu } from "react-icons/fc";
import { FiKey } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="navStyle">
      <Flex p="2" borderBottom="1px" borderColor="gray.100" alignItems="center">
        <Box fontSize="3xl" color="blue.400" fontWeight="bold" w="300px">
          <Link href="/" paddingLeft="2">
            RETEX-STATE
          </Link>
        </Box>
        <Flex display={["none", "flex"]} flexWrap="wrap">
          {" "}
          <Box fontSize="l" color="blue.400" fontWeight="bold" marginRight="10">
            <Link href="/">Home</Link>
          </Box>
          <Box fontSize="l" color="blue.400" fontWeight="bold" marginRight="10">
            <Link href="/search?purpose=for-sale">Property</Link>
          </Box>
          <Box fontSize="l" color="blue.400" fontWeight="bold" marginRight="10">
            <Link href="/about">About us</Link>
          </Box>
          <Box fontSize="l" color="blue.400" fontWeight="bold" marginRight="10">
            <Link href="/contact">Contact</Link>
          </Box>
        </Flex>
        <Spacer />
        <Box>
          <Menu>
            <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
            <MenuList>
              <Link href="/" passHref>
                <MenuItem icon={<FcHome />}>Home</MenuItem>
              </Link>
              <Link href="/search" passHref>
                <MenuItem icon={<BsSearch />}>Search</MenuItem>
              </Link>
              <Link href="/search?purpose=for-sale" passHref>
                <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
              </Link>
              <Link href="/search?purpose=for-rent" passHref>
                <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
              </Link>
              <Link href="/login" passHref>
                <MenuItem icon={<BiLogIn />}>Login</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </div>
  );
};

export default Navbar;
