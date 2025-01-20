import { Box, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "../components/custom/Header";
import SearchBar from "../components/custom/SearchBar";
import FilterButtons from "../components/custom/FilterButtons";
import { selectIsAuthenticated } from "../redux/userSlice";
import { useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "../assets/styles/Product.css";
import CenteredCarousel from "../components/custom/CenteredCarousel";
import ProductGrid from "../components/custom/ProductGrid";
import { Link } from "react-router-dom";
import ContactBanner from "../components/custom/ContactBanner";

const carouselItems = [
  {
    imageSrc: "/images/palmoil.jpg",
    legend: (
      <Text
        position="absolute"
        bottom="20px"
        // left="20px"
        color="black"
        w={{ base: "17rem", md: "fit-content" }}
        fontSize={{ md: "1.7rem", base: "1.1rem" }}
        transform={{
          md: "translateX(40px) translateY(-200px)",
          base: "translateX(10px) translateY(-238px)",
        }}
        p="8px"
        borderRadius="8px"
        maxW="500px"
        lineHeight="1.3"
        fontWeight={{ md: "600", base: "700" }}
      >
        Palm Oil: Rich Heritage, Richer Flavor • Sustainably Sourced • High Heat
        Stability • Traditional Culinary Excellence
      </Text>
    ),
    legendStyles: {
      top: "10px",
      right: "10px",
      color: "black",
      bg: "rgba(255, 255, 255, 0.7)",
      p: "8px",
      borderRadius: "8px",
    },
  },
  {
    imageSrc: "/images/rapeseedoil.jpeg",
    legend: (
      <Text
        position="absolute"
        color="black"
        fontSize={{ base: "1rem", md: "1.7rem" }}
        transform={{
          md: "translateX(617px) translateY(233px)",
          base: "translateX(133px) translateY(269px)",
        }}
        p="8px"
        borderRadius="8px"
        maxW="500px"
        fontWeight={{ base: "700", md: "600" }}
        w={{ base: "15rem", md: "100%" }}
        lineHeight="1.3"
      >
        Golden Rapeseed: Nature's Pure Brilliance • Farm-Fresh Cold-Pressed •
        Rich in Omega-3 • Perfect for Gourmet Cooking
      </Text>
    ),
    legendStyles: {
      bottom: "20px",
      right: "20px",
      color: "white",
      bg: "rgba(0, 0, 0, 0.5)",
      p: "8px",
      borderRadius: "8px",
    },
  },
  {
    imageSrc: "/images/sunflower1.jpg",
    legend: (
      <Text
        position="absolute"
        bottom={{ md: "20px", base: "0px" }}
        top={{ base: "15px", md: "0px" }}
        left={{ md: "20px", base: "0px" }}
        color="black"
        fontSize={{ md: "1.7rem", base: "1.1rem" }}
        transform={{
          md: "translateX(1px) translateY(3px)",
          base: "scale(1.0)",
        }}
        p="8px"
        borderRadius="8px"
        maxW="500px"
        lineHeight="1.3"
        fontWeight="600"
      >
        Sunflower Gold: Sunshine in Every Drop • Vitamin E Rich • Light &
        Versatile • From Field to Table Excellence
      </Text>
    ),
    legendStyles: {
      bottom: "20px",
      left: "20px",
      color: "black",
      fontSize: "1.7rem",
      transform: "translateX(40px) translateY(-300px)",
      p: "8px",
      borderRadius: "8px",
    },
  },
];

const Home = () => {
  const onChange = (index) => {
    console.log("Slide changed to:", index);
  };

  const onClickItem = (index) => {
    console.log("Item clicked at index:", index);
  };

  const onClickThumb = (index) => {
    console.log("Thumbnail clicked at index:", index);
  };

  return (
    <>
      <Box pb="3rem">
        <VStack>
          <Box w={{ md: "100dvw" }} zIndex={2} position="fixed">
            <ContactBanner />

            <Header />
          </Box>
          {/* <Text>
            {" "}
            {isAuthenticated ? "User is logged in" : "User is not logged in"}
          </Text> */}
          {/* <SearchBar />

          <FilterButtons filters={filters} toggleFilter={toggleFilter} />

          <Grid
            templateColumns="repeat(4, 1fr)"
            gap="6"
            w="100%"
            p="1.25rem 4rem"
          >
            <Box h="5rem" w="100%" bg="blue"></Box>
            <Box h="5rem" w="100%" bg="blue"></Box>
            <Box h="5rem" w="100%" bg="blue"></Box>
            <Box h="5rem" w="100%" bg="blue"></Box>
            <Box h="5rem" w="100%" bg="blue"></Box>
          </Grid> */}
          <CenteredCarousel
            items={carouselItems}
            onChange={onChange}
            onClickItem={onClickItem}
            onClickThumb={onClickThumb}
          />
          <ProductGrid />
        </VStack>
      </Box>
    </>
  );
};

export default Home;
