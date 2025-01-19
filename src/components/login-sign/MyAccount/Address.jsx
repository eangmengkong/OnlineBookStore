const Address = () => {
  return (
    <div className="container md:w-[800px] md:gap-3 lg:flex lg:w-[920px] lg:gap-3">
      <div className="user-address bg-gray-300 p-3 lg:w-[50%]">
        <h1 className="flex justify-center text-[20px] font-bold">
          <span>Your Address</span>
        </h1>
        <div>
          <h3>Name</h3>
          <h3>Street</h3>
          <h3>City/Province</h3>
          <h3>Phone</h3>
        </div>
        <div className="mr-4 mt-4 flex justify-end">
          <button className="flex w-[90px] justify-center rounded-lg bg-red-500 p-1 text-white">
            <span>Edit</span>
          </button>
        </div>
      </div>
      <div className="shipping address bg-gray-300 p-3 lg:w-[50%]">
        <h1 className="flex justify-center text-[20px] font-bold">
          <span>Shipping Address</span>
        </h1>
        <div>
          <h3>Name</h3>
          <h3>Street</h3>
          <h3>City/Province</h3>
          <h3>Phone</h3>
        </div>
        <div className="mr-4 mt-4 flex justify-end">
          <button className="flex w-[90px] justify-center rounded-lg bg-red-500 p-1 text-white">
            <span>Edit</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Address;
