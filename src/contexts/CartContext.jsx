// import React, { createContext, useContext, useState, useEffect } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState(() => {
//     const savedCart = localStorage.getItem("fesCart");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("fesCart", JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (item) => {
//     setCart((prevCart) => {
//       const existingItemIndex = prevCart.findIndex(
//         (cartItem) => cartItem.productId === item.productId
//       );

//       if (existingItemIndex > -1) {
//         const updatedCart = [...prevCart];
//         updatedCart[existingItemIndex] = {
//           ...updatedCart[existingItemIndex],
//           quantity: updatedCart[existingItemIndex].quantity + item.quantity,
//         };
//         localStorage.setItem("fesCart", JSON.stringify(updatedCart));
//         return updatedCart;
//       }

//       const newCart = [
//         ...prevCart,
//         { productId: item.productId, quantity: item.quantity },
//       ];
//       localStorage.setItem("fesCart", JSON.stringify(newCart));
//       return newCart;
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCart((prevCart) => {
//       const updatedCart = prevCart.filter(
//         (item) => item.productId !== productId
//       );
//       localStorage.setItem("fesCart", JSON.stringify(updatedCart));
//       return updatedCart;
//     });
//   };

//   const isInCart = (product) => {
//     // Changed to use _id
//     return cart.some((item) => item._id === product._id);
//   };

//   const updateQuantity = (itemId, newQuantity) => {
//     // Changed to use _id
//     setCart((prevCart) =>
//       prevCart
//         .map((item) =>
//           item._id === itemId
//             ? { ...item, quantity: Math.max(0, newQuantity) }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   const clearCart = () => {
//     setCart([]);
//     localStorage.removeItem("fesCart");
//   };

//   const getCartTotal = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const getCartItemCount = () => {
//     return cart.reduce((total, item) => total + item.quantity, 0);
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         isInCart,
//         updateQuantity,
//         clearCart,
//         getCartTotal,
//         getCartItemCount,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };

import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("fesCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("fesCart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if product already exists in cart using _id
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.productId === product._id
      );

      if (existingItemIndex > -1) {
        // If item exists, update quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        };
        return updatedCart;
      }

      // If item doesn't exist, add new item with quantity 1
      return [...prevCart, { productId: product._id, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.productId !== productId)
    );
  };

  const isInCart = (product) => {
    return cart.some((item) => item.productId === product._id);
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: Math.max(0, newQuantity) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("fesCart");
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        isInCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
