import { useRef, useState } from "react";
import clsx from "clsx";

import { imageSources } from "../constants/imageSources";
import { sizes } from "../constants/sizes";
import { products } from "../constants/products";
import { ProductCarousel } from "../components";

const ProductDetail = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [mainImage, setMainImage] = useState<string>(imageSources[0]);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedTab, setSelectedTab] = useState<"description" | "review">("description");
  const NUM_OF_RELATED_PRODUCTS = 4;

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 2; // Scroll half the container width
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className="section-vertical__padding flex flex-col gap-12 md:flex-row md:gap-8">
        {/* product images */}
        <div className="flex w-full flex-1 flex-col">
          <img src={mainImage} alt="" className="mb-3 w-full object-cover" />
          <div className="flex w-full max-w-full gap-2">
            <div
              className="bg-white-100 flex min-h-full items-center justify-center px-3"
              onClick={() => scroll("left")}
            >
              <img
                src="/dropdown_icon.png"
                alt=""
                className="w-[15px] rotate-180 transform"
              />
            </div>
            <div
              className="scrollbar-hidden flex flex-1 items-center gap-2 overflow-x-auto"
              ref={scrollRef}
            >
              {imageSources.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="w-[20%]"
                  onClick={() => setMainImage(src)}
                />
              ))}
            </div>
            <div
              className="bg-white-100 flex min-h-full items-center justify-center px-3"
              onClick={() => scroll("right")}
            >
              <img src="/dropdown_icon.png" alt="" className="w-[15px]" />
            </div>
          </div>
        </div>
        {/* product details */}
        <div className="flex flex-1 flex-col items-start justify-start gap-2">
          <h1 className="text-primary text-[24px] font-medium md:pt-3">
            Women Round Neck Cotton Top
          </h1>
          <div className="flex items-center gap-2">
            <img src="/star_icon.png" alt="" className="w-5" />
            <img src="/star_icon.png" alt="" className="w-5" />
            <img src="/star_icon.png" alt="" className="w-5" />
            <img src="/star_icon.png" alt="" className="w-5" />
            <img src="/star_icon.png" alt="" className="w-5" />
            <span className="ml-1">(120)</span>
          </div>
          <p className="text-primary text-[24px] font-medium">$59.99</p>
          <p className="text-16-gray-normal max-w-[450px]">
            A lightweight, usually knitted, pullover shirt, close-fitting and
            with a round neckline and short sleeves, worn as an undershirt or
            outer garment.
          </p>
          <p className="text-16-primary-medium mt-3">Sizes</p>
          <div className="flex items-center gap-3">
            {sizes.map((size) => (
              <button
                key={size}
                className={clsx(
                  "text-16-primary-normal flex size-12 cursor-pointer items-center justify-center border bg-gray-100 p-4 uppercase hover:bg-gray-200",
                  selectedSize === size ? "border-orange" : "border-white-100",
                )}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <button className="filled__button mt-4">add to cart</button>
          <div className="bg-white-100 my-4 h-[1px] w-full md:w-[80%]" />
          <p className="text-16-gray-normal">100% Original product.</p>
          <p className="text-16-gray-normal">
            Cash on delivery is available on this product.
          </p>
          <p className="text-16-gray-normal">
            Easy return and exchange policy within 7 days.
          </p>
        </div>
      </section>
      <section className="mt-8">
        {/* Tabs */}
        <div className="flex items-center">
          <p
            className={clsx(
              "border-white-100 text-16-primary-medium cursor-pointer border border-b-0 px-6 py-3",
              selectedTab === "description" && "bg-gray-200",
            )}
            onClick={() => setSelectedTab("description")}
          >
            Description
          </p>
          <p
            className={clsx(
              "border-white-100 text-16-primary-medium cursor-pointer border border-b-0 border-l-0 px-6 py-3",
              selectedTab === "review" && "bg-gray-200",
            )}
            onClick={() => setSelectedTab("review")}
          >
            Review (120)
          </p>
        </div>
        <div className="border-white-100 border p-6">
          <p className="text-16-gray-normal mb-2">
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p className="text-16-gray-normal mb-2">
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </section>
      <section className="section-vertical__padding flex flex-col items-center gap-6">
        <div className="text__dash-container mb-2">
          <h1 className="sub__heading text-center">
            <span className="sub__heading-gray">related</span>{" "}
            <span className="sub__heading-primary">products</span>
          </h1>
          <hr className="text__dash-dash" />
        </div>
        <ProductCarousel
          products={products}
          className="product__carousel-home"
          limit={NUM_OF_RELATED_PRODUCTS}
        />
      </section>
    </>
  );
};

export default ProductDetail;
