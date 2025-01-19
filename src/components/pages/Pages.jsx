import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import MyAccount from "../login-sign/MyAccount/MyAccount";

// Import subpages of MyAccount
import Orders from "../login-sign/MyAccount/Orders";

import Address from "../login-sign/MyAccount/Address";
import AccountDetails from "../login-sign/MyAccount/AccountDetail";

const Pages = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Router>
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/BookView/:id" element={<BookView />} />
            <Route path="/BlogView/:id" element={<BlogView />} />
            <Route path="/MyAccount" element={<MyAccount />}>
              <Route
                index
                element={<Navigate to="/MyAccount/account-details" replace />}
              />
              {/* Nested Routes for MyAccount */}
              <Route path="orders" element={<Orders />} />
              <Route path="address" element={<Address />} />
              <Route path="account-details" element={<AccountDetails />} />
            </Route>
            <Route path="/CartView" element={<CartView />} />
            <Route path="/WishlistView" element={<WishlistView />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default Pages;
