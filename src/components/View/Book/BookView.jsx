import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";

import Data from "../../data/Data";
import Search from "../../common/Search";
import { useCart } from "react-use-cart";
import { useWishlist } from "../Wishlist/WishlistContext";

const BookView = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { addToWishlist } = useWishlist();
  const { id } = useParams();

  const book =
    Data.Feature.find((item) => item.id === parseInt(id, 10)) ||
    Data.DealDay.find((item) => item.id === parseInt(id, 10)) ||
    Data.BestSeller.find((item) => item.id === parseInt(id, 10)) ||
    Data.Featured.find((item) => item.id === parseInt(id, 10)) ||
    Data.Sale_Product.find((item) => item.id === parseInt(id, 10)) ||
    Data.Random.find((item) => item.id === parseInt(id, 10));

  const [activeImg, setActiveImage] = useState(
    book?.bookview?.img1 || book?.img,
  );

  if (!book) {
    return <p className="text-center text-xl text-red-600">Book not found!</p>;
  }

  const handleAddToWishlist = () => {
    const today = new Date().toLocaleDateString("en-CA");

    addToWishlist({
      ...book,
      img: book.bookview?.img1 || book.img, // Use fallback image
      dateAdded: today,
      stockStatus: "In Stock",
    });
  };

  const handleAddToCart = () => {
    addItem({
      ...book,
      img: book.bookview?.img1 || book.img,
    });
    navigate("/CartView");
  };

  return (
    <>
      <div>
        <Search />
      </div>
      <div className="flex flex-col justify-between gap-16 font-body lg:flex-row lg:items-center">
        {/* Image Section */}
        <div className="mb-12 flex flex-col items-center gap-6 p-6 lg:w-2/4">
          <img
            src={activeImg}
            alt="Book Cover"
            className="aspect-square h-[400px] w-[300px] rounded-xl object-cover"
          />
          <div className="-ml-8 flex h-24 flex-row justify-between gap-4">
            {book.bookview &&
              Object.values(book.bookview)
                .filter((img) => img) // Remove empty images
                .map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Book View ${index + 1}`}
                    className="h-[150px] w-[120px] cursor-pointer rounded-md lg:w-28"
                    onClick={() => setActiveImage(img)}
                  />
                ))}
          </div>
        </div>
        {/* Details Section */}
        <div className="flex flex-col gap-4 p-4 lg:w-2/4">
          <div>
            <span className="font-semibold text-violet-600">{book.title}</span>
            <h1 className="text-3xl font-bold">{book.name}</h1>
            <h3 className="text-xl font-bold">{book.product}</h3>
          </div>
          <div className="w-[370px] md:w-[800px] lg:w-[700px]">
            <p className="text-[20px] text-gray-700 md:text-[24px] lg:text-[18px]">
              {book.desc}
            </p>
          </div>
          <h6 className="text-2xl font-semibold">$ {book.price}</h6>

          <div className="flex flex-col items-center gap-3 lg:flex lg:flex-row">
            <button
              className="flex h-full w-[300px] items-center gap-3 rounded-xl bg-violet-800 px-16 py-3 font-semibold text-white hover:bg-violet-900"
              onClick={handleAddToWishlist}
            >
              <FaRegHeart />
              Add to Wishlist
            </button>
            <button
              className="flex h-full w-[300px] items-center gap-3 rounded-xl bg-violet-800 px-16 py-3 font-semibold text-white hover:bg-violet-900"
              onClick={handleAddToCart}
            >
              <FiShoppingCart />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookView;
