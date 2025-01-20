import { Box, Button, Image, Text, VStack, HStack } from "@chakra-ui/react";
import { useCart } from "../../contexts/CartContext";
import { toaster } from "../ui/toaster";
import { Rating } from "@/components/ui/rating";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart, removeFromCart, isInCart } = useCart();
  const [isHovering, setIsHovering] = useState(false);

  const handleCartAction = (e) => {
    e.stopPropagation();

    if (isInCart(product)) {
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

  const handleProductClick = () => {
    navigate(`/products/${product._id}`);
  };

  const getButtonText = () => {
    if (!isInCart(product)) return "Add to Cart";
    return isHovering ? "Remove" : "Added to cart";
  };

  const getButtonColor = () => {
    const inCart = isInCart(product);
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

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      transition="all 0.2s"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "lg",
        cursor: "pointer",
      }}
      bg="white"
      onClick={handleProductClick}
    >
      <Box
        position="relative"
        height="200px"
        overflow="hidden"
        borderRadius="md"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          width="100%"
          height="100%"
          objectFit="cover"
          fallbackSrc="https://via.placeholder.com/200"
        />
      </Box>

      <VStack
        h="145px"
        mt={4}
        align="stretch"
        justifyContent="space-between"
        spacing={1}
      >
        <Text fontSize="0.8rem" fontWeight="semibold" noOfLines={1}>
          {product.name}
        </Text>

        <Text fontSize="0.6rem" color="gray.600" noOfLines={1}>
          {product.description}
        </Text>

        <HStack alignItems="center">
          <Rating
            readOnly
            defaultValue={product.rating}
            colorPalette="green"
            size="sm"
          />
          <Text fontSize="0.7rem">({product.reviews.length})</Text>
        </HStack>

        <HStack justify="space-between" align="center" mt={1}>
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
          <HStack>
            <Link
              to="mailto:foodexportservices@mail.com"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src="/images/email.png" alt="email" />
            </Link>

            <Link
              to="https://wa.me/+16822963812"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/icons/whatsapp.svg"
                alt="whatsapp"
                transform="scale(1.2)"
              />
            </Link>

            <Link
              to="https://www.instagram.com/foodexportservices"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src="/icons/instagram.svg" alt="instagram" />
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
            size={{ md: "xs" }}
            p={{ base: "0.3rem" }}
            fontSize={{ base: "0.5rem" }}
          >
            {getButtonText()}
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProductCard;
