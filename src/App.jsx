import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import "./App.css";

import React, { useState, useEffect } from "react";
import LoadingOverlay from "./components/custom/LoadingOverlay";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import { Toaster } from "./components/ui/toaster";
import PublicRoute from "./components/PublicRoute";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthStatus, selectUser } from "./redux/userSlice";
import {
  selectProductsStatus,
  selectProductStatus,
  selectIsAnyProductLoading,
} from "./redux/productSlice";
import Product from "./pages/Product";
import ContactBanner from "./components/custom/ContactBanner";

// Wrapper component to handle product-specific loading state
const ProductRoute = () => {
  const { id } = useParams();
  const productStatus = useSelector(selectProductStatus(id));
  return <Product isLoading={productStatus === "loading"} />;
};

const Main = () => {
  const [routeLoading, setRouteLoading] = useState(true);
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const productsStatus = useSelector(selectProductsStatus);
  const authStatus = useSelector(selectAuthStatus);
  const isAnyProductLoading = useSelector(selectIsAnyProductLoading);

  // Combined loading state that accounts for all possible loading scenarios
  const isLoading =
    routeLoading ||
    authStatus === "loading" ||
    productsStatus === "loading" ||
    isAnyProductLoading;

  useEffect(() => {
    // Check if there's user data in localStorage and sync with Redux if necessary
    const userData = localStorage.getItem("fesUser");
    if (userData && !user) {
      const parsedUser = JSON.parse(userData);
      dispatch({ type: "user/setUser", payload: parsedUser });
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setRouteLoading(true);
      setTimeout(() => {
        setRouteLoading(false);
      }, 2000);
    };

    handleRouteChange();
  }, [location]);

  return (
    <>
      {isLoading && <LoadingOverlay />}
      {!routeLoading && (
        <>
          <ContactBanner />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products/:id" element={<ProductRoute />} />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
          </Routes>
        </>
      )}
    </>
  );
};

function App() {
  return (
    <Router>
      <Main />
      <Toaster />
    </Router>
  );
}

export default App;
