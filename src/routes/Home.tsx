import { Hero, Newsletter, ProductCarousel } from "../components";
import { products } from "../constants/products";
import { guarantees } from "../constants/guarantees";

const Home = () => {
  return (
    <>
      <Hero />
      {/**** Latest collection ****/}
      <section className="my-10">
        {/* text */}
        <div className="flex flex-col items-center justify-center gap-2 py-8">
          <div className="text__dash-container">
            <h2 className="sub__heading">
              <span className="sub__heading-gray">Latest</span>{" "}
              <span className="sub__heading-primary">collection</span>
            </h2>
            <hr className="text__dash-dash" />
          </div>
          <p className="text-16-primary-normal max-w-xl text-center">
            Dive into our latest collection featuring stylish, high-quality
            pieces crafted for modern living. No matter your style preference,
            our new arrivals will help you stay confident and fashionable.
          </p>
        </div>
        {/* product carousel */}
        <ProductCarousel
          className="product__carousel-home"
          products={products}
        />
      </section>
      {/**** Best Seller ****/}
      <section className="my-10">
        {/* text */}
        <div className="flex flex-col items-center justify-center gap-2 py-8">
          <div className="text__dash-container">
            <h2 className="sub__heading">
              <span className="sub__heading-gray">Best</span>{" "}
              <span className="sub__heading-primary">Seller</span>
            </h2>
            <hr className="text__dash-dash" />
          </div>
          <p className="text-16-primary-normal max-w-xl text-center">
            These customer favorites are flying off the shelves! From stylish
            everyday wear to must-have seasonal pieces, our best-selling
            collection offers the perfect blend of trend and comfort. Don't miss
            out on these top-rated items!
          </p>
        </div>
        {/* product carousel */}
        <ProductCarousel
          className="product__carousel-home"
          products={products}
        />
      </section>
      {/* Guarantee */}
      <section className="my-10 flex flex-col items-center gap-6 md:flex-row md:justify-between">
        {guarantees.map((guarantee) => (
          <div
            className="flex flex-col items-center md:py-8"
            key={guarantee.title}
          >
            <img src={guarantee.icon} alt="" className="w-10" />
            <p className="text-primary mt-5 text-[16px] font-semibold">
              {guarantee.title}
            </p>
            <span className="text-16-gray-normal">{guarantee.text}</span>
          </div>
        ))}
      </section>
      <Newsletter />
    </>
  );
};

export default Home;
