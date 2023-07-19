import { Link } from "react-router-dom";
import Logo from "/img/logo-alga.webp";
import { AiFillHome, AiOutlineMail, AiFillPhone } from "react-icons/ai";

// import icons
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Footer container */}
      <div className="bg-primary lg:mt-40">
        <footer className=" text-neutral-600  dark:text-neutral-200 lg:px-[140px]">
          <div className="flex items-center justify-center  border-neutral-200 py-6 px-5 dark:border-neutral-500 lg:justify-between">
            <div className="flex justify-between items-center">
              <span className="text-[14px] pr-4">
                Sigue nuestras Redes Sociales para mantenerte informado!
              </span>
            </div>

            {/* Social network icons container */}
            <div className="flex justify-center gap-x-5">
              <a href="#!" className=" text-neutral-600 dark:text-neutral-200">
                <FaFacebookF />
              </a>
              <a href="#!" className=" text-neutral-600 dark:text-neutral-200">
                <FaInstagram />
              </a>
              <a href="#!" className=" text-neutral-600 dark:text-neutral-200">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="block bg-secondary w-full h-[1px]" />

          <div className="py-10 text-center md:text-left">
            <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col w-full h-full gap-y-4 justify-center items-center lg:items-start lg:justify-normal px-5 lg:px-0">
                <a href="/" className="">
                  <img src={Logo} alt="" className="w-28" />
                </a>
                <p className="">
                  Nos hemos dedicado al negocio acuícola de algas marinas,
                  aprovechando la riqueza de las costas chilenas...
                </p>
              </div>

              {/* Useful links section */}
              <div className="">
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-white">
                  Links
                </h6>
                <p className="mb-4">
                  <Link
                    to="/nosotros"
                    className="text-neutral-600 dark:text-neutral-200"
                  >
                    Nosotros
                  </Link>
                </p>
                <p className="mb-4">
                  <Link
                    to="/equipo"
                    className="text-neutral-600 dark:text-neutral-200"
                  >
                    Nuestro Equipo
                  </Link>
                </p>
                <p className="mb-4">
                  <Link
                    to="/contacto"
                    className="text-neutral-600 dark:text-neutral-200"
                  >
                    Contacto
                  </Link>
                </p>

                <p>
                  <a
                    href="#!"
                    className="text-neutral-600 dark:text-neutral-200"
                  >
                    Help
                  </a>
                </p>
              </div>
              {/* Contact section */}
              <div>
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-white">
                  Contacto
                </h6>
                <p className="mb-4 flex items-center justify-center md:justify-start gap-x-2">
                  <AiFillHome />
                  Provincia de Vallenar, Chile
                </p>
                <p className="mb-4 flex items-center justify-center md:justify-start gap-x-2">
                  <AiOutlineMail />
                  info@example.com
                </p>
                <p className="mb-4 flex items-center justify-center md:justify-start gap-x-2">
                  <AiFillPhone />+ 56 2 12345678
                </p>
              </div>
            </div>
          </div>
          {/*Copyright section*/}
        </footer>
        <div className="flex justify-center flex-col p-2 text-center bg-primary w-full">
          <p className="text-white text-[13px]">&copy; TODOS LOS DERECHOS RESERVADOS </p>
          <p className="text-white text-[13px]">Provincia de Vallenar, Chile</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
