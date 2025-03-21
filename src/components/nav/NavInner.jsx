import { Link, Navigate } from "react-router-dom";
import Data from "../data/Data";
import { FaStar } from "react-icons/fa6";
const NavInner = () => {
  const handleLinkClick = (path) => {
    Navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <div>
      {" "}
      <div className="absolute z-50 hidden w-[1200px] -translate-x-[37%] bg-white p-4 shadow-lg group-hover:block">
        <div className="flex justify-evenly">
          <div className="flex flex-col gap-3">
            <h2>SHOP PAGE</h2>
            <div className="flex flex-col gap-3 font-body text-gray-500 hover:cursor-pointer">
              <Link to="/CartView">
                <h3 className="hover:text-orange-500">My Cart</h3>
              </Link>

              <Link to="/WishlistView">
                <h3 className="hover:text-orange-500">My Wishlist</h3>
              </Link>
              <h3 className="hover:text-orange-500">
                <Link to="/MyAccount">My Account</Link>
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2>PRODUCT TYPES</h2>
            <div className="flex flex-col gap-3 text-gray-500 hover:cursor-pointer">
              <h3 className="hover:text-orange-500">ភាពជាអ្នកដឹកនាំ</h3>
              <h3 className="hover:text-orange-500">អប់រំ និងកុមារ</h3>
              <h3 className="hover:text-orange-500">ចំណេះដឹងទូទៅ</h3>
              <h3 className="hover:text-orange-500">ប្រវត្តិសាស្ត</h3>
              <h3 className="hover:text-orange-500">ផ្នត់គំនិតជាជីវកម្ម</h3>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex place-content-center">
              <h2>BEST SELLERS</h2>
            </div>
            <div className="grid grid-cols-2 gap-2 font-body">
              {Data.BestSeller.map((books) => (
                <Link
                  to={`/BookView/${books.id}`}
                  key={books.id}
                  onClick={() => handleLinkClick(`/BookView/${books.id}`)}
                >
                  <div className="mb-5 flex gap-3">
                    <img src={books.img} className="w-[100px]" />
                    <div>
                      <div className="w-[160px]">
                        <h3 className="text-[14px] transition-all duration-300 hover:cursor-pointer hover:text-orange-500">
                          {books.product}
                        </h3>
                      </div>
                      <div className="flex text-[10px]">
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
                      <h3 className="text-orange-500">
                        <span className="mr-2 text-gray-400">
                          <del>{books.discount}</del>
                        </span>
                        ${books.price}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavInner;
