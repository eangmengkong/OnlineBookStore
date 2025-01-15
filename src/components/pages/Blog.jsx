import { CiUser } from "react-icons/ci";

import { BiMessageRounded } from "react-icons/bi";
import Data from "./home/data/Data";
import ReactPaginate from "react-paginate";
import Search from "../common/Search";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Blog = () => {
  const navigate = useNavigate();
  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 6;

  const pageCount = Math.ceil(Data.Blogs.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const currentItems = Data.Blogs.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );
  return (
    <>
      <div>
        <Search />
      </div>
      <div className="container sm:min-w-[569px] md:max-w-[830px] lg:max-w-[1920px]">
        <div className="wrapper mx-auto grid max-w-[1200px] grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-2">
          {currentItems.map((data) => (
            <Link
              to={`/BlogView/${data.id}>`}
              key={data.id}
              onClick={() => handleLinkClick(`/BlogView/${data.id}`)}
            >
              <div className="w-[350px] text-center lg:w-[550px]">
                <img src={data.img} />
                <div>
                  <h2>{data.title}</h2>
                  <p className="my-3 flex items-center justify-center">
                    <span className="flex items-center">
                      <i>
                        <CiUser />
                      </i>
                      Admin
                    </span>
                    /
                    <span className="flex items-center">
                      <i>
                        <BiMessageRounded />
                      </i>
                      1 Comment
                    </span>
                  </p>
                  <div className="h-[50px] overflow-hidden text-center">
                    <p>{data.desc}</p>
                  </div>
                  <button className="mt-3 border-b-2 border-transparent font-bold text-red-500 hover:border-b-2 hover:border-b-red-500">
                    CONTINUE READING
                  </button>
                </div>
              </div>
            </Link>
          ))}
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

export default Blog;
