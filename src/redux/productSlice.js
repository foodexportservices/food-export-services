import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch all products
export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/products`);

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message || "Failed to fetch products");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch products");
    }
  }
);

// Fetch single product
export const fetchProductById = createAsyncThunk(
  "products/fetchById",
  async (productId, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/products/${productId}`
      );

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message || "Failed to fetch product");
      }

      const data = await response.json();

      // Automatically fetch reviews when a product is fetched
      dispatch(fetchProductReviews(productId));

      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch product");
    }
  }
);

// Fetch product reviews
export const fetchProductReviews = createAsyncThunk(
  "products/fetchReviews",
  async (productId, { rejectWithValue }) => {
    try {
      // Get the auth token from fesUser in localStorage
      const fesUser = localStorage.getItem("fesUser");
      const token = fesUser ? JSON.parse(fesUser).token : null;

      if (!token) {
        return rejectWithValue("Authentication required to fetch reviews");
      }

      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/products/${productId}/reviews`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message || "Failed to fetch reviews");
      }

      const data = await response.json();
      return { productId, reviews: data };
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch reviews");
    }
  }
);

// Add product review
export const addProductReview = createAsyncThunk(
  "products/addReview",
  async ({ productId, rating, comment }, { rejectWithValue }) => {
    try {
      const fesUser = localStorage.getItem("fesUser");
      const token = fesUser ? JSON.parse(fesUser).token : null;
      const user = fesUser ? JSON.parse(fesUser)._id : null;

      if (!token || !user) {
        return rejectWithValue("Authentication required to add review");
      }

      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/products/${productId}/reviews`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ product: productId, user, rating, comment }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message || "Failed to add review");
      }

      const data = await response.json();
      return { productId, review: data };
    } catch (error) {
      return rejectWithValue(error.message || "Failed to add review");
    }
  }
);

const initialState = {
  items: [],
  selectedProduct: null,
  reviews: {}, // { [productId]: Array of reviews }
  status: {
    list: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    single: {}, // { [productId]: 'idle' | 'loading' | 'succeeded' | 'failed' }
    reviews: {}, // { [productId]: 'idle' | 'loading' | 'succeeded' | 'failed' }
  },
  error: {
    list: null,
    single: {}, // { [productId]: error message }
    reviews: {}, // { [productId]: error message }
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchProducts cases
      .addCase(fetchProducts.pending, (state) => {
        state.status.list = "loading";
        state.error.list = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status.list = "succeeded";
        state.items = action.payload;
        state.error.list = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status.list = "failed";
        state.error.list = action.payload;
      })

      // Handle fetchProductById cases
      .addCase(fetchProductById.pending, (state, action) => {
        const productId = action.meta.arg;
        state.status.single[productId] = "loading";
        state.error.single[productId] = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        const productId = action.meta.arg;
        state.status.single[productId] = "succeeded";
        state.selectedProduct = action.payload;
        state.error.single[productId] = null;

        // Update the product in the items array if it exists
        const index = state.items.findIndex((item) => item.id === productId);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        const productId = action.meta.arg;
        state.status.single[productId] = "failed";
        state.error.single[productId] = action.payload;
      })

      // Handle fetchProductReviews cases
      .addCase(fetchProductReviews.pending, (state, action) => {
        const productId = action.meta.arg;
        state.status.reviews[productId] = "loading";
        state.error.reviews[productId] = null;
      })
      .addCase(fetchProductReviews.fulfilled, (state, action) => {
        const { productId, reviews } = action.payload;
        state.status.reviews[productId] = "succeeded";
        state.reviews[productId] = reviews;
        state.error.reviews[productId] = null;
      })
      .addCase(fetchProductReviews.rejected, (state, action) => {
        const productId = action.meta.arg;
        state.status.reviews[productId] = "failed";
        state.error.reviews[productId] = action.payload;
      })

      // Handle addProductReview cases
      .addCase(addProductReview.pending, (state, action) => {
        const productId = action.meta.arg.productId;
        state.status.reviews[productId] = "loading";
      })
      .addCase(addProductReview.fulfilled, (state, action) => {
        const { productId, review } = action.payload;
        state.status.reviews[productId] = "succeeded";
        state.reviews[productId] = [
          ...(state.reviews[productId] || []),
          review,
        ];
      })
      .addCase(addProductReview.rejected, (state, action) => {
        const productId = action.meta.arg.productId;
        state.status.reviews[productId] = "failed";
        state.error.reviews[productId] = action.payload;
      });
  },
});

