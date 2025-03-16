import clsx from "clsx";
import { useState } from "react";

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center justify-between border-b border-white-100 pb-4">
      <div className="flex items-center gap-2 md:gap-4">
        <img src="/p_img1.png" alt="" className="w-20 object-cover md:w-28" />
        <div className="flex flex-col gap-3">
          <p className="text-14-primary-medium md:text-16-primary-medium">
            Men Round Neck Pure Cotton T-shirt
          </p>
          <div className="flex items-center gap-4">
            <span className="text-14-primary-normal md:text-16-primary-normal">
              $149.99
            </span>
            <span className="text-16-primary-normal md:text-16-primary-normal border-white-100 flex size-6 md:size-8 cursor-pointer items-center justify-center border bg-gray-100 p-4 uppercase">
              L
            </span>
          </div>
        </div>
      </div>
      <div className="border-white-100 flex items-center gap-4 border px-2 md:px-4 md:py-2">
        <button
          className={clsx(
            "text-16-primary-medium",
            quantity === 0 && "disabled",
          )}
          onClick={() => {
            // TODO: If quantity is 0, remove item
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="text-16-primary-medium"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
      <button onClick={() => {
        // TODO: Remove item
      }}>
        <img src="/bin_icon.png" alt="remove" className="w-5" />
      </button>
    </div>
  );
};

export default CartItem;
