import { IoDiamond } from "react-icons/io5";
import { MdOutlineLanguage } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from "react";
import { useCart } from "react-use-cart";
import Login from "../login-sign/Login";
import SignUp from "../login-sign/SignUp";

const Nav = () => {
  const { totalUniqueItems, cartTotal } = useCart();
  const [activeModal, setActiveModal] = useState(null);

  const openLogin = () => setActiveModal("login");
  const openSignUp = () => setActiveModal("signup");
  const closeModal = () => setActiveModal(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="container bg-gray-200">
        <div className="wrapper mx-auto max-w-[1200px] p-3">
          <div className="flex justify-between maxmd:items-center maxmd:justify-center">
            <div className="maxmd:hidden">
              <h3>Welcome to BookShop Online Shop!</h3>
            </div>
            <div className="flex gap-8">
              <h3 className="flex items-center gap-1 transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                <i>
                  <IoDiamond />
                </i>
                Currency
              </h3>
              <h3 className="flex items-center gap-1 transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                <i>
                  <MdOutlineLanguage />
                </i>
                Language
              </h3>
              <h3 className="flex items-center gap-1 transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                <i>
                  <FaRegUser />
                </i>
                <span onClick={openLogin}>Sign In / Join</span>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <nav className="container bg-white shadow-md">
        <div className="wrapper mx-auto flex max-w-[1200px] items-center justify-between p-4">
          {/* Toggle Button for Mobile */}
          <button
            className="hidden maxmd:block"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <IoReorderThreeOutline size={30} />
          </button>

          {/* Logo */}
          <div className="flex items-center justify-center">
            <Link to={"/home"}>
              <img src="./images/logo-bookshop.png" alt="logo-bookshop" />
            </Link>
          </div>

          {/* laptop */}
          <div className="flex items-center gap-10 maxmd:hidden">
            <ul className="relative flex gap-8 text-[18px] font-semibold">
              <li className="group transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                <Link to="/home">Home</Link>
              </li>

              <li className="group relative">
                <div className="flex items-center transition-all duration-300 hover:cursor-pointer hover:text-orange-500">
                  Shop
                  <i className="text-[30px]">
                    <RiArrowDropDownLine />
                  </i>
                </div>

                {/* Dropdown menu */}
                <div className="absolute z-50 hidden w-[1200px] -translate-x-[37%] bg-white p-4 shadow-lg group-hover:block">
                  <div className="flex justify-evenly">
                    <div className="flex flex-col gap-3">
                      <h2>SHOP PAGE</h2>
                      <div className="flex flex-col gap-3 text-gray-500 hover:cursor-pointer">
                        <h3 className="hover:text-orange-500">My Cart</h3>
                        <h3 className="hover:text-orange-500">My Checkout</h3>
                        <h3 className="hover:text-orange-500">My Wishlist</h3>
                        <h3 className="hover:text-orange-500">My Account</h3>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h2>PRODUCT TYPES</h2>
                      <div className="flex flex-col gap-3 text-gray-500 hover:cursor-pointer">
                        <h3 className="hover:text-orange-500">
                          Simple Product
                        </h3>
                        <h3 className="hover:text-orange-500">
                          Variable Product
                        </h3>
                        <h3 className="hover:text-orange-500">
                          Virtual Product
                        </h3>
                        <h3 className="hover:text-orange-500">
                          Grouped Product
                        </h3>
                        <h3 className="hover:text-orange-500">
                          Downloadable Product
                        </h3>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h2>BEST SELLERS</h2>
                      <div>
                        <div className="mb-5 flex gap-3">
                          <img
                            src="images/random/random3.jpg"
                            className="w-[70px]"
                          />
                          <div>
                            <h3 className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500">
                              Simple Product 003
                            </h3>
                            <div className="flex">
                              <i className="star text-yellow-400">
                                <FaStar />
                              </i>
                              <i className="star text-yellow-400">
                                <FaStar />
                              </i>
                              <i className="star text-yellow-400">
                                <FaStar />
                              </i>
                              <i className="star text-yellow-400">
                                <FaStar />
                              </i>
                              <i className="star text-yellow-400">
                                <FaStar />
                              </i>
                            </div>
                            <h3 className="text-orange-500">$340.00</h3>
                          </div>
                        </div>
                        <div className="mb-5 flex gap-3">
                          <img
                            src="images/sale/sale2.jpg"
                            className="w-[70px]"
                          />
                          <div>
                            <h3 className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500">
                              Simple Product 003
                            </h3>
                            <div className="flex">
                              <i className="star text-yellow-400">
                                <FaStar />
                              </i>
                              <i className="star text-yellow-400">
                                <FaStar />
                              </i>
                              <i className="star text-yellow-400">
                                <FaStar />
                              </i>
                              <i className="star text-yellow-400">
                                <FaStar />
                              </i>
                              <i className="star text-yellow-400">
                                <FaStar />
                              </i>
                            </div>
                            <h3 className="text-orange-500">$340.00</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                <Link to="/about"> About Us</Link>
              </li>
            </ul>
            <div>
              <h4 className="flex items-center gap-1 transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                <i>
                  <FaHeart />
                </i>
                <Link to={"/WishlistView"}>My Wishlist</Link>
              </h4>
              <h4 className="flex items-center gap-1 transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                <i>
                  <FaArrowRightArrowLeft />
                </i>
                My Compare
              </h4>
            </div>
            <Link to={"/CartView"}>
              <div className="flex items-center gap-3">
                <i className="text-[50px]">
                  <FaShoppingBag />
                </i>
                <div>
                  <h3>MY CART</h3>
                  <h4>Total: ${cartTotal}</h4>
                </div>
              </div>
            </Link>
          </div>

          {/* Cart Icon */}
          <Link to={"/CartView"}>
            <div className="relative flex items-center gap-2">
              <FaShoppingBag size={30} className="text-gray-800" />
              <span className="absolute -right-2 -top-1 rounded-full bg-orange-500 px-2 text-sm text-white">
                {totalUniqueItems}
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 top-0 flex h-[70vh] w-full transform flex-col gap-4 bg-white p-6 shadow-lg transition-transform duration-300 ${
            isMenuOpen ? "z-50 translate-x-0" : "-translate-x-full"
          } maxmd:flex`}
        >
          <button
            className="self-end text-gray-800"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            ✕
          </button>
          <ul className="flex flex-col items-start gap-4 text-lg font-semibold">
            <li>
              <Link to="/home" className="hover:text-orange-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-orange-500">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-orange-500">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-500">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/WishlistView" className="hover:text-orange-500">
                Wishlist
              </Link>
            </li>
            <li>
              <Link to="/CartView" className="hover:text-orange-500">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {activeModal === "login" && (
        <Login onClose={closeModal} onSignUpClick={openSignUp} />
      )}
      {activeModal === "signup" && (
        <SignUp onClose={closeModal} onLoginClick={openLogin} />
      )}
    </>
  );
};

export default Nav;
