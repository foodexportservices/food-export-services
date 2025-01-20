import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const ContactBanner = () => {
  return (
    <>
      <Box w="100%" bg="red" px="2rem" py="0.2rem">
        <HStack w="100%" justifyContent="space-between">
          <Text fontSize="0.7rem" fontWeight="600" color="#fff">
            Email:{" "}
            <Link to="mailto:foodexportservices@gmail.com">
              <span>foodexportservices@gmail.com</span>
            </Link>
          </Text>

          <Text fontSize="0.7rem" fontWeight="600" color="#fff">
            Phone: <span>+1 (469) 435 - 8333</span>
          </Text>

          <Link to="https://wa.me/+14694358333">
            <Text fontSize="0.7rem" fontWeight="600" color="#fff">
              Whatsapp: <span>+1 (469) 435 - 8333</span>
            </Text>
          </Link>
        </HStack>
      </Box>
    </>
  );
};

export default ContactBanner;
