// import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
// import {
//   MenuContent,
//   MenuItem,
//   MenuRoot,
//   MenuTrigger,
// } from "@/components/ui/menu";
// import {
//   DrawerActionTrigger,
//   DrawerBackdrop,
//   DrawerBody,
//   DrawerCloseTrigger,
//   DrawerContent,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerRoot,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";
// import { Badge, IconButton } from "@mui/material";
// import { ShoppingCart, User, LogOut, Menu } from "lucide-react";
// import React from "react"; // Removed unused useEffect
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useCart } from "../../contexts/CartContext";
// import { useDispatch, useSelector } from "react-redux";
// import { logoutUser, selectUser } from "../../redux/userSlice";

// const Header = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { cart } = useCart();
//   const dispatch = useDispatch();
//   const user = useSelector(selectUser);

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     navigate("/");
//   };

//   const handleCartClick = () => {
//     navigate("/cart");
//   };

//   return (
//     <>
//       <HStack
//         display={{ base: "flex", md: "none" }}
//         mb="1rem"
//         w="100%"
//         p="1rem 1rem"
//         justifyContent="space-between"
//       >
//         <Link to="/">
//           <Image src="/images/logo.png" alt="logo" w="5rem" />
//         </Link>

//         <DrawerRoot>
//           <DrawerBackdrop />
//           <DrawerTrigger asChild>
//             <IconButton>
//               <Menu />
//             </IconButton>
//           </DrawerTrigger>
//           <DrawerContent>
//             <DrawerHeader>
//               <DrawerTitle>Menu</DrawerTitle>
//             </DrawerHeader>
//             <DrawerBody>

//             </DrawerBody>
//             {/* <DrawerFooter> */}
//               {/* <DrawerActionTrigger asChild>
//                 <Button variant="outline">Cancel</Button>
//               </DrawerActionTrigger> */}
//               <Button>Login</Button>
//             </DrawerFooter>
//             <DrawerCloseTrigger />
//           </DrawerContent>
//         </DrawerRoot>
//       </HStack>

//       <HStack
//         display={{ base: "none", md: "flex" }}
//         mb="1rem"
//         w="100%"
//         p="1.25rem 4rem"
//         justifyContent="space-between"
//         alignItems="center"
//       >
//         <HStack gap="1.5rem">
//           <Link to="/">
//             <VStack alignItems="flex-start">
//               <Text fontSize="1.125rem" color="#001414">
//                 HOME
//               </Text>
//               <Box
//                 h="0.375rem"
//                 w="1.5rem"
//                 borderRadius="20px"
//                 bg={location.pathname === "/" ? "#003737" : "transparent"}
//               />
//             </VStack>
//           </Link>
//           <Link to="/shop">
//             <VStack alignItems="flex-start">
//               <Text fontSize="1.125rem" color="#001414">
//                 SHOP
//               </Text>
//               <Box
//                 h="0.375rem"
//                 w="1.5rem"
//                 borderRadius="20px"
//                 bg={location.pathname === "/shop" ? "#003737" : "transparent"}
//               />
//             </VStack>
//           </Link>
//         </HStack>

//         <Link to="/">
//           <Image src="/images/logo.png" alt="logo" w="5rem" />
//         </Link>

//         <HStack gap="1.5rem">
//           {user ? (
//             <MenuRoot>
//               <MenuTrigger asChild cursor="pointer">
//                 <User />
//               </MenuTrigger>
//               <MenuContent>
//                 <MenuItem
//                   cursor="pointer"
//                   value="profile"
//                   onClick={() => navigate("/profile")}
//                 >
//                   Profile
//                 </MenuItem>
//                 <MenuItem
//                   cursor="pointer"
//                   value="orders"
//                   onClick={() => navigate("/orders")}
//                 >
//                   Orders
//                 </MenuItem>
//                 <MenuItem
//                   cursor="pointer"
//                   value="logout"
//                   onClick={handleLogout}
//                   icon={<LogOut size={16} />}
//                 >
//                   Logout
//                 </MenuItem>
//               </MenuContent>
//             </MenuRoot>
//           ) : (
//             <Link to="/login">
//               <User />
//             </Link>
//           )}

//           <Box cursor="pointer" onClick={handleCartClick}>
//             <Badge badgeContent={cart.length} color="success">
//               <ShoppingCart />
//             </Badge>
//           </Box>
//         </HStack>
//       </HStack>
//     </>
//   );
// };

// export default Header;

