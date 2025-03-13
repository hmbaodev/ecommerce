import { Link } from "react-router";
import { links, socialLinks } from "../constants/links";

const Footer = () => {
  return (
    <footer className="border-white-100 mt-10 border-t py-10">
      <div className="text-14-primary-normal flex grid-cols-[3fr_1fr_1fr] flex-col gap-6 sm:grid sm:gap-14">
        <div>
          <img src="/logo.png" alt="logo" className="logo mb-5" />
          <p>
            At FOREVER, we believe in timeless fashion that blends quality,
            comfort, and style. Our mission is to bring you carefully curated
            collections that make you feel confident every day. From classic
            essentials to trendsetting pieces, we ensure that each item meets
            the highest standards. Join us on our journey to redefine fashion,
            one outfit at a time.
          </p>
        </div>
        <div>
          <p className="text-primary mb-5 text-[20px] font-medium uppercase">
            Contact
          </p>
          <ul className="text-14-gray-normal flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-primary">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-primary mb-5 text-[20px] font-medium uppercase">
            Get in touch
          </p>
          <ul className="text-14-gray-normal flex flex-col gap-1">
            {socialLinks.map((socialLink) => (
              <li key={socialLink.path}>
                <a
                  href={socialLink.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  {socialLink.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-primary block w-full bg-white py-2 text-center text-[14px] md:hidden">
          Web designed and developed by Hua Minh Bao - Contact:{" "}
          <a
            href="mailto:webdesign.minhbao@gmail.com"
            className="hover:text-primary/85 underline"
          >
            webdesign.minhbao@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
