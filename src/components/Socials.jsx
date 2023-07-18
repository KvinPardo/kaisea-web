import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Socials = () => {
  const [isActive, setIsActive] = useState(false);

  // Scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 800 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <div className="flex gap-x-4 justify-center items-center">
      <a href="" target="_blank">
        <FaFacebookF className="lg:text-white text-primary text-xl" />
      </a>
      <a href="" target="_blank">
        <FaTwitter className="lg:text-white text-primary text-xl" />
      </a>
      <a href="" target="_blank">
        <FaInstagram className="lg:text-white text-primary text-xl" />
      </a>
    </div>
  );
};

export default Socials;
