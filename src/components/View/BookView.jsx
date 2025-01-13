import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";
import ViewData from "./ViewData";
import Search from "../common/Search";
import { useCart } from "react-use-cart";
import { useWishlist } from "./Wishlist/WishlistContext";

const BookView = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { addToWishlist } = useWishlist();
  const { id } = useParams();
  const book = ViewData[0].BookviewData.find(
    (item) => item.id === parseInt(id, 10),
  );

  const [activeImg, setActiveImage] = useState(book.bookview.img1);

  const handleAddToWishlist = () => {
    const today = new Date().toLocaleDateString("en-CA");

    addToWishlist({
      ...book,
      id: book.id,
      name: book.name,
      img: book.bookview.img1, // Add image
      price: book.price,
      dateAdded: today, // Add date
      stockStatus: "In Stock", // Default stock status
    });
  };

  const handleAddToCart = () => {
    addItem({
      ...book,
      id: book.id,
      name: book.name,
      product: book.product,
      img: book.bookview.img1,
    });
    navigate("/CartView");
  };

  return (
    <>
      <div>
        <Search />
      </div>
      <div className="flex flex-col justify-between gap-16 font-body lg:flex-row lg:items-center">
        <div className="mb-12 flex flex-col items-center gap-6 p-6 lg:w-2/4">
          <img
            src={activeImg}
            alt=""
            className="aspect-square h-[400px] w-[300px] rounded-xl object-cover"
          />
          <div className="flex h-24 flex-row justify-between gap-4 maxmd:-ml-4">
            {book.bookview &&
              Object.values(book.bookview).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`book-${index}`}
                  className="h-[150px] w-28 cursor-pointer rounded-md maxmd:w-20"
                  onClick={() => setActiveImage(img)}
                />
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:w-2/4 maxmd:p-4">
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
          <div className="flex flex-row items-center gap-3 maxmd:flex maxmd:flex-col">
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
