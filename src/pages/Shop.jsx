import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "../components/custom/Header";
import SearchBar from "../components/custom/SearchBar";
import FilterButtons from "../components/custom/FilterButtons";
import Catalog from "../components/custom/Catalog";
import { Rating } from "@/components/ui/rating";
import {
  fetchProducts,
  selectAllProducts,
  selectProductsStatus,
  selectProductsError,
} from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import ProductCard from "../components/custom/ProductCard";
import ContactBanner from "../components/custom/ContactBanner";

const Shop = () => {
  const [filters, setFilters] = useState(["all"]);
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  const error = useSelector(selectProductsError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (error) {
    return (
      <Box textAlign="center" color="red.500" p={8}>
        <Text fontSize="lg">Error: {error}</Text>
      </Box>
    );
  }

  const toggleFilter = (filter) => {
    setFilters((prev) => {
      // If "all" is clicked
      if (filter === "all") {
        return prev.includes("all") ? prev : ["all"];
      }

      // Remove "all" if other filters are being toggled
      const newFilters = prev.includes("all") ? [] : [...prev];

      if (newFilters.includes(filter)) {
        // Prevent the last selection from being deselected
        if (newFilters.length === 1) return newFilters;
        return newFilters.filter((f) => f !== filter);
      }

      // Add the new filter and remove "all"
      return [...newFilters, filter];
    });
  };

  return (
    <>
      <Box>
        <VStack>
          <Box w={{ md: "100dvw" }} zIndex={2} position="fixed">
            <ContactBanner />

            <Header />
          </Box>

          <SearchBar />

          <FilterButtons filters={filters} toggleFilter={toggleFilter} />

          {/* <Catalog /> */}
          <Grid
            templateColumns={{ md: "repeat(4, 1fr)", base: "repeat(2, 1fr)" }}
            gap="6"
            w="100%"
            p={{ md: "1.25rem 4rem", base: "2rem" }}
          >
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </Grid>
        </VStack>
      </Box>
    </>
  );
};

export default Shop;
