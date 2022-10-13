import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import houseImg from "../assets/hou.jpg";
import HeroSection from "../components/HeroSection";
import Property from "../components/Property";
import ReSection from "../components/ReSection";
import { baseUrl, fetchApi } from "../utils/fetchApi";

const Banner = ({ purpose, title1, title2, desc1, desc2, desc3, buttonText, linkName, imageUrl }) => (
  <Flex flexWrap="wrap" justifyContent="space-around" alignItems="center" my="50">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1} <br /> {title2}
      </Text>
      <Text color="gray.700" fontSize="lg" fontWeight="medium" paddingTop="3" paddingBottom="3">
        {desc1} <br /> {desc2} <br /> {desc3}
      </Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home({ propertyForSale, propertyForRent }) {
  // console.log(propertyForSale, propertyForRent);
  return (
    <Box>
      <HeroSection />
      {/* Re section */}
      <ReSection />
      <Box maxWidth="1280px" m="auto">
        <Banner
          purpose="RENT A HOME"
          title1="Rental Homes for"
          title2="Everyone"
          desc1="Explore Apartments, Villas, Homes"
          desc2="and more"
          desc3="🏁 Bundle your choice of flights + hotels together to enjoy savings on your Valla trip. Get to know the city with Expedia's Valla tourism guide."
          buttonText="Explore Renting"
          linkName="/search?purpose=for-rent"
          imageUrl={houseImg}
        />
        <Flex flexWrap="wrap">
          {propertyForRent.map((property) => (
            <Property key={property.id} property={property} />
          ))}
        </Flex>
        <Banner
          purpose="BUY A HOME"
          title1=" Find, Buy & Own Your"
          title2="Dream Home"
          desc1=" Explore from Apartments, land, builder floors,"
          desc2=" villas and more"
          desc3="🏁 Bundle your choice of flights + hotels together to enjoy savings on your Valla trip. Get to know the city with Expedia's Valla tourism guide."
          buttonText="Explore Buying"
          linkName="/search?purpose=for-sale"
          imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
        />
        <Flex flexWrap="wrap">
          {" "}
          {propertyForSale.map((property) => (
            <Property key={property.id} property={property} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    },
  };
}
