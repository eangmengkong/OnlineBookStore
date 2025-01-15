import Data from "./data/Data";
import { Link, useNavigate } from "react-router-dom";
const HDeals = () => {
  const navigate = useNavigate();
  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="container font-body sm:min-w-[569px] md:max-w-[830px] lg:max-w-[1920px]">
        <div className="wrapper mx-auto max-w-[1200px] p-5">
          <h2 className="text-xl font-bold">DEALS OF THE DAY</h2>
          <div className="flex flex-col justify-evenly gap-16 md:place-items-center lg:grid lg:grid-cols-3">
            <div className="w-[300px] md:place-content-center">
              <div>
                <h1 className="my-[90px] text-[70px] font-bold leading-none">
                  <span className="flex items-end justify-end">Love </span>
                  <span className="flex items-end justify-end">YourLife</span>
                </h1>
              </div>
              <div className="flex justify-end gap-2">
                <div className="flex flex-col leading-none">
                  <del className="flex justify-end text-[20px] text-gray-500">
                    $155.00
                  </del>
                  <span className="text-[25px] text-orange-600">$150.00</span>
                </div>
                <div className="flex h-[45px] w-[60px] items-center justify-center rounded bg-yellow-400 text-center text-[30px] font-bold text-white">
                  -3%
                </div>
              </div>
              <div></div>
            </div>

            <div className="group flex items-center justify-center border-[3px] border-orange-400 px-10 py-16 md:w-[380px]">
              <img
                src="/images1/homepageimages/DealsDayimg/DD1.jpeg"
                className="h-[350px] w-[250px] group-hover:animate-ball-bounce"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-2">
              {Data.DealDay.map((books) => (
                <Link
                  to={`/BookView/${books.id}`}
                  key={books.id}
                  onClick={() => handleLinkClick(`/BookView/${books.id}`)}
                >
                  <div className="text-center">
                    <img src={books.img} className="w-[250px]" />
                    <h3 className="text-orange-500">
                      <span className="mr-2 text-gray-400">
                        <del>{books.discount}</del>
                      </span>
                      ${books.price}
                    </h3>
                    <h2 className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                      {books.product}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <hr className="mt-20" />
        </div>
      </div>
    </>
  );
};

export default HDeals;
