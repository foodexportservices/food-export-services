VStack; // import {
//   Box,
//   Button,
//   Grid,
//   HStack,
//   Image,
//   Text,
//   VStack,
// } from "@chakra-ui/react";
// import { Rating } from "@/components/ui/rating";
// import React from "react";

// const Catalog = () => {
//   return (
//     <>
//       <Grid templateColumns="repeat(4, 1fr)" gap="6" w="100%" p="1.25rem 4rem">
//         <Box w="100%">
//           <VStack w="100%" h="100%">
//             <Image
//               src="/images/sunflower.png"
//               alt="sunflower-oil"
//               bg="#eaebeb"
//             />

//             <VStack w="100%" alignItems="flex-start" gap="0">
//               <Text>Wlt Pure Sunflower Oil</Text>
//               <Text fontWeight="500">
//                 $ 9.39{" "}
//                 <span
//                   style={{
//                     fontSize: "0.7rem",
//                     fontWeight: "normal",
//                     position: "absolute",
//                     marginLeft: "0.5rem",
//                     textDecoration: "line-through",
//                   }}
//                 >
//                   $ 12.35
//                 </span>
//               </Text>
//               <HStack alignItems="center">
//                 <Rating defaultValue={3} colorPalette="green" size="sm" />
//                 <Text fontSize="0.7rem">(65)</Text>
//               </HStack>
//             </VStack>

//             <Button w="100%" _hover={{ bg: "#003737" }}>
//               Add to cart
//             </Button>
//           </VStack>
//         </Box>
//         <Box w="100%">
//           <VStack w="100%" h="100%">
//             <Image
//               src="/images/sunflower.png"
//               alt="sunflower-oil"
//               bg="#eaebeb"
//             />

//             <VStack w="100%" alignItems="flex-start" gap="0">
//               <Text>Wlt Pure Sunflower Oil</Text>
//               <Text fontWeight="500">
//                 $ 9.39{" "}
//                 <span
//                   style={{
//                     fontSize: "0.7rem",
//                     fontWeight: "normal",
//                     position: "absolute",
//                     marginLeft: "0.5rem",
//                     textDecoration: "line-through",
//                   }}
//                 >
//                   $ 12.35
//                 </span>
//               </Text>
//               <HStack alignItems="center">
//                 <Rating defaultValue={3} colorPalette="green" size="sm" />
//                 <Text fontSize="0.7rem">(65)</Text>
//               </HStack>
//             </VStack>

//             <Button w="100%" _hover={{ bg: "#003737" }}>
//               Add to cart
//             </Button>
//           </VStack>
//         </Box>
//         <Box w="100%">
//           <VStack w="100%" h="100%">
//             <Image
//               src="/images/sunflower.png"
//               alt="sunflower-oil"
//               bg="#eaebeb"
//             />

//             <VStack w="100%" alignItems="flex-start" gap="0">
//               <Text>Wlt Pure Sunflower Oil</Text>
//               <Text fontWeight="500">
//                 $ 9.39{" "}
//                 <span
//                   style={{
//                     fontSize: "0.7rem",
//                     fontWeight: "normal",
//                     position: "absolute",
//                     marginLeft: "0.5rem",
//                     textDecoration: "line-through",
//                   }}
//                 >
//                   $ 12.35
//                 </span>
//               </Text>
//               <HStack alignItems="center">
//                 <Rating defaultValue={3} colorPalette="green" size="sm" />
//                 <Text fontSize="0.7rem">(65)</Text>
//               </HStack>
//             </VStack>

//             <Button w="100%" _hover={{ bg: "#003737" }}>
//               Add to cart
//             </Button>
//           </VStack>
//         </Box>
//         <Box w="100%">
//           <VStack w="100%" h="100%">
//             <Image
//               src="/images/sunflower.png"
//               alt="sunflower-oil"
//               bg="#eaebeb"
//             />

//             <VStack w="100%" alignItems="flex-start" gap="0">
//               <Text>Wlt Pure Sunflower Oil</Text>
//               <Text fontWeight="500">
//                 $ 9.39{" "}
//                 <span
//                   style={{
//                     fontSize: "0.7rem",
//                     fontWeight: "normal",
//                     position: "absolute",
//                     marginLeft: "0.5rem",
//                     textDecoration: "line-through",
//                   }}
//                 >
//                   $ 12.35
//                 </span>
//               </Text>
//               <HStack alignItems="center">
//                 <Rating defaultValue={3} colorPalette="green" size="sm" />
//                 <Text fontSize="0.7rem">(65)</Text>
//               </HStack>
//             </VStack>

//             <Button w="100%" _hover={{ bg: "#003737" }}>
//               Add to cart
//             </Button>
//           </VStack>
//         </Box>
//         <Box w="100%">
//           <VStack w="100%" h="100%">
//             <Image
//               src="/images/sunflower.png"
//               alt="sunflower-oil"
//               bg="#eaebeb"
//             />

