import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex gap-x-8 justify-center items-center ">
      <a href="" target="_blank">
        <FaFacebookF className="lg:text-white text-primary lg:text-xl text-[30px]" />
      </a>
      <a href="" target="_blank">
        <FaTwitter className="lg:text-white text-primary lg:text-xl text-[30px]" />
      </a>
      <a href="" target="_blank">
        <FaInstagram className="lg:text-white text-primary lg:text-xl text-[30px]" />
      </a>
    </div>
  );
};

export default Socials;
