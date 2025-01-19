import { useState, useEffect } from "react";
const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Load orders from localStorage
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="h-auto bg-gray-100 p-6 md:w-[800px] lg:w-[920px]">
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div
            key={index}
            className="mx-auto mb-3 max-w-4xl rounded-md bg-white p-6 shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Book id <span className="text-blue-500">{order.id}</span>
                </p>
                <p className="flex flex-col gap-2 text-sm text-gray-500 md:flex-row lg:flex-row">
                  Order Placed: <span>{order.dateAdded}</span>
                </p>
              </div>
              <button className="rounded-md bg-yellow-500 px-4 py-2 text-sm text-white">
                TRACK ORDER
              </button>
            </div>

            <div className="place-items-center items-start border-b py-4 text-center md:flex md:text-left lg:flex lg:justify-between lg:text-left">
              <img
                src={order.img}
                alt={order.name}
                className="h-20 w-20 rounded object-cover"
              />
              <div className="flex-1 px-4">
                <h3 className="text-lg font-medium">{order.name}</h3>
                <p className="text-sm text-gray-500">Status: {order.status}</p>
              </div>
              <div className="md:text-right lg:text-right">
                <p className="font-medium">${order.price}</p>
                <p className="text-sm text-gray-500">
                  Delivery Expected in 3-5 days
                </p>
              </div>
            </div>
            <button className="mt-5 rounded-md bg-red-500 px-4 py-2 text-sm font-bold text-white">
              Cancel Order
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No orders found.</p>
      )}
      <button
        className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-white"
        onClick={() => {
          localStorage.removeItem("orders");
          setOrders([]);
        }}
      >
        Clear Order History
      </button>
    </div>
  );
};

export default Orders;
