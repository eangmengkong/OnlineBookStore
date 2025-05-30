import { FaPhoneAlt } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
const Search = () => {
  return (
    <div className="container bg-orange-400 sm:min-w-[569px] md:max-w-[830px] lg:max-w-[1920px]">
      <div className="wrapper mx-auto flex items-center justify-between p-5 lg:max-w-[1200px]">
        <div className="hidden bg-gray-800 px-5 py-3 text-white md:text-[10px] lg:block">
          <h3 className="flex items-baseline gap-2">
            <i>
              <FaPhoneAlt />
            </i>
            HOTLINE: 011 999 888
          </h3>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search the products"
            required
            className="p-3 sm:min-w-[500px] md:w-[620px] lg:w-[630px]"
          />
          <div className="bg-gray-800 px-5 py-3 text-white transition-all duration-300 hover:cursor-pointer hover:bg-orange-500 hover:transition-all hover:duration-300">
            <button className="flex items-center gap-1 text-[17px]">
              <i>
                <IoIosSearch />
              </i>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
