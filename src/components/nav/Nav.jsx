import { FaHeart } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";

import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";

import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import NavInner from "./NavInner";

const Nav = () => {
  const { totalUniqueItems, cartTotal } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="container bg-white shadow-md sm:min-w-[569px] md:max-w-[830px] lg:max-w-[1920px]">
        <div className="wrapper mx-auto flex max-w-[1200px] items-center justify-between p-4">
          {/* Toggle Button for Mobile */}
          <button
            className="lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <IoReorderThreeOutline size={30} />
          </button>

          {/* Logo */}
          <div className="flex items-center justify-center">
            <Link to={"/home"}>
              <img src="/images/logo-bookshop.png" alt="logo-bookshop" />
            </Link>
          </div>

          {/* laptop */}
          <div className="hidden items-center gap-10 lg:flex">
            <ul className="relative flex gap-8 text-[18px] font-semibold">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "text-orange-400 underline" : "text-gray-700"
                }
              >
                Home
              </NavLink>

              <li className="group relative">
                <div className="flex items-center transition-all duration-300 hover:cursor-pointer hover:text-orange-500">
                  <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                      isActive ? "text-orange-400 underline" : "text-gray-700"
                    }
                  >
                    Shop
                  </NavLink>
                  <i className="text-[30px]">
                    <RiArrowDropDownLine />
                  </i>
                </div>

                {/* Dropdown menu */}
                <NavInner />
              </li>

              <NavLink
                to="/book"
                className={({ isActive }) =>
                  isActive ? "text-orange-400 underline" : "text-gray-700"
                }
              >
                Book
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-orange-400 underline" : "text-gray-700"
                }
              >
                Contact Us
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-orange-400 underline" : "text-gray-700"
                }
              >
                About Us
              </NavLink>
            </ul>
            <div>
              <h4 className="flex items-center gap-1 transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                <i>
                  <FaHeart />
                </i>
                <NavLink
                  to="/WishlistView"
                  className={({ isActive }) =>
                    isActive ? "text-orange-400 underline" : "text-gray-700"
                  }
                >
                  My Wishlist
                </NavLink>
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
          className={`absolute left-0 top-0 flex h-[70vh] w-full transform flex-col gap-4 bg-white p-6 shadow-lg transition-transform duration-300 md:h-[35vh] ${
            isMenuOpen ? "z-50 translate-x-0" : "-translate-x-full"
          } flex`}
        >
          <button
            className="self-end text-gray-800"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            ✕
          </button>
          <ul className="flex flex-col items-start gap-4 text-lg font-semibold">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "text-orange-400 underline" : "text-gray-700"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "text-orange-400 underline" : "text-gray-700"
              }
            >
              Shop
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-orange-400 underline" : "text-gray-700"
              }
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-orange-400 underline" : "text-gray-700"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/WishlistView"
              className={({ isActive }) =>
                isActive ? "text-orange-400 underline" : "text-gray-700"
              }
            >
              My Wishlist
            </NavLink>
            <NavLink
              to="/CartView"
              className={({ isActive }) =>
                isActive ? "text-orange-400 underline" : "text-gray-700"
              }
            >
              Cart
            </NavLink>
            <NavLink
              to="/MyAccount"
              className={({ isActive }) =>
                isActive ? "text-orange-400 underline" : "text-gray-700"
              }
            >
              MyAccount
            </NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
