import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import phoneMockup from "../assets/phone.png";
import phoneMockup2 from "../assets/shape1.png";
import phoneMockup3 from "../assets/shape2.png";
import phoneMockup4 from "../assets/shape3.png";

const HeroSection = () => {
  const Router = useRouter();
  return (
    <section className="hero">
      <Flex maxWidth="1280px" m="auto" alignItems="center" justifyContent="space-between" flexWrap={["wrap", "nowrap"]}>
        <Box marginTop={["50px", "0"]} textAlign={["center", "left"]}>
          <Text fontSize={["24px", "52px"]} color="white" fontWeight="bold" lineHeight="1.3" textTransform="uppercase">
            Welcome to Apat Get the
          </Text>
          <Text fontSize={["28px", "52px"]} color="white" fontWeight="bold" lineHeight="1.3" textTransform="uppercase">
            app now & Enjoy
          </Text>
          <Text my="5" fontSize={["16px", "18px"]} color="whiteAlpha.900" lineHeight="1.4">
            Why I say old chap that is spiffing cobblers brolly owt to do with me, <br /> gormless pukka are you taking the piss bum bag zonked cup of
            char blower <br /> cras numquam mus voluptas.!
          </Text>
          <button onClick={() => Router.push("/search?purpose=for-sale")} className="button_hero">
            Get Started & Enjoy Life{" "}
          </button>
        </Box>
        <Box marginTop={["0", "105px"]}>
          <Image responsive src={phoneMockup} alt="phone" />
        </Box>
        <Box marginTop={["0", "50px"]} position="absolute" top="0" left="0">
          <Image responsive src={phoneMockup2} alt="phone" />
        </Box>
        <Box marginTop={["0", "50px"]} position="absolute" top="0" right="40%">
          <Image responsive src={phoneMockup3} alt="phone" />
        </Box>
        <Box marginTop={["0", "50px"]} position="absolute" top="0" right="5">
          <Image responsive src={phoneMockup4} alt="phone" />
        </Box>
        <Box marginTop={["0", "50px"]} position="absolute" top="0" right="5">
          <Image responsive src={phoneMockup4} alt="phone" />
        </Box>
      </Flex>
      <div className="svg_hero">
        <svg id="hero_shape2_normal" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="PSgrad_0" x1="0%" x2="76.604%" y1="64.279%" y2="0%">
              <stop offset="0%" stop-color="rgba(29,62,222, 0.20)"></stop>
              <stop offset="100%" stop-color="rgba(3,218,246, 0.20)"></stop>
            </linearGradient>
          </defs>
          <path
            fill="rgb(255, 255, 255)"
            d="M0.000,246.000 C0.000,246.000 326.728,190.237 710.653,123.017 C937.017,83.384 1398.662,3.976 1398.662,3.976 C1398.662,3.976 1524.189,5.641 1668.565,26.591 C1813.299,47.594 1920.000,84.745 1920.000,84.745 L1920.000,323.000 L0.000,323.000 L0.000,246.000 Z"
          ></path>
          <path
            fill="url(#PSgrad_0)"
            d="M0.000,323.249 C0.000,-57.945 0.000,623.445 0.000,242.251 C0.000,242.251 141.533,218.272 347.776,183.613 C479.132,161.538 636.827,133.656 800.746,105.827 C943.681,81.561 1097.680,52.804 1239.269,28.559 C1291.889,19.548 1358.059,5.849 1393.180,1.251 C1434.086,-4.103 1581.001,11.184 1661.097,24.221 C1818.678,49.869 1920.000,84.251 1920.000,84.251 L1920.000,190.407 C1813.062,96.085 1433.376,28.053 1285.064,28.053 L0.000,323.249 Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
