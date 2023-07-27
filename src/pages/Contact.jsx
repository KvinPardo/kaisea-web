import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";
import { contact } from "../data";
import { AiFillHome, AiOutlineMail, AiFillPhone } from "react-icons/ai";

import Formulario from "../components/Formulario";
import { Form } from "react-router-dom";

const Contact = () => {
  // destructure
  const { title, subtitle, address } = contact;

  return (
    <>
      <motion.div
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        whileInView={"show"}
        className=""
      >
        <motion.section
          variants={fadeIn("down", "tween", 0.4, 1.2)}
          className="section lg:py-[150px] my-[80px] bg-wavecontacto bg-center bg-no-repeat w-full h-full bg-cover"
          name="contacto"
        >
          <motion.div
            variants={fadeIn("down", "tween", 0.4, 1.2)}
            className="container mx-auto"
          >
            <div className="flex flex-col lg:flex-row w-full h-full gap-x-10">
              {/* text */}
              <div className="flex-1 flex flex-col gap-y-2">
                {/* title */}
                <h2 className="text-2xl font-semibold uppercase">{title}</h2>
                <p>{subtitle}</p>
                <div className="flex items-center justify-between w-full">
                  <p className="flex items-center gap-x-2 w-full text-sm">
                    {" "}
                    <AiFillHome className="text-xl text-primary" />
                    {address}
                  </p>
                  <p className="flex items-center gap-x-2 w-full">
                    <AiFillPhone className="text-xl text-primary" /> +562
                    12345678
                  </p>
                </div>
                <p className="flex items-center gap-x-2 w-full">
                  <AiOutlineMail className="text-xl text-primary" />{" "}
                  contacto@contacto.cl
                </p>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28029.902772132766!2d-70.7854078538683!3d-28.57763380713686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969750e0885e6e49%3A0x3f318d04c1ae635a!2sVallenar%2C%20Atacama!5e0!3m2!1ses-419!2scl!4v1689813446090!5m2!1ses-419!2scl"
                    width="100%"
                    height="450"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="flex-1 flex flex-col h-full shadow-2xl py-20 lg:px-12">
                <h3 className="text-[20px] font-semibold lg:text-2xl uppercase px-9 w-full">
                  Completa el Formulario
                </h3>

                <div>
                  <Formulario />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </motion.div>
    </>
  );
};

export default Contact;
