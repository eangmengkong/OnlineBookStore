import { FaAngleRight } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaFacebook,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa6";
import { useParams } from "react-router-dom";
import ViewData from "./ViewData";
import Search from "../common/Search";
const BlogView = () => {
  const { id } = useParams();
  const blog = ViewData[0].BlogviewData.MainBlog.find(
    (item) => item.id === parseInt(id, 10),
  );
  return (
    <>
      <div>
        <Search />
      </div>
      <div className="container">
        <div className="wrapper mx-auto flex max-w-[1200px] justify-between gap-7 p-5">
          <div className="float-left w-4/5">
            <div className="mb-5 flex flex-col items-center justify-center text-center text-3xl font-bold">
              <h1 className="">
                Sample post title with <br />
                format Image
              </h1>
              <div className="flex gap-3 text-[15px] text-gray-500">
                <span className="flex items-center">
                  <IoMdTime />
                  March 16, 2023
                </span>
                <span className="flex items-center">
                  <IoPerson />
                  admin
                </span>
              </div>
            </div>
            <img src={blog.BlogView.img1} alt="Main blog" />
            <div className="p-4">
              <p>{blog.desc}</p>
            </div>
            <img src={blog.BlogView.img2} className="w-[600px]" />
            <hr className="mt-20" />

            {/* You Might Also Like */}

            <div className="flex items-center p-10">
              <FaAngleRight />
              <h3>You Might Also Like</h3>
            </div>

            <div className="grid grid-cols-3 gap-5">
              {ViewData[0].BlogviewData.AlsoLike.map((item) => (
                <div key={item.id} className="w-[250px]">
                  <img src={item.img} className="w-[250px]" alt={item.title} />
                  <div className="text-center">
                    <h3>{item.title}</h3>
                    <span className="flex place-content-center items-center">
                      <IoMdTime />
                      {item.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <hr className="mt-20" />
          </div>

          {/* Recent Posts */}

          <div className="float-left w-2/5">
            <div className="mb-6 mt-[60px]">
              <h3 className="font-bold">Recent Posts</h3>
            </div>
            {ViewData[0].BlogviewData.RecentPosts.map((post) => (
              <div key={post.id} className="mb-5 flex gap-4">
                <img src={post.img} className="w-[150px]" alt={post.title} />
                <div>
                  <h3 className="font-bold">{post.title}</h3>
                  <span className="text-[13px] text-gray-600">
                    {post.date} / 0 Comments
                  </span>
                </div>
              </div>
            ))}
            <div className="mt-6">
              <h3 className="font-bold">Follow Us</h3>
              <div className="mt-5 flex gap-2 text-[30px] hover:cursor-pointer">
                <FaSquareXTwitter />
                <FaSquareInstagram />
                <FaFacebook />
                <FaLinkedin />
                <FaTiktok />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogView;
