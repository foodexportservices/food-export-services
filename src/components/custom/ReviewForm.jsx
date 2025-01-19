import { useState } from "react";
import { Box, Button, Text, Textarea, VStack } from "@chakra-ui/react";
import { Rating } from "@/components/ui/rating";
import { useDispatch } from "react-redux";
import {
  addProductReview,
  fetchProductById,
  fetchProductReviews,
} from "../../redux/productSlice";
import { toaster } from "../ui/toaster";

const ReviewForm = ({ productId }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if user is logged in
  const fesUser = localStorage.getItem("fesUser");
  const isLoggedIn = !!fesUser;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      toaster.create({
        title: "Authentication Required",
        description: "Please log in to submit a review",
        type: "error",
      });
      return;
    }

    if (rating === 0) {
      toaster.create({
        title: "Rating Required",
        description: "Please select a rating before submitting",
        type: "warning",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Submit the review
      await dispatch(
        addProductReview({
          productId,
          rating,
          comment,
        })
      ).unwrap();

      // Reset form
      setRating(0);
      setComment("");

      // Refresh data
      await Promise.all([
        dispatch(fetchProductById(productId)),
        dispatch(fetchProductReviews(productId)),
      ]);

      toaster.create({
        title: "Review Submitted",
        description: "Thank you for your review!",
        type: "success",
      });
    } catch (error) {
      toaster.create({
        title: "Error",
        description: error || "Failed to submit review",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <Box p={4} bg="gray.50" borderRadius="md" w="100%">
        <Text>Please log in to submit a review</Text>
      </Box>
    );
  }

  return (
    <VStack as="form" onSubmit={handleSubmit} spacing={4} w="100%">
      <VStack align="flex-start" w="100%">
        <Text fontWeight="500">Your Rating</Text>
        <Rating
          value={rating}
          onValueChange={(e) => setRating(e.value)}
          colorPalette="yellow"
          size="lg"
        />
      </VStack>

      <VStack align="flex-start" w="100%">
        <Text fontWeight="500">Your Review</Text>
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your review here..."
          minH="100px"
          bg="white"
        />
      </VStack>

      <Button
        type="submit"
        w="100%"
        isLoading={isSubmitting}
        loadingText="Submitting"
        disabled={rating === 0 || isSubmitting}
      >
        Submit Review
      </Button>
    </VStack>
  );
};

export default ReviewForm;
