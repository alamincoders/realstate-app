import {
  Box,
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import React from "react";

import { AiFillInstagram } from "react-icons/ai";
import { BsDiscord, BsLinkedin, BsPhoneVibrateFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TbAddressBook } from "react-icons/tb";

const Footer = () => {
  const facebook = {
    href: "https://www.facebook.com/alamincoders/",
    target: "_blank",
  };
  const discord = {
    href: "https://discord.gg/GcXJEMYE",
    target: "_blank",
  };
  const instagram = {
    href: "https://www.instagram.com/alamincoders/",
    target: "_blank",
  };
  const linkedin = {
    href: "https://www.linkedin.com/in/alamincoderbd/",
    target: "_blank",
  };
  const bg = {
    backgroundImage: "url(https://i.ibb.co/bJSFRVb/map.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "400px",
    padding: "100px 0 50px 0",
  };
  return (
    <Box maxWidth="1280px" m="auto">
      <Flex style={{ ...bg, color: "#6D8FAC", cursor: "pointer" }} justifyContent="space-between">
        <Box>
          <Box>
            <Text i fontSize="3xl" color="blue.400" fontWeight="bold">
              RETEX STATE
            </Text>
            <Text fontSize="lg" textAlign="justify" marginTop="10px">
              <small>
                To keep up with the requirements of the job, <br /> the entrepreneur has to know something of everything.
              </small>
            </Text>
          </Box>
          <Flex justifyContent="flex-start" gap="5" alignItems="center">
            <a {...facebook}>
              <FaFacebookF className="button_footer" />
            </a>
            <a {...discord}>
              <BsDiscord className="button_footer" />
            </a>
            <a {...instagram}>
              <AiFillInstagram className="button_footer" />
            </a>
            <a {...linkedin}>
              <BsLinkedin className="button_footer" />
            </a>
          </Flex>
        </Box>
        <div>
          <div>
            <Text fontSize="lg" textTransform="uppercase">
              Company
            </Text>
            <li className="list-unstyled mt-2">About us</li>
            <li className="list-unstyled mt-2">Features</li>
            <li className="list-unstyled mt-2">Services</li>
            <li className="list-unstyled mt-2">Our Pricing</li>
            <li className="list-unstyled mt-2">Latest News</li>
          </div>
        </div>
        <div>
          <Text fontSize="lg" textTransform="uppercase">
            Support
          </Text>
          <li className="list-unstyled mt-2">FAQs</li>
          <li className="list-unstyled mt-2">Privacy Policy</li>
          <li className="list-unstyled mt-2">Terms & Condition</li>
          <li className="list-unstyled mt-2">Team</li>
          <li className="list-unstyled mt-2">Contact Us</li>
        </div>
        <div>
          <Text fontSize="lg" textTransform="uppercase">
            Address
          </Text>
          <Flex alignItems="center" fontSize="md">
            <TbAddressBook />
            <small className="ms-2">New Market Khulna-074, Bangladesh</small>
          </Flex>
          <Flex alignItems="center" fontSize="md">
            <IoMdMail />
            <small className="ms-2">alaminpgmr@gmail.com</small>
          </Flex>{" "}
          <Flex alignItems="center" fontSize="md">
            <BsPhoneVibrateFill />
            <small className="ms-2">+880 1906221552</small>
          </Flex>
          <Box mt="5">
            <Text fontSize="2xl" color="blue.200" fontWeight="bold">
              Subscribe Our Newsletter
            </Text>
            <Flex justifyContent="space-between" alignItems="center" border="1px" borderColor="gray.300" borderRadius="5">
              <input
                style={{ padding: "10px", border: "none", outline: "none", background: "transparent" }}
                type="text"
                placeholder="Enter you email..."
              />
              <Popover>
                <PopoverTrigger>
                  <Button bg="blue.400" color="white">
                    Subscribe
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Congratulations!</PopoverHeader>
                  <PopoverBody>Your subscription has been confirm.</PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
          </Box>
        </div>{" "}
      </Flex>
      <Text textAlign="center" className="lead text-center text-muted">
        {" "}
        &copy;2022 All right reserved by retex-state, Inc.
      </Text>
    </Box>
  );
};
export default Footer;
