import { Box, HStack, Input } from "@chakra-ui/react";
import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <>
      <HStack
        display={{ md: "flex", base: "none" }}
        mt={{ base: "5rem", md: "0" }}
        w={{ md: "100%", base: "100dvw" }}
        // px={{ base: "2rem", md: "0" }}
        justifyContent="center"
        gap="0"
        mb="1rem"
        box-shadow="0px 4.36px 16.36px 0px #00000012"
      >
        <HStack gap="0">
          <Box
            h="full"
            p="0.9375rem 1rem"
            bg="#001616"
            borderTopLeftRadius="0.546rem"
            borderBottomLeftRadius="0.546rem"
          >
            <Search color="#fff" />
          </Box>
          <Input
            type="text"
            h="full"
            p="0.9375rem 1rem"
            fontSize="1.2275rem"
            lineHeight="1.4725rem"
            letterSpacing="-0.004375rem"
            w="40rem"
            borderTopRightRadius="0.546rem"
            borderBottomRightRadius="0.546rem"
            bg="#fff"
            border="0.55px solid #E0E7E7"
            box-shadow="0px 4.36px 16.36px 0px #00000012"
            placeholder="search for your favourite grains, oils, seeds, veggies"
          />
        </HStack>
      </HStack>

      <HStack
        display={{ md: "none", base: "flex" }}
        mt={{ base: "5rem" }}
        w={{ base: "100vw" }}
        px={{ base: "2rem" }}
        gap="0"
        mb="1rem"
        box-shadow="0px 4.36px 16.36px 0px #00000012"
      >
        <Box
          h="full"
          p="0.9375rem 1rem"
          bg="#001616"
          borderTopLeftRadius="0.546rem"
          borderBottomLeftRadius="0.546rem"
        >
          <Search color="#fff" />
        </Box>
        <Input
          type="text"
          h="full"
          p="0.9375rem 1rem"
          fontSize="1.2275rem"
          lineHeight="1.4725rem"
          letterSpacing="-0.004375rem"
          w="40rem"
          borderTopRightRadius="0.546rem"
          borderBottomRightRadius="0.546rem"
          bg="#fff"
          border="0.55px solid #E0E7E7"
          box-shadow="0px 4.36px 16.36px 0px #00000012"
          placeholder="search for your favourite grains, oils, seeds, veggies"
        />
      </HStack>
    </>
  );
};

export default SearchBar;
