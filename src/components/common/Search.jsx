import { FaPhoneAlt } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
const Search = () => {
  return (
    <div className="container bg-orange-400">
      <div className="wrapper mx-auto flex max-w-[1200px] items-center justify-between p-5">
        <div className="bg-gray-800 px-5 py-3 text-white maxmd:hidden">
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
            className="w-[810px] p-3 maxmd:w-[250px]"
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
