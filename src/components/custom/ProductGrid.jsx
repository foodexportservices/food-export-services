import React from "react";
import {
  Grid,
  GridItem,
  Text,
  Button,
  Box,
  Heading,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Create a motion-enabled version of GridItem
const MotionGridItem = motion(GridItem);

const ProductGrid = () => {
  // Animation variants for different effects
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.2,
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    }),
  };

  const products = [
    {
      id: 1,
      name: "Grains",
      tagline: "Explore the farm-grown nutrient-filled assortment of grains",
      bgColor: "black",
      color: "white",
      gridArea: "1 / 1 / 2 / 3",
      customDelay: 0,
      link: "/shop",
      image: (
        <Image
          top={{ md: "1%" }}
          bottom={{ base: "-30%" }}
          right={{ md: "1%", base: "-13%" }}
          w={{ base: "16rem" }}
          position="absolute"
          src="/images/granules.png"
          alt="grains"
        />
      ),
    },
    {
      id: 2,
      name: "Oils",
      tagline:
        "Oils are versatile essentials, offering heart-healthy benefits, rich flavors for cooking, and nourishing properties for skin and hair care.",
      bgColor: "gray.100",
      color: "black",
      gridArea: "2 / 1 / 3 / 2",
      customDelay: 1,
      image: (
        <Image
          top={{ md: "40%" }}
          bottom={{ base: "-3%" }}
          right={{ md: "1%", base: "-43%" }}
          position="absolute"
          src="/images/oily.png"
          alt="grains"
          w="15rem"
        />
      ),
    },
    {
      id: 3,
      name: "Seeds",
      tagline:
        "Seeds are nutrient-rich, providing healthy fats and flavor for snacks, cooking, and baking.",
      bgColor: "gray.100",
      color: "black",
      gridArea: "2 / 2 / 3 / 3",
      customDelay: 2,
      image: (
        <Image
          top="-5%"
          right={{ md: "-8%", base: "-52%" }}
          position="absolute"
          src="/images/seedeys.png"
          alt="grains"
          w="12rem"
          transform={{ base: "rotate(90deg)" }}
        />
      ),
    },
    {
      id: 4,
      name: "Lentils",
      tagline:
        "Lentils are protein-packed and versatile, ideal for soups, salads, and wholesome meals.",
      bgColor: "gray.100",
      color: "black",
      gridArea: "3 / 1 / 4 / 2",
      customDelay: 3,
      image: (
        <Image
          top={{ md: "5%", base: "-58%" }}
          right={{ md: "-10%", base: "47%" }}
          position="absolute"
          src="/images/lentilsy.png"
          alt="grains"
          w="12rem"
          //   transform="rotate(180deg)"
        />
      ),
    },
    {
      id: 5,
      name: (
        <Text
          position="absolute"
          transform={{
            md: "translate(180px, 36px)",
            base: "translate(10px, 49px)",
          }}
          fontSize={{ md: "1.7rem", base: "2rem" }}
          color="gray.800"
          w={{ base: "5rem", md: "fit-content" }}
          textAlign={{ base: "center" }}
        >
          Shop Lots More
        </Text>
      ),
      //   name: "& Lots More",
      //       position: absolute;
      // transform: translate(233px, 53px);
      //   tagline: "An immersive way to experience entertainment",
      bgColor: "gray.100",
      color: "white",
      gridArea: "3 / 2 / 4 / 3",
      customDelay: 4,
      button: "none",
      image: (
        <Image
          // display="none"
          top="0%"
          right="0%"
          position="absolute"
          src="/images/lots.png"
          alt="grains"
          w={{ md: "40rem" }}
          h={{ base: "100%" }}
          transform={{ base: "rotate(180deg)", md: "scale(1.2)" }}
        />
      ),
    },
  ];

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={4}
      px="2rem"
      maxW="1200px"
      mx="auto"
    >
      {products.map((product) =>
        product.id === 5 ? (
          //   <Link key={product.id} to="/shop">
          <MotionGridItem
            to="/shop"
            as={Link}
            key={product.id}
            gridArea={product.gridArea}
            bg={product.bgColor}
            color={product.color}
            borderRadius="37.19px"
            p={8}
            position="relative"
            overflow="hidden"
            initial="hidden"
            animate="visible"
            custom={product.customDelay}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            //   as="link"
            //   to={product.link}
          >
            <Box maxW="60%">
              <Heading size="lg" mb={2}>
                {product.name}
              </Heading>
              <Text mb={4}>{product.tagline}</Text>
              <Button
                display={product.button || "flex"}
                variant={product.color === "white" ? "solid" : "solid"}
                colorScheme={
                  product.color === "white" ? "whiteAlpha" : "whiteAlpha"
                }
                size="sm"
                border="1px solid #fff"
              >
                Shop Now
              </Button>
            </Box>
            {product.image}
          </MotionGridItem>
        ) : (
          //   </Link>
          <MotionGridItem
            key={product.id}
            gridArea={product.gridArea}
            bg={product.bgColor}
            color={product.color}
            borderRadius="37.19px"
            p={8}
            position="relative"
            overflow="hidden"
            initial="hidden"
            animate="visible"
            custom={product.customDelay}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            //   as="link"
            //   to={product.link}
          >
            <Box maxW={{ md: "60%" }}>
              <Heading size="lg" mb={2}>
                {product.name}
              </Heading>
              <Text mb={4}>{product.tagline}</Text>
              <Link to="/shop">
                <Button
                  display={product.button || "flex"}
                  variant={product.color === "white" ? "solid" : "solid"}
                  colorScheme={
                    product.color === "white" ? "whiteAlpha" : "whiteAlpha"
                  }
                  size="sm"
                  border="1px solid #fff"
                >
                  Shop Now
                </Button>
              </Link>
            </Box>
            {product.image}
          </MotionGridItem>
        )
      )}
    </Grid>
  );
};

