import { createContext, useContext, useEffect, useState } from "react";

// WishlistContext.js
const WishlistContext = createContext();

// eslint-disable-next-line react/prop-types
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const storewishlist = localStorage.getItem("wishlist");
      return storewishlist ? JSON.parse(storewishlist) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (book) => {
    setWishlist((prev) => {
      if (prev.some((item) => item.id === book.id)) return prev;
      return [...prev, book];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const clearWishlist = () => {
    setWishlist([]);
    localStorage.removeItem("wishlist");
  };
  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, clearWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWishlist = () => {
  return useContext(WishlistContext);
};
