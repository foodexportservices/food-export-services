import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Helper function to get initial user state
const getUserFromStorage = () => {
  const userData = localStorage.getItem("fesUser");
  return userData ? JSON.parse(userData) : null;
};

export const loginUser = createAsyncThunk(
  "user/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message || "Login failed");
      }

      const data = await response.json();
      // Store the complete response data
      localStorage.setItem("fesUser", JSON.stringify(data));
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Login failed");
    }
  }
);

const initialState = {
  user: getUserFromStorage(), // Initialize from localStorage
  status: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.status = "idle";
      state.error = null;
      localStorage.removeItem("fesUser"); // Clear localStorage on logout
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.status = "succeeded";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Selectors
export const selectUser = (state) => state.user.user;
export const selectIsAuthenticated = (state) => !!state.user.user;
export const selectAuthStatus = (state) => state.user.status;

export const { logoutUser, setUser } = userSlice.actions;
export default userSlice.reducer;
