// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCaretRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Hero_data from "./data/HeroData";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { IoReorderThreeOutline } from "react-icons/io5";
import React from "react";
import Search from "./Search";
const Hero = () => {
  const navigate = useNavigate();
  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div>
        <Search />
      </div>
      <div className="container font-body sm:min-w-[569px] md:max-w-[830px] lg:max-w-[1920px]">
        <div className="wrapper mx-auto max-w-[1200px]">
          <div className="mt-7 flex justify-between px-8 py-5">
            <div className="hidden w-[220px] items-center bg-gray-700 p-4 text-white md:block">
              <h2 className="mb-4 flex items-center gap-2">
                <i className="text-[30px]">
                  <IoReorderThreeOutline />
                </i>
                ប្រភេទសៀវភៅ
              </h2>
              <hr />

              <h2 className="p-3 transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                ផ្នត់គំនិតជាជីវកម្ម
              </h2>
              <hr />
              <div className="group relative flex items-center justify-between">
                <h2 className="p-3 transition-all duration-300 hover:cursor-pointer hover:text-orange-500">
                  អប់រំ និងកុមារ
                </h2>
                <i>
                  <FaCaretRight />
                </i>

                <div className="absolute left-full top-0 z-50 hidden bg-white text-black shadow-lg group-hover:block">
                  <div className="grid w-[550px] grid-cols-3 gap-2 p-10 md:grid-cols-2 lg:w-[770px] lg:grid-cols-3">
                    {Hero_data.children_book.map((book, index) => (
                      <div key={index}>
                        <div className="w-[230px]">
                          <h1 className="text-lg font-bold">{book.title}</h1>
                        </div>
                        <ol className="mt-2 w-[210px] list-decimal hover:cursor-pointer">
                          {[book.List1, book.List2, book.List3].map(
                            (item, i) => (
                              <li
                                key={i}
                                className="transition-all ease-in-out hover:text-orange-500"
                              >
                                {item}
                              </li>
                            ),
                          )}
                        </ol>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <hr />
              <div className="group relative flex items-center justify-between">
                <h2 className="p-3 transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                  ចំណេះដឹងទូទៅ
                </h2>
                <i>
                  <FaCaretRight />
                </i>
                <div className="absolute left-full top-0 z-50 hidden bg-white text-black shadow-lg group-hover:block">
                  <div className="grid w-[550px] grid-cols-3 gap-2 p-10 md:grid-cols-2 lg:w-[770px] lg:grid-cols-3">
                    {Hero_data.Business_Money.map((book, index) => (
                      <div key={index}>
                        <div className="w-[230px]">
                          <h1 className="text-lg font-bold">{book.title}</h1>
                        </div>
                        <ol className="mt-2 w-[210px] list-decimal hover:cursor-pointer">
                          {[book.List1, book.List2, book.List3].map(
                            (item, i) => (
                              <li
                                key={i}
                                className="transition-all ease-in-out hover:text-orange-500"
                              >
                                {item}
                              </li>
                            ),
                          )}
                        </ol>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <hr />
              {Hero_data.Catagories.map((cat, index) => (
                <React.Fragment key={index}>
                  <h2 className="p-3 transition-all duration-300 hover:cursor-pointer hover:text-orange-500">
                    {cat.genre}
                  </h2>
                  <hr />
                </React.Fragment>
              ))}
            </div>

            <div className="w-[340px] md:w-[500px] lg:w-[870px]">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {Hero_data.Slider.map((book) => (
                  <SwiperSlide key={book.id}>
                    <div
                      className="relative ml-[60px] h-[580px] bg-cover bg-[center_left_150px] text-white maxmd:bg-[length:100%_100%] maxmd:bg-[center_left_50px] maxmd:bg-no-repeat"
                      style={{
                        backgroundImage: `url(${book.img})`,
                      }}
                    >
                      <div className="absolute ml-[130px] mt-[200px] flex flex-col items-center justify-center text-center text-gray-600 maxmd:left-[-130px] maxmd:w-[150px]">
                        <h1 className="text-[2rem] font-bold maxmd:text-[22px]">
                          {book.BookName}
                        </h1>
                        <h4 className="flex gap-2 text-2xl">
                          {book.Discount}
                          <span>
                            <del>${book.Price.toFixed(2)}</del>
                          </span>
                        </h4>
                        <h4 className="text-4xl">
                          ${book["P-A-D"].toFixed(2)}
                        </h4>

                        <Link
                          to={`/BookView/${book.id}`}
                          onClick={() =>
                            handleLinkClick(`/BookView/${book.id}`)
                          }
                        >
                          <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                            Shop now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