import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Badge, IconButton } from "@mui/material";
import { ShoppingCart, User, LogOut, Menu } from "lucide-react";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, selectUser } from "../../redux/userSlice";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = useCart();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <>
      <HStack
        bg="#faffff"
        zIndex={2}
        position="fixed"
        display={{ base: "flex", md: "none" }}
        mb="1rem"
        w={{ md: "100%", base: "100dvw" }}
        p="1rem 1rem"
        justifyContent="space-between"
      >
        <Link to="/">
          <Image src="/images/logo.png" alt="logo" w="5rem" />
        </Link>

        <DrawerRoot>
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <IconButton>
              <Menu />
            </IconButton>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Menu</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
              <VStack gap="1.5rem" align="stretch">
                <Link to="/">
                  <VStack alignItems="flex-start">
                    <Text fontSize="1.125rem" color="#001414">
                      HOME
                    </Text>
                    <Box
                      h="0.375rem"
                      w="1.5rem"
                      borderRadius="20px"
                      bg={location.pathname === "/" ? "#003737" : "transparent"}
                    />
                  </VStack>
                </Link>
                <Link to="/shop">
                  <VStack alignItems="flex-start">
                    <Text fontSize="1.125rem" color="#001414">
                      SHOP
                    </Text>
                    <Box
                      h="0.375rem"
                      w="1.5rem"
                      borderRadius="20px"
                      bg={
                        location.pathname === "/shop"
                          ? "#003737"
                          : "transparent"
                      }
                    />
                  </VStack>
                </Link>

                {user ? (
                  <>
                    <Link to="/profile">
                      <VStack alignItems="flex-start">
                        <Text fontSize="1.125rem" color="#001414">
                          PROFILE
                        </Text>
                        <Box
                          h="0.375rem"
                          w="1.5rem"
                          borderRadius="20px"
                          bg={
                            location.pathname === "/profile"
                              ? "#003737"
                              : "transparent"
                          }
                        />
                      </VStack>
                    </Link>

                    <Link to="/orders">
                      <VStack alignItems="flex-start">
                        <Text fontSize="1.125rem" color="#001414">
                          ORDERS
                        </Text>
                        <Box
                          h="0.375rem"
                          w="1.5rem"
                          borderRadius="20px"
                          bg={
                            location.pathname === "/orders"
                              ? "#003737"
                              : "transparent"
                          }
                        />
                      </VStack>
                    </Link>

                    {/* <Text fontSize="1.125rem" color="#001414" cursor="pointer">
                      LOGOUT
                    </Text> */}
                  </>
                ) : (
                  <Link to="/login">
                    <Text fontSize="1.125rem" color="#001414">
                      LOGIN
                    </Text>
                  </Link>
                )}

                <Link to="/cart">
                  <VStack alignItems="flex-start">
                    <HStack spacing="0.5rem">
                      <Badge badgeContent={cart.length} color="success">
                        <ShoppingCart />
                      </Badge>
                      <Text fontSize="1.125rem" color="#001414">
                        CART
                      </Text>
                    </HStack>
                    <Box
                      h="0.375rem"
                      w="1.5rem"
                      borderRadius="20px"
                      bg={
                        location.pathname === "/cart"
                          ? "#003737"
                          : "transparent"
                      }
                    />
                  </VStack>
                </Link>

                {user && <Button onClick={handleLogout}>LOGOUT</Button>}

                {/* <Box cursor="pointer" onClick={handleCartClick}>
                  <HStack spacing="0.5rem">
                    <Badge badgeContent={cart.length} color="success">
                      <ShoppingCart />
                    </Badge>
                    <Text fontSize="1.125rem" color="#001414">
                      CART
                    </Text>
                  </HStack>
                </Box> */}
              </VStack>
            </DrawerBody>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
      </HStack>

      <HStack
        display={{ base: "none", md: "flex" }}
        mb="1rem"
        w="100%"
        p="1.25rem 4rem"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Rest of the desktop header remains the same */}
        <HStack gap="1.5rem">
          <Link to="/">
            <VStack alignItems="flex-start">
              <Text fontSize="1.125rem" color="#001414">
                HOME
              </Text>
              <Box
                h="0.375rem"
                w="1.5rem"
                borderRadius="20px"
                bg={location.pathname === "/" ? "#003737" : "transparent"}
              />
            </VStack>
          </Link>
          <Link to="/shop">
            <VStack alignItems="flex-start">
              <Text fontSize="1.125rem" color="#001414">
                SHOP
              </Text>
              <Box
                h="0.375rem"
                w="1.5rem"
                borderRadius="20px"
                bg={location.pathname === "/shop" ? "#003737" : "transparent"}
              />
            </VStack>
          </Link>
        </HStack>

        <Link to="/">
          <Image src="/images/logo.png" alt="logo" w="5rem" />
        </Link>

        <HStack gap="1.5rem">
          {user ? (
            <MenuRoot>
              <MenuTrigger asChild cursor="pointer">
                <User />
              </MenuTrigger>
              <MenuContent>
                <MenuItem
                  cursor="pointer"
                  value="profile"
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  cursor="pointer"
                  value="orders"
                  onClick={() => navigate("/orders")}
                >
                  Orders
                </MenuItem>
                <MenuItem
                  cursor="pointer"
                  value="logout"
                  onClick={handleLogout}
                  icon={<LogOut size={16} />}
                >
                  Logout
                </MenuItem>
              </MenuContent>
            </MenuRoot>
          ) : (
            <Link to="/login">
              <User />
            </Link>
          )}

          <Box cursor="pointer" onClick={handleCartClick}>
            <Badge badgeContent={cart.length} color="success">
              <ShoppingCart />
            </Badge>
          </Box>
        </HStack>
      </HStack>
    </>
  );
};

export default Header;
