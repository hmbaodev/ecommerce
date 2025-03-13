const Newsletter = () => {
  return (
    <div className="flex flex-col items-center gap-3 py-5">
      <p className="text-primary text-[24px] font-medium">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray font-normal text-[14px] md:text-[16px] mt-2 text-center">
        Join our weekly newsletter to get discount coupons and wearing tips
      </p>
      <form className="border-white-100 mx-auto flex w-full items-center gap-3 border pl-3 sm:w-1/2">
        <input
          className="w-full text-[14px] outline-none sm:flex-1 md:text-[16px]"
          type="email"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="filled__button"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
