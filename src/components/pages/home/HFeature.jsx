/* eslint-disable react/prop-types */
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";
import { LuZoomIn } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useWishlist } from "../../View/Wishlist/WishlistContext";

const HFeature = ({ data = [] }) => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { addToWishlist } = useWishlist();

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
    <div className="container mt-10 font-body md:max-w-[830px] lg:max-w-[1600px]">
      <div className="wrapper mx-auto max-w-[1200px] p-5">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">FEATURED</h1>
          <p className="p-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-5 gap-3 maxsm:grid-cols-3 maxmd:grid-cols-3">
            {data.map((book) => (
              <div className="group relative" key={book.id}>
                <Link
                  to={`/BookView/${book.id}`}
                  onClick={() => handleLinkClick(`/BookView/${book.id}`)}
                >
                  <img
                    src={book.img}
                    alt={book.product}
                    className="w-[230px]"
                  />
                </Link>
                <div className="absolute bottom-[145px] left-0 right-0 flex h-[32px] items-center justify-center gap-4 bg-orange-500 p-1 text-[20px] text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100 maxmd:bottom-[140px]">
                  <div
                    className="rounded-[50%] bg-black p-1 text-white hover:bg-white hover:text-orange-400"
                    onClick={() => handleAddToWishlist(book)}
                  >
                    <FaRegHeart />
                  </div>
                  <div className="rounded-[50%] bg-black p-1 text-white hover:bg-white hover:text-orange-400">
                    <BsArrowLeftRight />
                  </div>
                  <Link
                    to={`/BookView/${book.id}`}
                    onClick={() => handleLinkClick(`/BookView/${book.id}`)}
                  >
                    <div className="rounded-[50%] bg-black p-1 text-white hover:bg-white hover:text-orange-400">
                      <LuZoomIn />
                    </div>
                  </Link>
                </div>
                <div className="mb-2 flex h-[100px] flex-col gap-2 py-3 text-center">
                  <h3 className="text-orange-500">
                    <span className="mr-2 text-gray-400">
                      <del>{book.discount}</del>
                    </span>
                    ${book.price}
                  </h3>
                  <h2 className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300 maxmd:text-[14px]">
                    {book.product}
                  </h2>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="flex items-center gap-2 border-2 p-1 transition-all duration-300 hover:cursor-pointer hover:bg-orange-500 hover:text-white hover:transition-all hover:duration-300 maxmd:text-[12px]"
                    onClick={() => addItem({ ...book, id: book.id })}
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

        <div className="mt-10">
          <img
            src="images/banner-1.jpg"
            className="maxmd:h-[90px]"
            alt="Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default HFeature;
