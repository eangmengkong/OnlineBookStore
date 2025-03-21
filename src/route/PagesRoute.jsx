import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../components/pages/home/Home";
import Header from "../components/common/Header";
import Shop from "../components/pages/Shop";
import Contact from "../components/pages/Contact";
import About from "../components/pages/About";
import Footer from "../components/common/Footer";
import BookView from "../components/View/Book/BookView";
import CartView from "../components/View/Cart/CartView";
import WishlistView from "../components/View/Wishlist/WishlistView";
import MyAccount from "../components/login-sign/MyAccount/MyAccount";

// Import subpages of MyAccount
import Orders from "../components/login-sign/MyAccount/Orders";

import Address from "../components/login-sign/MyAccount/Address";
import AccountDetails from "../components/login-sign/MyAccount/AccountDetail";
import Book from "../components/pages/Book";

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
            <Route path="/book" element={<Book />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/BookView/:id" element={<BookView />} />
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