// Export clear action
export const { clearSelectedProduct } = productsSlice.actions;

// Existing selectors
export const selectAllProducts = (state) => state.products.items;
export const selectProductsStatus = (state) => state.products.status.list;
export const selectProductsError = (state) => state.products.error.list;

export const selectSelectedProduct = (state) => state.products.selectedProduct;
export const selectProductById = (productId) => (state) =>
  state.products.items.find((product) => product.id === productId);

export const selectProductStatus = (productId) => (state) =>
  state.products.status.single[productId] || "idle";
export const selectProductError = (productId) => (state) =>
  state.products.error.single[productId];

// New review selectors
export const selectProductReviews = (productId) => (state) =>
  state.products.reviews[productId] || [];
export const selectProductReviewsStatus = (productId) => (state) =>
  state.products.status.reviews[productId] || "idle";
export const selectProductReviewsError = (productId) => (state) =>
  state.products.error.reviews[productId];

// Helper selector to check if any fetching is in progress
export const selectIsAnyProductLoading = (state) => {
  return (
    state.products.status.list === "loading" ||
    Object.values(state.products.status.single).some(
      (status) => status === "loading"
    ) ||
    Object.values(state.products.status.reviews).some(
      (status) => status === "loading"
    )
  );
};

export default productsSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // Fetch all products
// export const fetchProducts = createAsyncThunk(
//   "products/fetchAll",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await fetch(`${import.meta.env.VITE_BASE_URL}/products`);

//       if (!response.ok) {
//         const error = await response.json();
//         return rejectWithValue(error.message || "Failed to fetch products");
//       }

//       const data = await response.json();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message || "Failed to fetch products");
//     }
//   }
// );

// // Fetch single product
// export const fetchProductById = createAsyncThunk(
//   "products/fetchById",
//   async (productId, { rejectWithValue, dispatch }) => {
//     try {
//       const response = await fetch(
//         `${import.meta.env.VITE_BASE_URL}/products/${productId}`
//       );

//       if (!response.ok) {
//         const error = await response.json();
//         return rejectWithValue(error.message || "Failed to fetch product");
//       }

//       const data = await response.json();

//       // Automatically fetch reviews when a product is fetched
//       dispatch(fetchProductReviews(productId));

//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message || "Failed to fetch product");
//     }
//   }
// );

// // Fetch product reviews
// export const fetchProductReviews = createAsyncThunk(
//   "products/fetchReviews",
//   async (productId, { rejectWithValue }) => {
//     try {
//       const fesUser = localStorage.getItem("fesUser");
//       const token = fesUser ? JSON.parse(fesUser).token : null;

//       if (!token) {
//         return rejectWithValue("Authentication required to fetch reviews");
//       }

//       const response = await fetch(
//         `${import.meta.env.VITE_BASE_URL}/products/${productId}/reviews`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (!response.ok) {
//         const error = await response.json();
//         return rejectWithValue(error.message || "Failed to fetch reviews");
//       }

//       const data = await response.json();
//       return { productId, reviews: data };
//     } catch (error) {
//       return rejectWithValue(error.message || "Failed to fetch reviews");
//     }
//   }
// );

// // Add product review
// export const addProductReview = createAsyncThunk(
//   "products/addReview",
//   async ({ productId, rating, comment }, { rejectWithValue }) => {
//     try {
//       const fesUser = localStorage.getItem("fesUser");

//       if (!fesUser) {
//         return rejectWithValue("Authentication required to add review");
//       }

//       const fesUserData = JSON.parse(fesUser);
//       const token = fesUserData.token;
//       const userId = fesUserData.user._id;

//       const response = await fetch(
//         `${import.meta.env.VITE_BASE_URL}/products/${productId}/reviews`,
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             product: productId,
//             user: userId,
//             rating,
//             comment,
//           }),
//         }
//       );

//       if (!response.ok) {
//         const error = await response.json();
//         return rejectWithValue(error.message || "Failed to add review");
//       }

//       const data = await response.json();
//       console.log("Review response:", data); // Log the response
//       return { productId, review: data };
//     } catch (error) {
//       return rejectWithValue(error.message || "Failed to add review");
//     }
//   }
// );

