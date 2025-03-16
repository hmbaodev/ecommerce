import { CartItem } from "../components";

const Cart = () => {
  return (
    <div className="section-vertical__padding">
      <div className="text__dash-container">
        <h1 className="sub__heading">
          <span className="sub__heading-gray">Your</span>{" "}
          <span className="sub__heading-primary">Cart</span>
        </h1>
        <hr className="text__dash-dash" />
      </div>
      <div className="my-5 flex flex-col gap-2 md:gap-3">
        <CartItem />
        <CartItem />
        <CartItem />
        <div className="mt-5 flex justify-end">
          <div className="w-full md:w-96 flex flex-col gap-2 md:gap-3">
            <div className="text__dash-container">
              <h1 className="sub__heading">
                <span className="sub__heading-gray">cart</span>{" "}
                <span className="sub__heading-primary">total</span>
              </h1>
              <hr className="text__dash-dash" />
            </div>
            <div className="flex items-center justify-between border-white-100 pt-4">
              <p className="text-16-gray-normal">Subtotal</p>
              <p className="text-16-gray-normal">$449.97</p>
            </div>
            <div className="flex items-center justify-between border-t border-white-100 pt-4">
              <p className="text-16-gray-normal">Shipping Fee</p>
              <p className="text-16-gray-normal">$10</p>
            </div>
            <div className="flex items-center justify-between border-t border-white-100 pt-4">
              <p className="text-16-primary-medium">Total</p>
              <p className="text-16-primary-medium">$459.97</p>
            </div>
            <button className="filled__button mt-3">proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
