import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import millify from "millify";
import React from "react";
import { BsGridFill } from "react-icons/bs";
import { FaBath, FaBed } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import ImageScrollbar from "../../components/ImageScrollbar";
import { baseUrl, fetchApi } from "../../utils/fetchApi";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    photos,
    amenities,
  },
}) => (
  <Box maxWidth="1000px" m="auto" p="4">
    {photos && <ImageScrollbar photosData={photos} />}
    <Box w="full" p="6">
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
      <Box mt="2">
        <Text fontSize="lg" mb="2" fontWeight="bold">
          {title}
        </Text>
      </Box>
      <Text lineHeight="2" color="gray.600">
        {description}
      </Text>

      <Flex flexWrap="wrap" textTransform="uppercase" justifyContent="space-between">
        <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
          <Text>Type</Text>
          <Text fontWeight="bold">{type}</Text>
        </Flex>
        <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
          <Text>Purpose</Text>
          <Text fontWeight="bold">{purpose}</Text>
        </Flex>
        {furnishingStatus && (
          <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
            <Text>FurnishingStatus</Text>
            <Text fontWeight="bold">{furnishingStatus}</Text>
          </Flex>
        )}
      </Flex>
      <Box>
        {amenities.length && (
          <Text fontSize="2xl" fontWeight="black" mt="5">
            Amenities
          </Text>
        )}
        <Flex flexWrap="wrap">
          {amenities.map((item) =>
            item?.amenities?.map((amenity, i) => (
              <Text fontWeight="bold" color="blue.400" fontSize="l" p="2" bg="gray.200" m="1" borderRadius="5" key={i}>
                {amenity.text}
              </Text>
            ))
          )}
        </Flex>
      </Box>
    </Box>
  </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
