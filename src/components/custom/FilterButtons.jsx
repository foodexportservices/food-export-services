import { Button, HStack } from "@chakra-ui/react";
import React from "react";

const FilterButtons = ({ filters, toggleFilter }) => {
  const filterOptions = ["all", "grains", "oils", "seeds", "veggies"];

  return (
    <>
      <HStack
        display={{ md: "flex", base: "none" }}
        justifyContent="space-evenly"
        gap="1rem"
      >
        {filterOptions.map((filter) => (
          <Button
            key={filter}
            borderRadius="30px"
            onClick={() => toggleFilter(filter)}
            colorScheme="blue"
            variant={
              filters.includes("all") && filter === "all"
                ? "solid"
                : filters.includes(filter)
                ? "solid"
                : "outline"
            }
          >
            {filter.toUpperCase()}
          </Button>
        ))}
      </HStack>

      <HStack
        display={{ md: "none", base: "flex" }}
        // w={{ base: "100dvw" }}
        // px={{ base: "2rem" }}
        justifyContent="space-evenly"
        // gap="1rem"
      >
        {filterOptions.map((filter) => (
          <Button
            p={{ base: "0.5rem", md: "0rem" }}
            key={filter}
            borderRadius="30px"
            onClick={() => toggleFilter(filter)}
            colorScheme="blue"
            variant={
              filters.includes("all") && filter === "all"
                ? "solid"
                : filters.includes(filter)
                ? "solid"
                : "outline"
            }
          >
            {filter.toUpperCase()}
          </Button>
        ))}
      </HStack>
    </>
  );
};

export default FilterButtons;
