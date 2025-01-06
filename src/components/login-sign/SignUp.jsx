// eslint-disable-next-line react/prop-types
const SignUp = ({ onClose, onLoginClick }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-[400px] rounded-lg bg-white shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white hover:text-gray-800"
        >
          ✕
        </button>
        <form className="flex flex-col">
          <div className="wrapper flex max-w-[500px] flex-col items-center justify-center">
            <div className="header">
              <div className="about-header w-[400px] place-items-center rounded-lg bg-orange-500 p-5 text-white">
                <h2 className="text-3xl font-bold">Sign Up</h2>
                <h5>Welcome to Sign Up with our community</h5>
              </div>
            </div>
            <div className="log-in flex w-[400px] flex-col gap-2 p-5">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="border-b-2 border-gray-400 focus:outline-none"
                required
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="border-b-2 border-gray-400 focus:outline-none"
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="border-b-2 border-gray-400 focus:outline-none"
              />
              <label htmlFor="re-password">Re-Enter Password</label>
              <input
                type="re-password"
                name="re-password"
                id="re-password"
                required
                className="border-b-2 border-gray-400 focus:outline-none"
              />
              <div className="flex gap-3">
                <input type="checkbox" name="" id="" />
                <label htmlFor="Remeberme">Remeber Me</label>
              </div>

              <button className="login bg-gray-600 p-3 font-bold text-white transition-all duration-300 hover:cursor-pointer hover:bg-orange-500 hover:transition-all hover:duration-300">
                Sign Up
              </button>
              <span className="flex place-content-center transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all hover:duration-300">
                <a href=""> Forgot your password? Get help</a>
              </span>
              <span className="hover:duration-30 flex place-content-center text-blue-600 transition-all duration-300 hover:cursor-pointer hover:text-orange-500 hover:transition-all">
                <h3 onClick={onLoginClick}>Login</h3>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
