import { Link } from "react-router";

const SignUp = () => {
  return (
    <div className="text-gray m-auto mt-14 flex w-[90%] flex-col items-center gap-4 sm:max-w-96">
      <div className="text__dash-container">
        <h1 className="text-primary font-prata text-[24px] md:text-[30px]">
          Sign Up
        </h1>
        <hr className="text__dash-dash" />
      </div>
      <form className="text-primary m-auto mt-14 flex w-[90%] flex-col items-center gap-4 sm:max-w-96">
        <input
          type="name"
          className="border-gray w-full border px-3 py-2"
          placeholder="Name"
        />
        <input
          type="email"
          className="border-gray w-full border px-3 py-2"
          placeholder="Email"
        />
        <input
          type="password"
          className="border-gray w-full border px-3 py-2"
          placeholder="Password"
        />
        <input
          type="password"
          className="border-gray w-full border px-3 py-2"
          placeholder="Confirm password"
        />
        <div className="flex w-full items-center justify-between">
          <p className="text-14-primary-normal">Forgot your password</p>
          <Link to="/login" className="text-14-primary-normal">
            Login
          </Link>
        </div>
        <button className="filled__button md:mt-4">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
