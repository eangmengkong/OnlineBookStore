import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";
import { LuZoomIn } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useWishlist } from "../View/Wishlist/WishlistContext";

import Data from "./home/data/Data";
import ReactPaginate from "react-paginate";
import Search from "../common/Search";
import { useState } from "react";

const Shop = () => {
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

  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 20;

  const pageCount = Math.ceil(Data.Shop.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const currentItems = Data.Shop.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );
  return (
    <>
      <div>
        <Search />
      </div>
      <div className="container mt-10 font-body sm:min-w-[569px] md:max-w-[830px] lg:max-w-[1920px]">
        <div className="wrapper mx-auto max-w-[1200px] p-5">
          <div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
              {currentItems.map((book) => (
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
                  <div className="absolute bottom-[140px] left-0 right-0 flex h-[32px] items-center justify-center gap-4 bg-orange-500 p-1 text-[20px] text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:bottom-[145px]">
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
                    <h2 className="text-[14px] transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300 lg:text-[17px]">
                      {book.product}
                    </h2>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      className="flex items-center gap-2 border-2 p-1 text-[12px] transition-all duration-300 hover:cursor-pointer hover:bg-orange-500 hover:text-white hover:transition-all hover:duration-300 lg:text-[15px]"
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
        </div>
      </div>

      <div
        className="pagination my-5 flex justify-center"
        onClick={window.scrollTo(0, 0)}
      >
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName="flex justify-center items-center space-x-2 mt-5" // Wrapper
          pageClassName="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md" // Page item
          pageLinkClassName="font-medium" // Page link
          previousClassName="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md" // Previous button
          previousLinkClassName=" font-medium" // Previous link
          nextClassName="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md" // Next button
          nextLinkClassName=" font-medium" // Next link
          breakClassName="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md" // Break item
          breakLinkClassName=" font-medium" // Break link
          activeClassName="bg-orange-500 text-white" // Active page
        />
      </div>
    </>
  );
};

export default Shop;
