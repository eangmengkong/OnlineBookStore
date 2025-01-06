import Search from "../../common/Search";
import { useCart } from "react-use-cart";

const CartView = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  return (
    <>
      <div>
        <Search />
      </div>
      <div className="flex flex-col gap-6 p-4 lg:flex-row">
        {/* Product Section */}
        <div className="w-full rounded-lg border p-4 lg:w-2/3">
          {!isEmpty ? (
            <>
              <div>
                <h2 className="mb-4 text-lg font-bold">
                  Your Cart ({totalUniqueItems}) Total Items: ({totalItems})
                </h2>
              </div>

              <table className="w-full border-b">
                <thead className="hidden sm:table-header-group">
                  <tr>
                    <th className="p-2 text-left">Image</th>
                    <th className="p-2 text-left">Details</th>
                    <th className="p-2 text-left">Quantity</th>
                    <th className="p-2 text-left">Actions</th>
                    <th className="p-2 text-left">Price</th>
                    <th className="p-2 text-left">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr
                      key={index}
                      className="flex flex-wrap items-center gap-4 border-b py-4 sm:table-row"
                    >
                      {/* Image */}
                      <td className="flex w-full justify-center p-2 sm:table-cell sm:w-auto">
                        <img
                          src={item.img}
                          alt="img"
                          className="h-20 w-20 rounded-lg object-cover"
                        />
                      </td>

                      {/* Details */}
                      <td className="w-full flex-1 p-2 text-center sm:table-cell sm:w-auto sm:text-left">
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-sm text-gray-500">
                          {item.product}
                        </div>
                      </td>

                      {/* Quantity */}
                      <td className="w-full p-2 text-center sm:table-cell sm:w-auto sm:text-left">
                        <span className="text-gray-700">
                          Quantity: {item.quantity}
                        </span>
                      </td>

                      {/* Update Quantity */}
                      <td className="flex w-full justify-center gap-2 p-2 sm:table-cell sm:w-auto">
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                          className="rounded-lg border px-3 py-1 transition-all ease-in-out hover:bg-blue-500 hover:text-white"
                        >
                          -
                        </button>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                          className="rounded-lg border px-3 py-1 transition-all ease-in-out hover:bg-blue-500 hover:text-white"
                        >
                          +
                        </button>
                      </td>

                      {/* Price */}
                      <td className="w-full p-2 text-center sm:table-cell sm:w-auto sm:text-left">
                        <span className="text-gray-700">${item.price}</span>
                      </td>

                      {/* DELETE BUTTON */}
                      <td className="flex w-full justify-center p-2 sm:table-cell sm:w-auto">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="rounded-lg bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}

          {/* Coupon Section */}
          <div className="mt-4 flex items-center justify-between gap-2 maxmd:flex maxmd:flex-col">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Coupon code"
                className="rounded-lg border p-2"
              />
              <button className="rounded-lg bg-gray-800 px-4 py-2 text-white">
                APPLY COUPON
              </button>
            </div>
            <button
              className="rounded-lg bg-gray-300 px-4 py-2 text-black"
              onClick={() => emptyCart()}
            >
              Clear Cart
            </button>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="w-full rounded-lg border p-4 lg:w-1/3">
          <h2 className="mb-4 font-semibold">Cart totals</h2>
          <div className="mb-2 flex justify-between">
            <span>Subtotal</span>
            <span>${cartTotal}</span>
          </div>
          <div className="mb-4 flex justify-between">
            <span>Shipping</span>
            <span>Free Shipping</span>
          </div>
          <p className="mb-2 text-sm text-gray-500">
            Shipping Options Will Be Updated During Checkout.
          </p>
          <a href="#" className="text-sm text-blue-600 underline">
            CALCULATE SHIPPING
          </a>
          <div className="mt-4 flex justify-between font-semibold">
            <span>Total</span>
            <span>${cartTotal}</span>
          </div>
          <button className="mt-4 w-full rounded-lg bg-gray-800 py-2 text-white">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
};

export default CartView;
