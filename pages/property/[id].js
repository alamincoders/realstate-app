import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import millify from "millify";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGridFill } from "react-icons/bs";
import { FaBath, FaBed } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import ImageScrollbar from "../../components/ImageScrollbar";
import { baseUrl, fetchApi } from "../../utils/fetchApi";


const PropertyDetails = ({propertyDetails:{price, renFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose , furnishingStatus, photos, amenities}}) => (
    <Box maxWidth="1000px" m="auto" p="4" >
{photos && <ImageScrollbar photosData={photos} />}
    </Box>
)

export default PropertyDetails;

export async function getServerSideProps({params:{id}}) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props:{
            propertyDetails: data
        }
    }
    

}