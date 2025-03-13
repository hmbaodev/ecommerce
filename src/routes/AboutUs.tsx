import { Newsletter } from "../components";
import { whyChooseUs } from "../constants/whyChooseUs";

const AboutUs = () => {
  return (
    <>
      <section className="section-vertical__padding flex flex-col items-center">
        <div className="text__dash-container">
          <h1 className="sub__heading text-center">
            <span className="sub__heading-gray">About</span>{" "}
            <span className="sub__heading-primary">Us</span>
          </h1>
          <hr className="text__dash-dash" />
        </div>
        <div className="my-10 flex flex-col gap-10 md:flex-row">
          <img
            src="/about_img.png"
            alt=""
            className="w-full md:max-w-[350px] lg:max-w-[450px] object-cover"
          />
          <div className="text-gray flex flex-col justify-center gap-6 lg:w-2/4">
            <p>
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>
            <p>
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>
            <b>Our Mission</b>
            <p>
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </section>
      <section className="section-vertical__padding flex flex-col pb-10">
        <div className="text__dash-container">
          <h1 className="sub__heading text-center">
            <span className="sub__heading-gray">About</span>{" "}
            <span className="sub__heading-primary">Us</span>
          </h1>
          <hr className="text__dash-dash" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-5">
          {whyChooseUs.map((item) => (
            <div
              className="border-white-100 flex flex-col gap-5 border px-8 py-8 md:py-16 lg:px-16"
              key={item.title}
            >
              <p className="font-medium">{item.title}</p>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <Newsletter />
    </>
  );
}

export default AboutUs