export default ProductGrid;

// import React from "react";
// import {
//   Grid,
//   GridItem,
//   Text,
//   Button,
//   Box,
//   Heading,
//   Image,
//   Link,
// } from "@chakra-ui/react";
// import { motion } from "framer-motion";
// import { Link as RouterLink } from "react-router-dom";

// // Create a motion-enabled version of GridItem
// const MotionGridItem = motion(GridItem);
// const MotionLink = motion(Link);

// const ProductGrid = () => {
//   const itemVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: (custom) => ({
//       opacity: 1,
//       scale: 1,
//       transition: {
//         delay: custom * 0.2,
//         type: "spring",
//         bounce: 0.4,
//         duration: 0.8,
//       },
//     }),
//   };

//   const products = [
//     {
//       id: 1,
//       name: "Grains",
//       tagline:
//         "From ancient wisdom to modern nutrition - discover our premium selection of life-sustaining grains",
//       bgColor: "black",
//       color: "white",
//       gridArea: "1 / 1 / 2 / 3",
//       customDelay: 0,
//       image: (
//         <Image
//           top="1%"
//           right="1%"
//           position="absolute"
//           src="/images/granules.png"
//           alt="grains"
//         />
//       ),
//     },
//     {
//       id: 2,
//       name: "Oils",
//       tagline:
//         "Pure, pressed perfection - elevate your cooking with our artisanal collection of natural oils",
//       bgColor: "gray.100",
//       color: "black",
//       gridArea: "2 / 1 / 3 / 2",
//       customDelay: 1,
//       image: (
//         <Image
//           top="40%"
//           right="1%"
//           position="absolute"
//           src="/images/oily.png"
//           alt="oils"
//           w="15rem"
//         />
//       ),
//     },
//     {
//       id: 3,
//       name: "Seeds",
//       tagline:
//         "Small powerhouses of nutrition - unleash nature's potential with our diverse seed selection",
//       bgColor: "gray.100",
//       color: "black",
//       gridArea: "2 / 2 / 3 / 3",
//       customDelay: 2,
//       image: (
//         <Image
//           top="-5%"
//           right="0%"
//           position="absolute"
//           src="/images/seedeys.png"
//           alt="seeds"
//           w="12rem"
//         />
//       ),
//     },
//     {
//       id: 4,
//       name: "Lentils",
//       tagline:
//         "Heritage meets health - explore our rainbow of protein-packed, earth-friendly lentils",
//       bgColor: "gray.100",
//       color: "black",
//       gridArea: "3 / 1 / 4 / 2",
//       customDelay: 3,
//       image: (
//         <Image
//           top="5%"
//           right="-10%"
//           position="absolute"
//           src="/images/lentilsy.png"
//           alt="lentils"
//           w="12rem"
//         />
//       ),
//     },
//     // {
//     //   id: 5,
//     //   name: (
//     //     <Text
//     //       position="absolute"
//     //       transform="translate(200px, 56px)"
//     //       fontSize="1.7rem"
//     //     >
//     //       Shop Lots More
//     //     </Text>
//     //   ),
//     //   bgColor: "gray.800",
//     //   color: "white",
//     //   gridArea: "3 / 2 / 4 / 3",
//     //   customDelay: 4,
//     //   button: "none",
//     //   image: (
//     //     <Image
//     //       top="0%"
//     //       right="0%"
//     //       position="absolute"
//     //       src="/images/lots.png"
//     //       alt="more products"
//     //       w="40rem"
//     //     />
//     //   ),
//     // },
//     {
//       id: 5,
//       name: (
//         <Text
//           position="absolute"
//           transform="translate(200px, 56px)"
//           fontSize="1.7rem"
//         >
//           Shop Lots More
//         </Text>
//       ),
//       //   name: "& Lots More",
//       //       position: absolute;
//       // transform: translate(233px, 53px);
//       //   tagline: "An immersive way to experience entertainment",
//       bgColor: "gray.800",
//       color: "white",
//       gridArea: "3 / 2 / 4 / 3",
//       customDelay: 4,
//       button: "none",
//       image: (
//         <Image
//           //   display="none"
//           top="0%"
//           right="0%"
//           position="absolute"
//           src="/images/lots.png"
//           alt="grains"
//           w="40rem"
//           //   transform="rotate(180deg)"
//         />
//       ),
//     },
//   ];

