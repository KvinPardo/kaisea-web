import { Link } from "react-router-dom";
import Logo from "/img/logo-alga.webp";

// import icons
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pb-[70px] lg:p-12 bg-[#02175D]">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between items-center lg:flex-row gap-y-5">
          {/* Logo */}
          <Link href="#">
            <img src={Logo} alt="" />
          </Link>
          {/* copy right text */}
          <p className="text-white text-lg">
            &copy; 2023. All rights reserved.
          </p>
          {/* Social icons */}
          <div className="flex gap-x-4 text-black text-lg">
            <div className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center shadow-lg cursor-pointer hover:text-gray-400 transition">
              <a href="" target="_blank">
                <FaFacebookF />
              </a>
            </div>
            <div className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center shadow-lg cursor-pointer hover:text-gray-400 transition">
              <a href="" target="_blank">
                <FaTwitter />
              </a>
            </div>
            <div className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center shadow-lg cursor-pointer hover:text-gray-400 transition">
              <a href="" target="_blank">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