//             <VStack w="100%" alignItems="flex-start" gap="0">
//               <Text>Wlt Pure Sunflower Oil</Text>
//               <Text fontWeight="500">
//                 $ 9.39{" "}
//                 <span
//                   style={{
//                     fontSize: "0.7rem",
//                     fontWeight: "normal",
//                     position: "absolute",
//                     marginLeft: "0.5rem",
//                     textDecoration: "line-through",
//                   }}
//                 >
//                   $ 12.35
//                 </span>
//               </Text>
//               <HStack alignItems="center">
//                 <Rating defaultValue={3} colorPalette="green" size="sm" />
//                 <Text fontSize="0.7rem">(65)</Text>
//               </HStack>
//             </VStack>

//             <Button w="100%" _hover={{ bg: "#003737" }}>
//               Add to cart
//             </Button>
//           </VStack>
//         </Box>
//         <Box w="100%">
//           <VStack w="100%" h="100%">
//             <Image
//               src="/images/sunflower.png"
//               alt="sunflower-oil"
//               bg="#eaebeb"
//             />

//             <VStack w="100%" alignItems="flex-start" gap="0">
//               <Text>Wlt Pure Sunflower Oil</Text>
//               <Text fontWeight="500">
//                 $ 9.39{" "}
//                 <span
//                   style={{
//                     fontSize: "0.7rem",
//                     fontWeight: "normal",
//                     position: "absolute",
//                     marginLeft: "0.5rem",
//                     textDecoration: "line-through",
//                   }}
//                 >
//                   $ 12.35
//                 </span>
//               </Text>
//               <HStack alignItems="center">
//                 <Rating defaultValue={3} colorPalette="green" size="sm" />
//                 <Text fontSize="0.7rem">(65)</Text>
//               </HStack>
//             </VStack>

//             <Button w="100%" _hover={{ bg: "#003737" }}>
//               Add to cart
//             </Button>
//           </VStack>
//         </Box>
//       </Grid>
//     </>
//   );
// };

// export default Catalog;

import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Rating } from "@/components/ui/rating";
import React, { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

const CatalogItem = ({ product, onCartChange, isInCart }) => {
  const [buttonState, setButtonState] = useState("buy");

  const handleHover = () => {
    if (!isInCart) {
      setButtonState("add-to-cart");
    }
  };

  const handleLeave = () => {
    if (!isInCart) {
      setButtonState("buy");
    }
  };

  const handleClick = () => {
    const newCartStatus = !isInCart;
    onCartChange(product, newCartStatus);
    setButtonState(newCartStatus ? "added-to-cart" : "buy");
  };

  return (
    <Box w="100%">
      <VStack w="100%" h="100%">
        <Link to={`/product/${product.id}`} style={{ width: "100%" }}>
          <VStack w="100%" alignItems="flex-start" gap="0">
            <Image src={product.image} alt={product.name} bg="#eaebeb" />

            <VStack w="100%" alignItems="flex-start" gap="0">
              <Text>{product.name}</Text>
              <Text fontWeight="500">
                ${product.price}{" "}
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: "normal",
                    position: "absolute",
                    marginLeft: "0.5rem",
                    textDecoration: "line-through",
                  }}
                >
                  ${product.oldPrice}
                </span>
              </Text>
              <HStack alignItems="center">
                <Rating
                  defaultValue={product.rating}
                  colorPalette="green"
                  size="sm"
                />
                <Text fontSize="0.7rem">({product.reviews})</Text>
              </HStack>
            </VStack>
          </VStack>
        </Link>
        <Button
          w="100%"
          bg={isInCart ? "#003737" : undefined}
          _hover={{ bg: "#003737" }}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          onClick={handleClick}
        >
          {buttonState === "buy" && "Buy"}
          {buttonState === "add-to-cart" && "Add to cart"}
          {buttonState === "added-to-cart" && "Added to cart"}
        </Button>
      </VStack>
    </Box>
  );
};

const Catalog = () => {
  const { cart, setCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Wlt Pure Sunflower Oil",
      image: "/images/sunflower.png",
      price: 9.39,
      oldPrice: 12.35,
      rating: 3,
      reviews: 65,
    },
    // Add more products as needed
  ];

  const handleCartChange = (product, addToCart) => {
    setCart((prevCart) =>
      addToCart
        ? [...prevCart, product]
        : prevCart.filter((item) => item.id !== product.id)
    );
  };

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="6" w="100%" p="1.25rem 4rem">
      {products.map((product) => (
        <CatalogItem
          key={product.id}
          product={product}
          isInCart={cart.some((item) => item.id === product.id)}
          onCartChange={handleCartChange}
        />
      ))}
    </Grid>
  );
};

export default Catalog;
