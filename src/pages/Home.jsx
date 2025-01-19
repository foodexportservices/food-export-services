import { Box, Grid, Image, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import Header from "../components/custom/Header";
import SearchBar from "../components/custom/SearchBar";
import FilterButtons from "../components/custom/FIlterButtons";
import { selectIsAuthenticated } from "../redux/userSlice";
import { useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "../assets/styles/Product.css";
import CenteredCarousel from "../components/custom/CenteredCarousel";
import ProductGrid from "../components/custom/ProductGrid";

const carouselItems = [
  {
    imageSrc: "/images/sunflower1.jpg",
    legend: (
      <Text
        position="absolute"
        bottom={{ md: "20px" }}
        top={{ base: "15px" }}
        left={{ md: "20px", base: "0px" }}
        color="black"
        fontSize={{ md: "1.7rem", base: "1.1rem" }}
        transform={{ md: "translateX(1px) translateY(-205px)" }}
        p="8px"
        borderRadius="8px"
        maxW="500px"
        lineHeight="1.3"
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
  {
    imageSrc: "/images/palmoil.jpg",
    legend: (
      <Text
        position="absolute"
        bottom="20px"
        // left="20px"
        color="black"
        w={{ base: "17rem" }}
        fontSize={{ md: "1.7rem", base: "1.1rem" }}
        transform={{
          md: "translateX(40px) translateY(-200px)",
          base: "translateX(10px) translateY(-238px)",
        }}
        p="8px"
        borderRadius="8px"
        maxW="500px"
        lineHeight="1.3"
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
        // bottom="20px"
        // left="20px"
        color="black"
        fontSize={{ base: "1rem", md: "1.7rem" }}
        transform={{
          md: "translateX(617px) translateY(233px)",
          base: "translateX(133px) translateY(269px)",
        }}
        p="8px"
        borderRadius="8px"
        maxW="500px"
        fontWeight={{ base: "700" }}
        w={{ base: "15rem" }}
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
          <Header />
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
