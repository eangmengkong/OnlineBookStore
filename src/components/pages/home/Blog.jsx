import { CiUser } from "react-icons/ci";
import { BiMessageRounded } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useNavigate } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import Data from "./data/Data";
const Blog = () => {
  const navigate = useNavigate();
  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="container sm:min-w-[569px] md:max-w-[830px] lg:max-w-[1920px]">
        <div className="wrapper mx-auto max-w-[1200px] p-5">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">LATEST BLOG</h1>
            <p className="p-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus
            </p>
          </div>

          {/* Blog Carousel */}
          <div className="mb-10">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Pagination, Autoplay]}
              className="mySwiper h-[420px]"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {Data.Blogs.map((data) => (
                <SwiperSlide key={data.id}>
                  <Link
                    to={`/BlogView/${data.id}`}
                    onClick={() => handleLinkClick(`/BlogView/${data.id}`)}
                  >
                    <div className="w-[350px] pb-2 text-center lg:shadow-lg">
                      <div className="items-center justify-center lg:flex">
                        <img src={data.img} className="w-[400px]" />
                      </div>
                      <div>
                        <div className="">
                          <h2 className="">{data.title}</h2>
                        </div>
                        <p className="my-3 flex items-center justify-center">
                          <span className="flex items-center">
                            <i>
                              <CiUser />
                            </i>
                            Admin /
                          </span>

                          <span className="flex items-center">
                            <i>
                              <BiMessageRounded />
                            </i>
                            1 Comment
                          </span>
                        </p>
                        <div className="h-[70px] w-[350px] overflow-hidden text-center">
                          <p>{data.desc}</p>
                        </div>
                        <button className="mt-3 font-bold text-red-500 hover:border-b-2 hover:border-b-red-500">
                          CONTINUE READING
                        </button>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <hr />

          <div className="my-14">
            <div className="grid grid-cols-2 justify-between gap-5 text-[10px] md:flex lg:flex">
              <div className="flex items-center gap-3 leading-tight lg:w-[250px]">
                <img src="images/logo/logo-1.png" className="h-9 w-[40px]" />
                <div>
                  <h2 className="mb-2 text-[12px] font-bold lg:text-[20px]">
                    Free Shipping item
                  </h2>
                  <p className="text-gray-500">For any order over $100</p>
                </div>
              </div>
              <div className="flex w-[180px] items-center gap-3 leading-tight">
                <img src="images/logo/logo-2.png" className="h-9 w-[40px]" />
                <div>
                  <h2 className="mb-2 w-[250px] text-[12px] font-bold lg:text-[20px]">
                    Money back gurantee
                  </h2>
                  <p className="text-gray-500">100% money back guarantee</p>
                </div>
              </div>
              <div className="flex items-center gap-3 leading-tight">
                <img src="images/logo/logo-3.png" className="h-9 w-[40px]" />
                <div>
                  <h2 className="mb-2 text-[12px] font-bold lg:text-[20px]">
                    Cash on delivery
                  </h2>
                  <p className="text-gray-500">Lorem ipsum</p>
                </div>
              </div>
              <div className="flex items-center gap-3 leading-tight">
                <img src="images/logo/logo-4.png" className="h-9 w-[40px]" />
                <div className="">
                  <h2 className="mb-2 text-[12px] font-bold lg:text-[20px]">
                    Help & Support
                  </h2>
                  <p className="text-gray-500">Call us: 011 999 888</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
