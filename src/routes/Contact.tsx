import { Newsletter } from "../components";

const Contact = () => {
  return (
    <>
      <section className="section-vertical__padding flex flex-col items-center">
        <div className="text__dash-container">
          <h1 className="sub__heading text-center">
            <span className="sub__heading-gray">Contact</span>{" "}
            <span className="sub__heading-primary">Us</span>
          </h1>
          <hr className="text__dash-dash" />
        </div>
        <div className="my-12 flex flex-col justify-center gap-10 md:flex-row">
          <img
            src="/contact_img.png"
            alt=""
            className="w-full md:max-w-[400px]"
          />
          <div className="flex flex-col items-start justify-center gap-6">
            <p className="text-primary text-[20px] font-medium uppercase">
              our store
            </p>
            <p className="text-gray text-[16px]">
              54709 Willms Station
              <br />
              Suite 350, Washington, USA
            </p>
            <p className="text-gray text-[16px]">
              Tel: (415) 555-0132 <br />
              Email:{" "}
              <a href="mailto:webdesign.minhbao@gmail.com">
                webdesign.minhbao@gmail.com
              </a>
            </p>
            <p className="text-primary text-[20px] font-medium uppercase">
              Careers at Forever
            </p>
            <p className="text-gray text-[16px]">
              Learn more about our teams and job openings.
            </p>
            <button className="outline__button">Explore jobs</button>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
};

export default Contact;
