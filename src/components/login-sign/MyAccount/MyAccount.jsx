import { Outlet, Link } from "react-router-dom";
import { LuPackage } from "react-icons/lu";

import { FaCartShopping } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { MdAccountCircle, MdLogout } from "react-icons/md";

const MyAccount = () => {
  return (
    <div className="container sm:min-w-[569px] md:max-w-[830px] lg:max-w-[1920px]">
      <div className="wrapper mx-auto max-w-[1200px]">
        <div className="gap-5 p-6 lg:flex">
          {/* Left Sidebar */}
          <div className="left h-[450px] border-[3px] p-4 md:h-[470px] md:w-[800px] lg:h-[70vh] lg:w-[250px]">
            <div className="place-items-center p-6">
              <div className="img">
                <img src="/images/user.png" className="w-[150px]" alt="User" />
              </div>
              <div className="name place-items-center">
                <h1>Dara</h1>
                <p>email.com</p>
              </div>
            </div>
            <hr className="mb-4 border-[2px]" />
            <div className="left-below">
              <ul className="list-none text-[20px]">
                <li className="flex items-center gap-2">
                  <LuPackage />
                  <Link to="/MyAccount/orders">Orders</Link>
                </li>

                <li className="flex items-center gap-2">
                  <FaCartShopping />
                  <Link to={"/CartView"}>Cart</Link>
                </li>
                <li className="flex items-center gap-2">
                  <IoHome />
                  <Link to="/MyAccount/address">Address</Link>
                </li>
                <li className="flex items-center gap-2">
                  <MdAccountCircle />
                  <Link to="/MyAccount/account-details">Account Details</Link>
                </li>
                <li className="flex items-center gap-2">
                  <MdLogout />
                  Log out
                </li>
              </ul>
            </div>
          </div>

          {/* Right Content */}
          <div className="right w-full">
            <Outlet /> {/* This renders nested routes */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
