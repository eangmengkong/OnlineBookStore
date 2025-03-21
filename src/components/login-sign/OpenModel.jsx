import { IoDiamond } from "react-icons/io5";
import { MdOutlineLanguage } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import Login from "../login-sign/Login";
import SignUp from "../login-sign/SignUp";
const OpenModel = () => {
  const openLogin = () => setActiveModal("login");
  const openSignUp = () => setActiveModal("signup");
  const closeModal = () => setActiveModal(null);
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      <div>
        <div className="container bg-gray-200 sm:min-w-[569px] md:max-w-[830px] lg:max-w-[1920px]">
          <div className="wrapper mx-auto max-w-[1200px] p-3">
            <div className="lg:flex lg:justify-between">
              <div className="hidden lg:block">
                <h3>Welcome to BookShop Online Shop!</h3>
              </div>
              <div className="flex gap-8 md:place-content-center">
                <h3 className="flex items-center gap-1 transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                  <i>
                    <IoDiamond />
                  </i>
                  Currency
                </h3>
                <h3 className="flex items-center gap-1 transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                  <i>
                    <MdOutlineLanguage />
                  </i>
                  Language
                </h3>
                <h3 className="flex items-center gap-1 transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                  <i>
                    <FaRegUser />
                  </i>
                  <span onClick={openLogin}>Sign In / Join</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {activeModal === "login" && (
        <Login onClose={closeModal} onSignUpClick={openSignUp} />
      )}
      {activeModal === "signup" && (
        <SignUp onClose={closeModal} onLoginClick={openLogin} />
      )}
    </>
  );
};

export default OpenModel;
