import { useWishlist } from "./WishlistContext";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const WishlistView = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);

  const handleAddToCart = (item) => {
    addItem({
      id: item.id,
      name: item.name,
      product: item.product,
      img: item.img,
      price: item.price,
    });
    navigate("/CartView");
  };

  const handleAddSelectedToCart = () => {
    const selected = wishlist.filter((item) => selectedItems.includes(item.id));
    selected.forEach((item) => addItem(item));
    alert(`${selected.length} items added to the cart!`);
    setSelectedItems([]);
  };

  const handleAddAllToCart = () => {
    wishlist.forEach((item) => addItem(item));
    navigate("/CartView");
  };

  const handleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-bold">Default Wishlist</h2>
      {wishlist.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200 md:table">
            <thead>
              <tr className="hidden bg-gray-100 text-left text-sm font-semibold md:table-row">
                <th className="border border-gray-200 p-2"></th>
                <th className="border border-gray-200 p-2">Product Name</th>
                <th className="border border-gray-200 p-2">Unit Price</th>
                <th className="border border-gray-200 p-2">Date Added</th>
                <th className="border border-gray-200 p-2">Stock Status</th>
                <th className="border border-gray-200 p-2">Remove</th>
                <th className="border border-gray-200 p-2">Add to Cart</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((item) => (
                <tr
                  key={item.id}
                  className="mb-4 flex flex-col hover:bg-gray-50 md:mb-0 md:table-row"
                >
                  <td className="border border-gray-200 p-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4"
                      onChange={() => handleSelectItem(item.id)}
                    />
                  </td>
                  <td className="flex items-center gap-4 border border-gray-200 p-2">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-12 w-12 rounded object-cover"
                    />
                    {item.name}
                  </td>
                  <td className="border border-gray-200 p-2">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="border border-gray-200 p-2 md:text-[15px]">
                    {item.dateAdded}
                  </td>
                  <td className="border border-gray-200 p-2">
                    {item.stockStatus}
                  </td>
                  <td className="border border-gray-200 p-2">
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="rounded-lg bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </td>
                  <td className="border border-gray-200 p-2">
                    <button
                      className="rounded bg-gray-800 px-3 py-1 text-white hover:bg-gray-900 md:text-[13px]"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500">Your wishlist is empty.</p>
      )}
      <div className="mt-4 flex flex-col gap-4 md:flex-row md:justify-between">
        <div className="flex flex-col gap-4 md:flex-row">
          <select className="w-full rounded border p-2 md:w-[250px]">
            <option>Actions</option>
            <option>Move to Favorites</option>
            <option>Delete Selected</option>
          </select>
          <button className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-900 md:text-[13px]">
            Apply Action
          </button>
        </div>
        <div className="flex flex-col gap-3 md:flex-row">
          <button
            onClick={clearWishlist}
            className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 md:text-[13px]"
          >
            Clear Wishlist
          </button>
          <button
            onClick={handleAddSelectedToCart}
            className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-900 md:text-[13px]"
          >
            Add Selected to Cart
          </button>
          <button
            onClick={handleAddAllToCart}
            className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-900 md:text-[13px]"
          >
            Add All to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistView;
