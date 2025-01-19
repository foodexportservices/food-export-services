import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider as ChakraProvider } from "./components/ui/provider.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <CartProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </CartProvider>
    </Provider>
  </StrictMode>
);
