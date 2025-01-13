const Footer = () => {
  return (
    <>
      <div className="container bg-[#222222] sm:min-w-[569px] md:max-w-[830px] lg:max-w-[1920px]">
        <div className="wrapper mx-auto max-w-[1200px] p-5">
          <div className="grid grid-cols-2 justify-between md:flex lg:flex">
            <div>
              <h1 className="my-5 text-[23px] font-bold text-white">EXTRAS</h1>

              <div className="text-gray-400">
                <p className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                  Specials
                </p>
                <p className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                  New products
                </p>
                <p className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                  Best sellers
                </p>
                <p className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                  Manufactures
                </p>
                <p className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                  Suppliers
                </p>
              </div>
            </div>
            <div>
              <h1 className="my-5 text-[23px] font-bold text-white">
                INFORMATION
              </h1>
              <div className="text-gray-400">
                <p className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                  Terms and conditions of use
                </p>
                <p className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                  About us
                </p>
                <p className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                  Our stores
                </p>
                <p className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                  Contact us
                </p>
                <p className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                  Sitemap
                </p>
              </div>
            </div>
            <div>
              <h1 className="my-5 text-[23px] font-bold text-white">
                MY ACCOUNT
              </h1>
              <div className="text-gray-400">
                <p className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                  My orders
                </p>
                <p className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                  My credit slips
                </p>
                <p className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                  My addresses
                </p>
                <p className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                  My personal info
                </p>
                <p className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                  My vouchers
                </p>
              </div>
            </div>
            <div>
              <h1 className="my-5 text-[23px] font-bold text-white">
                STORE INFO
              </h1>
              <div className="text-gray-400">
                <p className="text-white">My Company</p>
                <p>
                  42 avenue des Champs Elyseses <br /> 75000 Paris France&lt
                </p>
                <p>
                  <span className="text-white">Call us now:</span> 011 999 888
                </p>
                <p>
                  <span className="text-white">Email:</span>support@domain.com
                </p>
              </div>
            </div>
          </div>
          <hr className="my-10" />

          <div className="flex justify-between">
            <div>
              <h3 className="hidden text-white md:block lg:block">
                {" "}
                All Rights Reserved
              </h3>
            </div>
            <div className="flex gap-6 text-gray-400">
              <div className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                Facebook
              </div>
              <div className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                Gmail
              </div>
              <div className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                Linkedin
              </div>
              <div className="transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                Instagram
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
