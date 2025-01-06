import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Header from "../common/Header";
import Shop from "./Shop";

import Contact from "./Contact";
import About from "./About";
import Footer from "../common/Footer";
import Blog from "./Blog";
import BookView from "../View/BookView";
import BlogView from "../View/BlogView";
import CartView from "../View/Cart/CartView";
import WishlistView from "../View/Wishlist/WishlistView";

const Pages = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/BookView/:id" element={<BookView />} />
        <Route path="/BlogView/:id" element={<BlogView />} />
        <Route path="/CartView" element={<CartView />} />
        <Route path="/WishlistView" element={<WishlistView />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Pages;
