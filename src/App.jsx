import { useEffect } from "react";
import Pages from "./components/pages/Pages";
import { CartProvider } from "react-use-cart"; // Import CartProvider
import { WishlistProvider } from "./components/View/Wishlist/WishlistContext";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <CartProvider>
      <WishlistProvider>
        <Pages />
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
