/* eslint-disable react/prop-types */
import { FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";
import { LuZoomIn } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import Data from "./data/Data";
import { useWishlist } from "../../View/Wishlist/WishlistContext";
const HBestSeller = ({ data }) => {
  const { addToWishlist } = useWishlist();
  const { addItem } = useCart();
  const navigate = useNavigate();
  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  const handleAddToWishlist = (book) => {
    const today = new Date().toLocaleDateString("en-CA");

    addToWishlist({
      ...book,
      img: book.bookview?.img1 || book.img,
      dateAdded: today,
      stockStatus: "In Stock",
    });
  };
  return (
    <>
      <div className="container font-body sm:min-w-[569px] md:max-w-[830px] lg:max-w-[1920px]">
        <div className="wrapper mx-auto max-w-[1200px] p-5">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">BEST SELLER</h1>
            <p className="p-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus
            </p>
          </div>

          <ul className="flex items-center justify-center gap-5 text-[20px] font-bold maxmd:gap-4 maxmd:text-[13px]">
            <li className="transition-all duration-300 ease-in-out hover:text-orange-600 hover:underline hover:duration-200 hover:ease-in-out">
              អភិវឌ្ឍខ្លួន
            </li>
            <li className="transition-all duration-300 ease-in-out hover:text-orange-600 hover:underline hover:duration-200 hover:ease-in-out">
              ភាពជាអ្នកដឹកនាំ
            </li>
            <li className="transition-all duration-300 ease-in-out hover:text-orange-600 hover:underline hover:duration-200 hover:ease-in-out">
              យុទ្ធសាស្ត
            </li>
          </ul>

          {/* BestSeller */}

          <div className="mt-10">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
              {data.map((books) => (
                <div className="group relative" key={books.id}>
                  <Link
                    to={`/BookView/${books.id}`}
                    onClick={() => handleLinkClick(`/BookView/${books.id}`)}
                  >
                    <img
                      src={books.img}
                      alt={books.product}
                      className="w-[230px]"
                    />
                  </Link>
                  <div className="absolute bottom-[150px] left-0 right-0 flex h-[32px] items-center justify-center gap-4 bg-orange-500 p-1 text-[20px] text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100 maxmd:bottom-[140px]">
                    <div
                      className="rounded-[50%] bg-black p-1 text-white hover:bg-white hover:text-orange-400"
                      onClick={() => handleAddToWishlist(books)}
                    >
                      <FaRegHeart />
                    </div>
                    <div className="rounded-[50%] bg-black p-1 text-white hover:bg-white hover:text-orange-400">
                      <BsArrowLeftRight />
                    </div>
                    <Link
                      to={`/BookView/${books.id}`}
                      onClick={() => handleLinkClick(`/BookView/${books.id}`)}
                    >
                      <div className="rounded-[50%] bg-black p-1 text-white hover:bg-white hover:text-orange-400">
                        <LuZoomIn />
                      </div>
                    </Link>
                  </div>
                  <div className="mb-3 flex h-[100px] flex-col gap-2 py-3 text-center">
                    <h3 className="text-orange-500">
                      <span className="mr-2 text-gray-400">
                        <del>{books.discount}</del>
                      </span>
                      ${books.price}
                    </h3>
                    <h2 className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300 maxmd:text-[14px]">
                      {books.product}
                    </h2>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      className="flex items-center gap-2 border-2 p-1 transition-all duration-300 hover:cursor-pointer hover:bg-orange-500 hover:text-white hover:transition-all hover:duration-300 maxmd:text-[12px]"
                      onClick={() => addItem({ ...books, id: books.id })}
                    >
                      <i>
                        <FiShoppingCart />
                      </i>
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="mt-20" />

          {/* FEATURED PRODUCTS */}

          <div className="wrapper grid grid-cols-1 justify-between md:grid-cols-2 lg:grid-cols-4">
            <div className="mt-10">
              <h2 className="mb-6 text-center text-[20px] font-bold maxmd:text-[15px]">
                FEATURED PRODUCTS
              </h2>
              {Data.Featured.map((books) => (
                <Link
                  to={`/BookView/${books.id}`}
                  key={books.id}
                  onClick={() => handleLinkClick(`/BookView/${books.id}`)}
                >
                  <div className="mb-5 flex gap-3">
                    <img src={books.img} className="w-[120px]" />
                    <div>
                      <h3 className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                        {books.product}
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

            {/* SALE PRODUCTS */}

            <div className="mt-10">
              <h2 className="mb-6 text-center text-[20px] font-bold maxmd:text-[15px]">
                SALE PRODUCTS
              </h2>

              {Data.Sale_Product.map((books) => (
                <Link
                  to={`/BookView/${books.id}`}
                  key={books.id}
                  onClick={() => handleLinkClick(`/BookView/${books.id}`)}
                >
                  <div className="mb-5 flex gap-3">
                    <img src={books.img} className="w-[120px]" />
                    <div>
                      <h3 className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                        {books.product}
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

            {/* RANDOM PRODUCTS */}

            <div className="mt-10">
              <h2 className="mb-6 text-center text-[20px] font-bold maxmd:text-[15px]">
                RANDOM PRODUCTS
              </h2>
              {Data.Random.map((books) => (
                <Link
                  to={`/BookView/${books.id}`}
                  key={books.id}
                  onClick={() => handleLinkClick(`/BookView/${books.id}`)}
                >
                  <div className="mb-5 flex gap-3">
                    <img src={books.img} className="w-[120px]" />
                    <div>
                      <h3 className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                        {books.product}
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
            <img
              src="/images1/homepageimages/BestSellerimg/BS15.jpg"
              className="mt-10 maxmd:h-[350px]"
            />
          </div>
        </div>
      </div>

      <hr className="mt-16" />
    </>
  );
};

export default HBestSeller;
