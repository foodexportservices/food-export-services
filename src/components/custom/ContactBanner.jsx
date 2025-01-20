import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const ContactBanner = () => {
  return (
    <>
      <Box
        //   position="fixed"
        id="lll"
        w="100%"
        bg="red"
        px="2rem"
        py="0.2rem"
      >
        <HStack w="100%" justifyContent="space-between">
          <Text
            display={{ md: "flex", base: "none" }}
            fontSize="0.7rem"
            fontWeight="600"
            color="#fff"
          >
            Email:{" "}
            <Link to="mailto:foodexportservices@gmail.com">
              <span>foodexportservices@gmail.com</span>
            </Link>
          </Text>
          <Link to="mailto:foodexportservices@gmail.com">
            <VStack
              display={{ md: "none", base: "flex" }}
              alignItems="flex-start"
              fontSize="0.7rem"
              fontWeight="600"
              color="#fff"
              gap="0"
            >
              <Text>Email:</Text>
              <Text>foodexportservices@gmail.com</Text>
            </VStack>
          </Link>

          {/* <VStack
            display={{ md: "none", base: "flex" }}
            alignItems="flex-start"
            fontSize="0.7rem"
            fontWeight="600"
            color="#fff"
            gap="0"
          >
            <Text>Phone:</Text>
            <Text whiteSpace="nowrap">+1 (469) 435 - 8333</Text>
          </VStack> */}
          <Text
            display={{ md: "flex", base: "none" }}
            fontSize="0.7rem"
            fontWeight="600"
            color="#fff"
          >
            Phone: <span>+1 (469) 435 - 8333</span>
          </Text>

          {/* <Link to="https://wa.me/+14694358333">
            <VStack
              display={{ md: "none", base: "flex" }}
              alignItems="flex-start"
              fontSize="0.7rem"
              fontWeight="600"
              color="#fff"
              gap="0"
            >
              <Text>Whatsapp:</Text>
              <Text whiteSpace="nowrap">+1 (469) 435 - 8333</Text>
            </VStack>
          </Link> */}

          <Link to="https://wa.me/+14694358333">
            <Text
              display={{ md: "flex", base: "none" }}
              fontSize="0.7rem"
              fontWeight="600"
              color="#fff"
            >
              Whatsapp: <span>+1 (469) 435 - 8333</span>
            </Text>
          </Link>

          <VStack
            display={{ md: "none", base: "flex" }}
            gap="0"
            alignItems="flex-start"
          >
            <Text
              fontSize="0.7rem"
              fontWeight="600"
              color="#fff"
              whiteSpace="nowrap"
            >
              Phone: <span>+1 (469) 435 - 8333</span>
            </Text>
            <Link to="https://wa.me/+14694358333">
              <Text
                fontSize="0.7rem"
                fontWeight="600"
                color="#fff"
                whiteSpace="nowrap"
              >
                Whatsapp: <span>+1 (469) 435 - 8333</span>
              </Text>
            </Link>
          </VStack>
        </HStack>
      </Box>
    </>
  );
};

export default ContactBanner;
