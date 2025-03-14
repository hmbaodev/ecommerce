import { useState } from "react";
import clsx from "clsx";

import { products } from "../constants/products";
import { ProductCarousel } from "../components";

const Collection = () => {
  const [openMobileFilter, setOpenMobileFilter] = useState(false);

  return (
    <div className="section-vertical__padding flex flex-col justify-start gap-1 md:flex-row md:gap-6">
      <div className="min-w-54">
        <p
          className="text-primary flex items-center gap-2 py-2 text-[20px] font-medium uppercase"
          onClick={() => {
            if (window.innerWidth < 768) {
              setOpenMobileFilter(!openMobileFilter);
            }
          }}
        >
          <span>Filter</span>
          <img
            src="/dropdown_icon.png"
            alt=""
            className={clsx(
              "h-3 md:hidden",
              openMobileFilter && "rotate-90 transform",
            )}
          />
        </p>
        {/* Categories */}
        <div
          className={clsx(
            "border-white-100 mt-6 border py-3 pl-5 md:block",
            openMobileFilter ? "block" : "hidden",
          )}
        >
          <p className="text-16-primary-medium mb-3 uppercase">categories</p>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <input type="checkbox" className="w-3" value="men" /> Men
            </p>
            <p className="flex items-center gap-2">
              <input type="checkbox" className="w-3" value="women" /> Women
            </p>
            <p className="flex items-center gap-2">
              <input type="checkbox" className="w-3" value="kids" /> Kids
            </p>
          </div>
        </div>
        {/* Types */}
        <div
          className={clsx(
            "border-white-100 mt-6 border py-3 pl-5 md:block",
            openMobileFilter ? "block" : "hidden",
          )}
        >
          <p className="text-16-primary-medium mb-3 uppercase">types</p>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <input type="checkbox" className="w-3" value="top-wear" /> Top
              Wear
            </p>
            <p className="flex items-center gap-2">
              <input type="checkbox" className="w-3" value="bottom-wear" />{" "}
              Bottom Wear
            </p>
            <p className="flex items-center gap-2">
              <input type="checkbox" className="w-3" value="winter-wear" />{" "}
              Winter Wear
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="mb-7 flex items-center justify-between">
          <div className="text__dash-container max-lg:hidden">
            <h1 className="sub__heading text-center">
              <span className="sub__heading-gray">all</span>{" "}
              <span className="sub__heading-primary">collection</span>
            </h1>
            <hr className="text__dash-dash" />
          </div>
          <select name="" id="" className="border-gray border-2 px-4 py-2 text-16-primary-medium outline-none">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        <ProductCarousel
          className="product__carousel-collection"
          products={products}
        />
      </div>
    </div>
  );
};

export default Collection;