//   return (
//     <Grid
//       templateColumns="repeat(2, 1fr)"
//       gap={4}
//       px="2rem"
//       maxW="1200px"
//       mx="auto"
//     >
//       {products.map((product) =>
//         product.id === 5 ? (
//           <MotionLink
//             key={product.id}
//             as={RouterLink}
//             to="/shop"
//             _hover={{ textDecoration: "none" }}
//             display="block"
//           >
//             <MotionGridItem
//               gridArea={product.gridArea}
//               bg={product.bgColor}
//               color={product.color}
//               borderRadius="37.19px"
//               p={8}
//               position="relative"
//               overflow="hidden"
//               initial="hidden"
//               animate="visible"
//               custom={product.customDelay}
//               variants={itemVariants}
//               whileHover={{
//                 scale: 1.02,
//                 transition: { duration: 0.2 },
//               }}
//             >
//               <Box maxW="60%">{product.name}</Box>
//               {product.image}
//             </MotionGridItem>
//           </MotionLink>
//         ) : (
//           <MotionGridItem
//             key={product.id}
//             gridArea={product.gridArea}
//             bg={product.bgColor}
//             color={product.color}
//             borderRadius="37.19px"
//             p={8}
//             position="relative"
//             overflow="hidden"
//             initial="hidden"
//             animate="visible"
//             custom={product.customDelay}
//             variants={itemVariants}
//             whileHover={{
//               scale: 1.02,
//               transition: { duration: 0.2 },
//             }}
//           >
//             <Box maxW="60%">
//               <Heading size="lg" mb={2}>
//                 {product.name}
//               </Heading>
//               <Text mb={4}>{product.tagline}</Text>
//               <Link
//                 as={RouterLink}
//                 to="/shop"
//                 _hover={{ textDecoration: "none" }}
//               >
//                 <Button
//                   display={product.button || "flex"}
//                   variant={product.color === "white" ? "solid" : "solid"}
//                   colorScheme={
//                     product.color === "white" ? "whiteAlpha" : "whiteAlpha"
//                   }
//                   size="sm"
//                   border="1px solid #fff"
//                 >
//                   Shop Now
//                 </Button>
//               </Link>
//             </Box>
//             {product.image}
//           </MotionGridItem>
//         )
//       )}
//     </Grid>
//   );
// };

// export default ProductGrid;
