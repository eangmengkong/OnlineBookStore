import { createContext, useContext, useState } from "react";

// WishlistContext.js
const WishlistContext = createContext();

// eslint-disable-next-line react/prop-types
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (book) => {
    setWishlist((prev) => {
      if (prev.some((item) => item.id === book.id)) return prev;
      return [...prev, book];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWishlist = () => {
  return useContext(WishlistContext);
};