// const initialState = {
//   items: [],
//   selectedProduct: null,
//   reviews: {}, // { [productId]: Array of reviews }
//   status: {
//     list: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
//     single: {}, // { [productId]: 'idle' | 'loading' | 'succeeded' | 'failed' }
//     reviews: {}, // { [productId]: 'idle' | 'loading' | 'succeeded' | 'failed' }
//   },
//   error: {
//     list: null,
//     single: {}, // { [productId]: error message }
//     reviews: {}, // { [productId]: error message }
//   },
// };

// const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     clearSelectedProduct: (state) => {
//       state.selectedProduct = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // Handle fetchProducts cases
//       .addCase(fetchProducts.pending, (state) => {
//         state.status.list = "loading";
//         state.error.list = null;
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.status.list = "succeeded";
//         state.items = action.payload;
//         state.error.list = null;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.status.list = "failed";
//         state.error.list = action.payload;
//       })

//       // Handle fetchProductById cases
//       .addCase(fetchProductById.pending, (state, action) => {
//         const productId = action.meta.arg;
//         state.status.single[productId] = "loading";
//         state.error.single[productId] = null;
//       })
//       .addCase(fetchProductById.fulfilled, (state, action) => {
//         const productId = action.meta.arg;
//         state.status.single[productId] = "succeeded";
//         state.selectedProduct = action.payload;
//         state.error.single[productId] = null;

//         // Update the product in the items array if it exists
//         const index = state.items.findIndex((item) => item.id === productId);
//         if (index !== -1) {
//           state.items[index] = action.payload;
//         }
//       })
//       .addCase(fetchProductById.rejected, (state, action) => {
//         const productId = action.meta.arg;
//         state.status.single[productId] = "failed";
//         state.error.single[productId] = action.payload;
//       })

//       // Handle fetchProductReviews cases
//       .addCase(fetchProductReviews.pending, (state, action) => {
//         const productId = action.meta.arg;
//         state.status.reviews[productId] = "loading";
//         state.error.reviews[productId] = null;
//       })
//       .addCase(fetchProductReviews.fulfilled, (state, action) => {
//         const { productId, reviews } = action.payload;
//         state.status.reviews[productId] = "succeeded";
//         state.reviews[productId] = reviews;
//         state.error.reviews[productId] = null;
//       })
//       .addCase(fetchProductReviews.rejected, (state, action) => {
//         const productId = action.meta.arg;
//         state.status.reviews[productId] = "failed";
//         state.error.reviews[productId] = action.payload;
//       })

//       // Handle addProductReview cases
//       .addCase(addProductReview.pending, (state, action) => {
//         const productId = action.meta.arg.productId;
//         state.status.reviews[productId] = "loading";
//       })
//       .addCase(addProductReview.fulfilled, (state, action) => {
//         const { productId, review } = action.payload;
//         state.status.reviews[productId] = "succeeded";
//         state.reviews[productId] = [
//           ...(state.reviews[productId] || []),
//           review,
//         ];
//       })
//       .addCase(addProductReview.rejected, (state, action) => {
//         const productId = action.meta.arg.productId;
//         state.status.reviews[productId] = "failed";
//         state.error.reviews[productId] = action.payload;
//       });
//   },
// });

// // Export clear action
// export const { clearSelectedProduct } = productsSlice.actions;

// // Existing selectors
// export const selectAllProducts = (state) => state.products.items;
// export const selectProductsStatus = (state) => state.products.status.list;
// export const selectProductsError = (state) => state.products.error.list;

// export const selectSelectedProduct = (state) => state.products.selectedProduct;
// export const selectProductById = (productId) => (state) =>
//   state.products.items.find((product) => product.id === productId);

// export const selectProductStatus = (productId) => (state) =>
//   state.products.status.single[productId] || "idle";
// export const selectProductError = (productId) => (state) =>
//   state.products.error.single[productId];

// // Review selectors
// export const selectProductReviews = (productId) => (state) =>
//   state.products.reviews[productId] || [];
// export const selectProductReviewsStatus = (productId) => (state) =>
//   state.products.status.reviews[productId] || "idle";
// export const selectProductReviewsError = (productId) => (state) =>
//   state.products.error.reviews[productId];

// // Helper selector to check if any fetching is in progress
// export const selectIsAnyProductLoading = (state) => {
//   return (
//     state.products.status.list === "loading" ||
//     Object.values(state.products.status.single).some(
//       (status) => status === "loading"
//     ) ||
//     Object.values(state.status.reviews).some((status) => status === "loading")
//   );
// };

// export default productsSlice.reducer;
