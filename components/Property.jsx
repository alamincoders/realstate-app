import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import millify from "millify";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGridFill } from "react-icons/bs";
import { FaBath, FaBed } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import DefaultImage from "../assets/house.jpg";

const Property = ({ property }) => {
  const { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } = property;
  return (
    <Link href={`/property/${externalID}`} passHref >
      <Flex borderRadius="6px" boxShadow="-2px 3px 10px rgba(0,0,0,0.07)" m="3"  flexWrap="wrap" w="400px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
        <Box mt="3" >
          <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={420} height={260} alt="house" />
        </Box>
        <Box w="full" m >
          <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
              <Box paddingRight="3" color="green.400">
                {isVerified && <GoVerified />}
              </Box>
              <Text fontWeight="bold" fontSize="lg">
                AED {millify(price)}
                {rentFrequency && `/${rentFrequency}`}
              </Text>
            </Flex>
            <Box>
              <Avatar size="sm" src={agency?.logo?.url} />
            </Box>
          </Flex>
          <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)}sqft <BsGridFill />
          </Flex>
          <Text fontSize="lg">{title.length > 30 ? `${title.substring(0, 30)}...` : title}</Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default Property;
