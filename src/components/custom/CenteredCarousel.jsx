import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const styles = `
  .h-full,
  .h-full > .carousel-slider,
  .h-full > .carousel-slider > .slider-wrapper,
  .h-full > .carousel-slider > .slider-wrapper > .slider {
    height: 100% !important;
  }
`;

const CenteredCarousel = ({ items, onChange, onClickItem, onClickThumb }) => {
  return (
    <Box
      mt={{ base: "5rem" }}
      position="relative"
      w="100%"
      h="400px"
      borderRadius="37.19px"
      px={{ base: "2rem", md: "4rem" }}
      mb="1rem"
    >
      <style>{styles}</style>
      <Carousel
        showIndicators={false}
        showArrows={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        onChange={onChange}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb}
        className="h-full"
      >
        {items.map(({ imageSrc, legend, legendStyles }, index) => (
          <Flex key={index} w="100%" h="100%" align="center" justify="center">
            <Box position="relative" w="100%" h="100%">
              <Image
                src={imageSrc}
                alt={`carousel-${index}`}
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                objectFit="cover"
                borderRadius="37.19px"
              />
              {/* <Text
                position="absolute"
                {...legendStyles} // Spread legend-specific styles
              > */}
              {legend}
              {/* </Text> */}
            </Box>
          </Flex>
        ))}
      </Carousel>
    </Box>
  );
};

export default CenteredCarousel;
