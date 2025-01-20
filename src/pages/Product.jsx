import {
  Box,
  HStack,
  Image,
  VStack,
  Text,
  Stack,
  Separator,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
import { Rating } from "@/components/ui/rating";
import { Avatar } from "@/components/ui/avatar";
import { Tooltip } from "@/components/ui/tooltip";
import Header from "../components/custom/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSelectedProduct,
  selectProductError,
  fetchProductById,
  clearSelectedProduct,
  fetchProductReviews,
  selectProductReviews,
} from "../redux/productSlice";
import "../assets/styles/Product.css";
import { Minus, Plus } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import ReviewForm from "../components/custom/ReviewForm";
import ExpandableText from "../components/custom/ExpandedText";
import ContactBanner from "../components/custom/ContactBanner";
import { toaster } from "../components/ui/toaster";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selectSelectedProduct);
  const reviews = useSelector(selectProductReviews(id)) || [];
  const error = useSelector(selectProductError(id));
  const {
    addToCart,
    removeFromCart,
    cart,
    isInCart: contextIsInCart,
  } = useCart();
  const [isHovering, setIsHovering] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
      dispatch(fetchProductReviews(id));
    }
    return () => {
      dispatch(clearSelectedProduct());
    };
  }, [id, dispatch]);

  useEffect(() => {
    const cartItem = cart.find((item) => item.productId === id);
    if (cartItem) {
      setQuantity(cartItem.quantity);
      setIsInCart(true);
    } else {
      setQuantity(1);
      setIsInCart(false);
    }
  }, [cart, id]);

  const handleAddToCart = () => {
    addToCart({ productId: product._id, quantity });
    setIsInCart(true);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product._id);
    setIsInCart(false);
    setQuantity(1);
  };

  const updateQuantity = (newQuantity) => {
    setQuantity(newQuantity);
    const updatedCart = cart.map((item) =>
      item.productId === product._id ? { ...item, quantity: newQuantity } : item
    );
    localStorage.setItem("fesCart", JSON.stringify(updatedCart));
  };

  if (error && typeof error === "string") {
    return (
      <Box textAlign="center" color="red.500" p={8}>
        <Text fontSize="lg">Error: {error}</Text>
      </Box>
    );
  }

  if (!product) {
    return null;
  }

  const onChange = (index) => {
    console.log("Slide changed to:", index);
  };

  const onClickItem = (index) => {
    console.log("Item clicked at index:", index);
  };

  const onClickThumb = (index) => {
    console.log("Thumbnail clicked at index:", index);
  };

  const getButtonText = () => {
    if (!contextIsInCart(product)) return "Add to Cart";
    return isHovering ? "Remove" : "Added to cart";
  };

  const getButtonColor = () => {
    const inCart = contextIsInCart(product);
    if (!inCart) {
      return {
        bg: "#003737",
        hoverBg: "#059a9a",
      };
    }
    return {
      bg: "#059a9a",
      hoverBg: isHovering ? "#DC2626" : "#059a9a",
    };
  };

  const buttonColors = getButtonColor();

  const handleCartAction = (e) => {
    e.stopPropagation();

    if (contextIsInCart(product)) {
      removeFromCart(product._id);
      toaster.create({
        title: "Removed from cart",
        description: `${product.name} has been removed from your cart`,
        type: "warning",
      });
    } else {
      addToCart(product);
      toaster.create({
        title: "Added to cart",
        description: `${product.name} has been added to your cart`,
        type: "success",
      });
    }
  };

  return (
    <Box>
      <VStack>
        <Box w={{ md: "100dvw" }} zIndex={2} position="fixed">
          <ContactBanner />

          <Header />
        </Box>
        <HStack
          mt="7rem"
          display={{ md: "flex", base: "none" }}
          p="1.25rem 4rem"
          w="100%"
          alignItems="stretch"
          spacing={0}
        >
          <VStack w="50%" h="100%" align="stretch">
            <Carousel
              showIndicators={false}
              showArrows={true}
              onChange={onChange}
              onClickItem={onClickItem}
              onClickThumb={onClickThumb}
              className="product-carousel"
            >
              {product.images &&
                product.images.map((image, index) => (
                  <div key={index}>
                    <Image
                      src={image}
                      alt={`${product.name} - Image ${index + 1}`}
                    />
                    <p className="legend">{`${product.name} - Image ${
                      index + 1
                    }`}</p>
                  </div>
                ))}
            </Carousel>
          </VStack>

          <VStack w="50%" h="100%" align="flex-start" p={5} justify="center">
            <Text fontSize="2rem" fontWeight="bold" mb="1rem">
              {product.name}
            </Text>
            <HStack alignItems="center">
              <Rating
                readOnly
                // value={product.rating}
                value={product?.rating || 0}
                colorPalette="yellow"
                className="hereee"
              />

              <Stack
                alignItems="center"
                bg="#fff"
                border="1px solid rgb(223, 221, 220)"
                justifyContent="center"
                p="4px 8px"
                borderRadius="6px"
              >
                <Text
                  fontWeight="600"
                  fontSize="18px"
                  // color="rgb(107, 111, 107)"
                >
                  {/* {product.reviews.length || reviews.length} */}
                  {product?.reviews?.length || reviews.length || 0}
                </Text>
              </Stack>
            </HStack>
            <HStack my="1rem" fontWeight="600" gap="1rem">
              {/* <HStack>
                <Text>Price:</Text>
                <Text fontSize="24px" fontWeight="700">
                  ${product.price}
                </Text>
              </HStack> */}
              {/* <Separator orientation="vertical" height="7" size="lg" /> */}
              <HStack>
                <Text>Quantity:</Text>
                <HStack
                  gap="0"
                  border="0.5px solid rgba(224, 231, 231, 1)"
                  borderRadius="4.97px"
                >
                  <IconButton
                    aria-label="Call support"
                    variant="plain"
                    onClick={() => updateQuantity(Math.max(quantity - 1, 1))}
                  >
                    <Minus />
                  </IconButton>

                  <Stack
                    alignItems="center"
                    bg="#fff"
                    border="1px solid rgb(223, 221, 220)"
                    justifyContent="center"
                    p="2px 8px"
                    borderRadius="6px"
                  >
                    <Text
                      fontWeight="600"
                      fontSize="18px"
                      color="rgb(107, 111, 107)"
                    >
                      {quantity}
                    </Text>
                  </Stack>
                  <IconButton
                    aria-label="Call support"
                    variant="plain"
                    onClick={() => updateQuantity(quantity + 1)}
                  >
                    <Plus />
                  </IconButton>
                </HStack>
              </HStack>
            </HStack>
            {/* <Tooltip content={product.description}>
              <Text
                noOfLines={5}
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
                _hover={{
                  whiteSpace: "normal",
                }}
              >
                {product.description}
              </Text>
            </Tooltip> */}

            <Text>{product.description}</Text>
            <VStack my="1rem" w="100%" gap="0.5rem">
              {/* <Button
                variant="outline"
                w="100%"
                border="1px solid rgba(78, 80, 80, 1)"
                borderRadius="5.98px"
                fontWeight="600"
                fontSize="16px"
              >
                Buy Now
              </Button> */}
              <Button
                w="100%"
                borderRadius="5.98px"
                fontWeight="600"
                fontSize="16px"
                onClick={isInCart ? handleRemoveFromCart : handleAddToCart}
                onMouseEnter={(e) => {
                  if (isInCart) e.target.innerText = "Remove";
                }}
                onMouseLeave={(e) => {
                  if (isInCart) e.target.innerText = "Added to Cart";
                }}
              >
                {isInCart ? "Added to Cart" : "Add to Cart"}
              </Button>
            </VStack>

            {/* <NativeSelectRoot>
              <NativeSelectField
                placeholder="Select Location"
                width="100%"
                p="12px"
                borderRadius="8px"
                border="1px solid rgb(0, 128, 127)"
                bg="rgb(224, 231, 231)"
                cursor="pointer"
              >
                <option value="react">React</option>
                <option value="vue">Vue</option>
                <option value="angular">Angular</option>
                <option value="svelte">Svelte</option>
              </NativeSelectField>
            </NativeSelectRoot> */}

            <VStack w="100%" alignItems="flex-start">
              <Text fontWeight="500" fontSize="1.2rem">
                Customer Reviews
              </Text>
              <VStack alignItems="flex-start" w="100%" spacing={4}>
                {reviews.map((review, index) => (
                  <HStack w="100%" alignItems="flex-start" key={index}>
                    <Avatar
                      size="xs"
                      // name={review.user?.name}
                      name={review?.user?.name}
                      src={review?.user?.image}
                    />
                    <VStack w="100%" alignItems="flex-start" gap="0">
                      <Text fontWeight="500" fontSize="1.2rem">
                        {review?.user?.name}
                      </Text>
                      <Text color="rgb(111, 107, 105)">
                        {/* {new Date(review.date).toLocaleDateString()} */}
                        {review?.date
                          ? new Date(review.date).toLocaleDateString()
                          : ""}
                      </Text>
                      <HStack alignItems="center" my="0.5rem">
                        <Text fontWeight="500" fontSize="1.2rem">
                          Rating:
                        </Text>
                        <Rating
                          readOnly
                          // value={review.rating}
                          value={review?.rating || 0}
                          colorPalette="yellow"
                        />
                      </HStack>
                      <Text>{review?.comment}</Text>
                    </VStack>
                  </HStack>
                ))}
              </VStack>
              <Box w="100%" p={4} bg="gray.50" borderRadius="md">
                <Text fontWeight="500" fontSize="1.2rem" mb={4}>
                  Write a Review
                </Text>
                <ReviewForm productId={id} />
              </Box>
            </VStack>
          </VStack>
        </HStack>

        <VStack
          display={{ md: "none", base: "flex" }}
          mt={{ base: "8rem" }}
          pb="3rem"
          w="100dvw"
          alignItems="flex-start"
        >
          {/* <Carousel
            showIndicators={false}
            showArrows={true}
            onChange={onChange}
            onClickItem={onClickItem}
            onClickThumb={onClickThumb}
            className="product-carousel"
          >
            <div>
              <Image src="/images/canola.png" alt="Slide 1" />
              <p className="legend">Legend 1</p>
            </div>
            <div>
              <img src="/images/corn.png" alt="Slide 2" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src="/images/grains.png" alt="Slide 3" />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img src="/images/olive.png" alt="Slide 4" />
              <p className="legend">Legend 4</p>
            </div>
            <div>
              <img src="/images/onions.png" alt="Slide 5" />
              <p className="legend">Legend 5</p>
            </div>
            <div>
              <img src="/images/palm.png" alt="Slide 6" />
              <p className="legend">Legend 6</p>
            </div>
          </Carousel> */}
          <Carousel
            showIndicators={false}
            showArrows={true}
            onChange={onChange}
            onClickItem={onClickItem}
            onClickThumb={onClickThumb}
            className="product-carousel"
          >
            {product.images &&
              product.images.map((image, index) => (
                <div key={index}>
                  <Image
                    src={image}
                    alt={`${product.name} - Image ${index + 1}`}
                  />
                  <p className="legend">{`${product.name} - Image ${
                    index + 1
                  }`}</p>
                </div>
              ))}
          </Carousel>

          <VStack px="2rem" mt="1rem" alignItems="flex-start">
            <Text mb="0.5rem" fontSize="1.3rem" fontWeight="600">
              {product.name}
            </Text>
            <HStack alignItems="center">
              <Rating
                readOnly
                // value={product.rating}
                value={product?.rating || 0}
                colorPalette="yellow"
                className="hereee"
              />

              <Stack
                alignItems="center"
                bg="#fff"
                border="1px solid rgb(223, 221, 220)"
                justifyContent="center"
                p="4px 8px"
                borderRadius="6px"
              >
                <Text
                  fontWeight="600"
                  fontSize="18px"
                  // color="rgb(107, 111, 107)"
                >
                  {/* {product.reviews.length || reviews.length} */}
                  {product?.reviews?.length || reviews.length || 0}
                </Text>
              </Stack>
            </HStack>
            <HStack my="1rem" fontWeight="600" gap="1rem">
              {/* <HStack>
                <Text>Price:</Text>
                <Text fontSize="24px" fontWeight="700">
                  ${product.price}
                </Text>
              </HStack> */}
              {/* <Separator orientation="vertical" height="7" size="lg" /> */}
              <HStack>
                <Text>Quantity:</Text>
                <HStack
                  gap="0"
                  border="0.5px solid rgba(224, 231, 231, 1)"
                  borderRadius="4.97px"
                >
                  <IconButton
                    aria-label="Call support"
                    variant="plain"
                    onClick={() => updateQuantity(Math.max(quantity - 1, 1))}
                  >
                    <Minus />
                  </IconButton>

                  <Stack
                    alignItems="center"
                    bg="#fff"
                    border="1px solid rgb(223, 221, 220)"
                    justifyContent="center"
                    p="2px 8px"
                    borderRadius="6px"
                  >
                    <Text
                      fontWeight="600"
                      fontSize="18px"
                      color="rgb(107, 111, 107)"
                    >
                      {quantity}
                    </Text>
                  </Stack>
                  <IconButton
                    aria-label="Call support"
                    variant="plain"
                    onClick={() => updateQuantity(quantity + 1)}
                  >
                    <Plus />
                  </IconButton>
                </HStack>
              </HStack>
            </HStack>

            <VStack mb="1rem" w="100%" alignItems="flex-start">
              <Text fontSize="1.3rem" fontWeight="600">
                Description
              </Text>
              <ExpandableText description={product.description} />
            </VStack>

            <HStack w="100%" justify="space-between" align="center" mb="1rem">
              {/* <Text fontSize="md" fontWeight="bold" color="#003737">
            ${product.price.toFixed(2)}
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: "normal",
                position: "absolute",
                marginLeft: "0.5rem",
                textDecoration: "line-through",
                color: "red",
              }}
            >
              ${product.oldPrice.toFixed(2)}
            </span>
          </Text> */}
              <HStack gap="1rem">
                <Link
                  to="mailto:foodexportservices@mail.com"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image src="/images/email.png" alt="email" w="40px" />
                </Link>

                <Link
                  to="https://wa.me/+16822963812"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src="/icons/whatsapp.svg"
                    alt="whatsapp"
                    transform="scale(1.2)"
                    w="40px"
                  />
                </Link>

                <Link
                  to="https://www.instagram.com/foodexportservices"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image src="/icons/instagram.svg" alt="instagram" w="40px" />
                </Link>
              </HStack>

              <Button
                onClick={handleCartAction}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                bg={buttonColors.bg}
                color="white"
                _hover={{
                  bg: buttonColors.hoverBg,
                  transform: "scale(1.02)",
                }}
                // size={{ md: "xs" }}
                // p={{ base: "0.3rem" }}
                // fontSize={{ base: "0.5rem" }}
              >
                {getButtonText()}
              </Button>
            </HStack>

            <VStack w="100%" alignItems="flex-start">
              <Text fontSize="1.3rem" fontWeight="600">
                Customer Reviews
              </Text>

              <VStack alignItems="flex-start" w="100%" spacing={4}>
                {reviews
                  // .slice(0, 2)
                  .slice(reviews.length - 5, reviews.length)
                  .map((review, index) => (
                    <HStack w="100%" alignItems="flex-start" key={index}>
                      <Avatar
                        size="xs"
                        // name={review.user?.name}
                        name={review?.user?.name}
                        src={review?.user?.image}
                      />
                      <VStack w="100%" alignItems="flex-start" gap="0">
                        <Text fontWeight="500" fontSize="1.2rem">
                          {review?.user?.name}
                        </Text>
                        <Text color="rgb(111, 107, 105)">
                          {/* {new Date(review.date).toLocaleDateString()} */}
                          {review?.date
                            ? new Date(review.date).toLocaleDateString()
                            : ""}
                        </Text>
                        <HStack alignItems="center" my="0.5rem">
                          <Text fontWeight="500" fontSize="1.2rem">
                            Rating:
                          </Text>
                          <Rating
                            readOnly
                            // value={review.rating}
                            value={review?.rating || 0}
                            colorPalette="yellow"
                          />
                        </HStack>
                        <Text>{review?.comment}</Text>
                      </VStack>
                    </HStack>
                  ))}
              </VStack>

              <Box w="100%" p={4} bg="gray.50" borderRadius="md">
                <Text fontWeight="500" fontSize="1.2rem" mb={4}>
                  Write a Review
                </Text>
                <ReviewForm productId={id} />
              </Box>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Product;
