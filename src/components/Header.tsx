import { Link, NavLink, useNavigate } from "react-router";

import { links } from "../libs/links";

const Header = () => {
  const authenticated = true;
  const navigate = useNavigate();

  return (
    <header className="border-white-100 flex items-center justify-between border-b py-5">
      <div className="">
        <img src="/logo.png" alt="Forever" className="logo" />
      </div>
      <ul className="text-14-primary-medium flex items-center gap-5 uppercase">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className="flex flex-col items-center gap-1"
            >
              {({ isActive }) => (
                <>
                  <p>{link.title}</p>
                  <hr
                    className={`bg-primary h-[2px] w-2/4 border-none ${isActive ? "opacity-100" : "opacity-0"}`}
                  />
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-5">
        <img src="/search_icon.png" alt="search" className="header__icon" />
        <div className="group relative">
          <img
            src="/profile_icon.png"
            alt="profile"
            className="header__icon"
            // Redirect to login page if not authenticated
            onClick={() => {
              if (!authenticated) {
                navigate("/login");
              }
            }}
          />
          {/* Just display and toggle popup only when user logged in */}
          {authenticated && (
            <div className="absolute right-0 hidden pt-4 group-hover:block">
              <div className="bg-white-100 text-gray flex w-36 flex-col gap-2 rounded px-5 py-3">
                <p className="text-16-gray-medium cursor-pointer hover:text-black">
                  Orders
                </p>
                <p className="text-16-gray-medium cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" className="relative">
          <img src="/cart_icon.png" alt="search" className="header__icon" />
          <span className="absolute right-[-5px] bottom-[-5px] flex size-4 items-center justify-center rounded-full bg-black text-[10px] text-white">
            0
          </span>
        </Link>
      </div>
      {/* <div className="w-0"></div> */}
    </header>
  );
};

export default Header;
