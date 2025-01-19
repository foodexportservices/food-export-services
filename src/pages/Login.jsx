import { Box, HStack, Image, Input, Text, VStack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import {
  loginUser,
  selectAuthStatus,
  selectIsAuthenticated,
} from "../redux/userSlice";
import { toaster } from "../components/ui/toaster";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const status = useSelector(selectAuthStatus);

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.email || !credentials.password) {
      toaster.create({
        title: "Error",
        description: "Please fill in all fields",
        type: "error",
      });
      return;
    }

    try {
      await dispatch(loginUser(credentials)).unwrap();
      navigate("/");
    } catch (error) {
      toaster.create({
        title: "Login Failed",
        description: error || "Something went wrong",
        type: "error",
      });
    }
  };

  return (
    // <Box w="100vw" h="100vh">
    //   <HStack w="100%" h="100%">
    //     <VStack w="60%" h="100%" alignItems="center" justifyContent="center">
    //       <form onSubmit={handleSubmit} style={{ width: "100%" }}>
    //         <VStack
    //           borderRadius="20px"
    //           p="20px 60px"
    //           boxShadow="4px 3px 5px 2px rgba(0,0,0,0.75)"
    //           alignItems="flex-start"
    //           gap="1.5rem"
    //         >
    //           <HStack>
    //             <ChevronLeft />
    //             <Text>LOGO</Text>
    //           </HStack>

    //           <Text fontSize="36px" fontWeight="600" mb="1rem">
    //             Welcome Back !
    //           </Text>

    //           <VStack w="100%" alignItems="flex-start">
    //             <Field label="Email">
    //               <Input
    //                 placeholder="me@example.com"
    //                 w="25rem"
    //                 bg="#32ffff0a"
    //                 color="#101828"
    //                 fontWeight="600"
    //                 name="username"
    //                 value={credentials.username}
    //                 onChange={handleChange}
    //                 required
    //               />
    //             </Field>
    //             <Field label="Password">
    //               <Input
    //                 placeholder="Enter your password"
    //                 type="password"
    //                 w="25rem"
    //                 bg="#32ffff0a"
    //                 color="#101828"
    //                 fontWeight="600"
    //                 name="password"
    //                 value={credentials.password}
    //                 onChange={handleChange}
    //                 required
    //               />
    //             </Field>
    //             <HStack w="100%" justifyContent="flex-end">
    //               <Link to="forgot-password">
    //                 <Text fontSize="12px" _hover={{ transform: "scale(1.1)" }}>
    //                   Forgot password?
    //                 </Text>
    //               </Link>
    //             </HStack>
    //           </VStack>

    //           <Button
    //             w="100%"
    //             bg="#003737"
    //             _hover={{ bg: "#000", transform: "scale(1.02)" }}
    //             type="submit"
    //             isLoading={isLoading}
    //             loadingText="Logging in..."
    //           >
    //             Log in
    //           </Button>

    //           <HStack
    //             gap="0.3rem"
    //             w="100%"
    //             justifyContent="center"
    //             fontSize="14px"
    //           >
    //             <Text>I don't have an account?</Text>
    //             <Link to="register">
    //               <Text
    //                 fontSize="12px"
    //                 fontWeight="600"
    //                 color="#003737"
    //                 _hover={{ transform: "scale(1.1)" }}
    //               >
    //                 Sign Up
    //               </Text>
    //             </Link>
    //           </HStack>
    //         </VStack>
    //       </form>
    //     </VStack>
    //     <Box w="40%" h="100%" bg="#003737">
    //       <Image
    //         src="/images/Group 2014.svg"
    //         alt="shopper"
    //         w="440px"
    //         position="absolute"
    //         transform="translateX(-160px)"
    //         bottom="-3px"
    //       />
    //     </Box>
    //   </HStack>
    // </Box>
    <>
      <Box w="100vw" h="100vh">
        <HStack w="100%" h="100%">
          <VStack w="60%" h="100%" alignItems="center" justifyContent="center">
            <VStack
              borderRadius="20px"
              p="20px 60px"
              // boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
              boxShadow="4px 3px 5px 2px rgba(0,0,0,0.75)"
              alignItems="flex-start"
              gap="1.5rem"
            >
              <HStack>
                <ChevronLeft />
                <Text>LOGO</Text>
              </HStack>

              <Text fontSize="36px" fontWeight="600" mb="1rem">
                Welcome Back !
              </Text>

              <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <VStack w="100%" alignItems="flex-start">
                  <Field
                    label="Email"
                    // invalid
                    // errorText="This is an error text"
                  >
                    <Input
                      placeholder="me@example.com"
                      w="25rem"
                      bg="#32ffff0a"
                      color="#101828"
                      fontWeight="600"
                      name="email"
                      value={credentials.email}
                      onChange={handleChange}
                      required
                    />
                  </Field>
                  <Field
                    label="Password"
                    // invalid
                    // errorText="This is an error text"
                  >
                    <Input
                      placeholder="Enter your password"
                      type="password"
                      w="25rem"
                      bg="#32ffff0a"
                      color="#101828"
                      fontWeight="600"
                      name="password"
                      value={credentials.password}
                      onChange={handleChange}
                    />
                  </Field>
                  <HStack w="100%" justifyContent="flex-end">
                    <Link to="forgot-password">
                      <Text
                        fontSize="12px"
                        _hover={{ transform: "scale(1.1)" }}
                      >
                        Forgot password?
                      </Text>
                    </Link>
                  </HStack>
                </VStack>

                <Button
                  w="100%"
                  bg="#003737"
                  _hover={{ bg: "#000", transform: "scale(1.02)" }}
                  // onClick={handleLogin}
                  type="submit"
                  loading={status === "loading"}
                  loadingText="Logging in..."
                >
                  Log in
                </Button>
              </form>

              <HStack
                gap="0.3rem"
                w="100%"
                justifyContent="center"
                fontSize="14px"
              >
                <Text>I don't have an account?</Text>
                <Link to="register">
                  <Text
                    fontSize="12px"
                    fontWeight="600"
                    color="#003737"
                    _hover={{ transform: "scale(1.1)" }}
                  >
                    Sign Up
                  </Text>
                </Link>
              </HStack>
            </VStack>
          </VStack>
          <Box w="40%" h="100%" bg="#003737">
            <Image
              src="/images/Group 2014.svg"
              alt="shopper"
              w="440px"
              position="absolute"
              transform="translateX(-160px)"
              bottom="-3px"
            />
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Login;
