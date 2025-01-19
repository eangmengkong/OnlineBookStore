const AccountDetail = () => {
  return (
    <div className="right md:w-[800px] lg:w-[920px]">
      <div className="gap-4 lg:flex">
        <div
          className="h-[20vh] lg:w-[450px]"
          style={{
            backgroundImage: `url('/images/package.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="ml-2 mt-2 lg:ml-8 lg:mt-6">
            <h1 className="text-[25px] font-bold">
              Order <br />
              tracking
            </h1>
            <h4 className="text-gray-600">See your order history</h4>
          </div>
        </div>
        <div
          className="h-[20vh] lg:w-[450px]"
          style={{
            backgroundImage: `url('/images/addre.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="ml-2 mt-2 lg:ml-8 lg:mt-6">
            <h1 className="text-[25px] font-bold">
              Billing <br />
              Address
            </h1>
            <h4 className="text-gray-600">Set your billing address</h4>
          </div>
        </div>
      </div>
      <h1 className="my-10 w-[200px] border-b-2 border-b-red-500 text-[26px] font-bold">
        Account Details
      </h1>
      <div>
        <form action="">
          <div className="grid grid-cols-2 gap-3 font-bold">
            <div className="flex flex-col">
              <label htmlFor="">First Name </label>
              <input type="text" className="border p-2" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Last Name </label>
              <input type="text" className="border p-2" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Email Address </label>
              <input type="email" className="border p-2" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Password </label>
              <input type="text" className="border p-2" />
            </div>
          </div>
          <button className="mt-5 w-[150px] rounded-md bg-red-400 p-2 text-white">
            Edit Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountDetail;
