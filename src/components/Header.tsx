import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import clsx from "clsx";

import { links } from "../constants/links";

const Header = () => {
  const [authenticated, setAuthenticated] = useState(true);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="border-white-100 flex items-center justify-between border-b py-5">
      <Link to="/">
        <img src="/logo.png" alt="Forever" className="logo" />
      </Link>
      <ul className="text-14-primary-medium hidden items-center gap-5 uppercase sm:flex">
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
      <div className="flex items-center justify-end gap-5">
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
                <Link
                  to="/order-history"
                  className="text-16-gray-medium cursor-pointer hover:text-black"
                >
                  Orders
                </Link>
                <p
                  className="text-16-gray-medium cursor-pointer hover:text-black"
                  onClick={() => setAuthenticated(false)}
                >
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
        {/* Mobile menu icon */}
        <img
          src="/menu_icon.png"
          alt="search"
          className="header__icon block sm:hidden"
          onClick={() => setOpenMobileMenu(true)}
        />
      </div>
      {/* Mobile menu */}
      <div
        className={clsx(
          "text-16-primary-medium absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300",
          openMobileMenu ? "w-full" : "w-0",
        )}
      >
        <div className="flex flex-col">
          {/* Close menu button */}
          <div
            className="border-white-100 flex cursor-pointer items-center gap-4 border-b p-3"
            onClick={() => setOpenMobileMenu(false)}
          >
            <img
              src="dropdown_icon.png"
              alt="close"
              className="h-4 rotate-180"
            />
            <p>Back</p>
          </div>
          {links.map((link) => (
            <Link
              to={link.path}
              key={link.path}
              className="mobile__link"
              onClick={() => setOpenMobileMenu(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
