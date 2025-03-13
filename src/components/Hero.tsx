const Hero = () => {
  return (
    <section className="border-white-100 flex flex-col-reverse border sm:flex-row">
      <div className="flex w-full items-center justify-center py-10 sm:w-1/2 sm:py-0">
        <div>
          <div className="text__dash-container">
            <hr className="text__dash-dash" />
            <p className="text-16-primary-medium uppercase">our bestseller</p>
          </div>
          <h1 className="major__heading">Latest Arrivals</h1>
          <div className="text__dash-container">
            <p className="text-16-primary-medium uppercase">our bestseller</p>
            <hr className="text__dash-dash" />
          </div>
        </div>
      </div>
      <img src="/hero_img.png" alt="" className="w-full sm:w-1/2" />
    </section>
  );
}

export default Hero