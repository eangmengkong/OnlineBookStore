const Footer = () => {
  return (
    <>
      <div className="container bg-[#222222]">
        <div className="wrapper mx-auto max-w-[1200px] p-5">
          <div className="flex justify-between maxmd:grid maxmd:grid-cols-2">
            <div className="maxmd:text-[13px]">
              <h1 className="my-5 text-[23px] font-bold text-white maxmd:text-[15px]">
                EXTRAS
              </h1>

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
            <div className="maxmd:text-[13px]">
              <h1 className="my-5 text-[23px] font-bold text-white maxmd:text-[15px]">
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
            <div className="maxmd:text-[13px]">
              <h1 className="my-5 text-[23px] font-bold text-white maxmd:text-[15px]">
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
            <div className="maxmd:text-[13px]">
              <h1 className="my-5 text-[23px] font-bold text-white maxmd:text-[15px]">
                STORE INFORMATION
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

          <div className="flex justify-between maxmd:text-[13px]">
            <div>
              <h3 className="text-white"> All Rights Reserved</h3>
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