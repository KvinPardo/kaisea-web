import React from "react";
import { alianzas } from "../data";
import Kimica from "/img/alianzas/kimica.png";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../variants";

const Alianzas = () => {
  return (
    
    <section className=" lg:pb-44">
      <div className="container mx-auto">
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          className="flex justify-center items-center w-full h-full py-20"
        >
          <motion.h3
            variants={fadeIn("down", "tween", 0.4, 1.2)}
            className="lg:text-5xl uppercase font-semibold text-3xl"
          >
            Nuestras Alianzas
          </motion.h3>
        </motion.div>
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={"show"}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-x-8"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.4, 1.3)}
            className="relative mb-12 px-3 lg:mb-0"
          >
            <motion.div
              variants={fadeIn("right", "tween", 0.4, 1.4)}
              className="mb-2 flex flex-col items-center justify-center gap-y-4 hover:bg-gray-50 p-3 group "
            >
              <a href="#" target="_blank" className="group">
                <img
                  src={Kimica}
                  alt=""
                  target="_blank"
                  className="group-hover:scale-105 duration-500"
                />
              </a>

              <div className="flex flex-col justify-center items-center">
                <p className="text-center text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Distinctio exercitationem eum ipsa
                </p>
              </div>
            </motion.div>
            <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 lg:block" />
          </motion.div>

          {/* <motion.div
            variants={fadeIn("right", "tween", 0.4, 1.3)}
            className="relative mb-12 px-3 lg:mb-0"
          >
            <motion.div
              variants={fadeIn("right", "tween", 0.4, 1.4)}
              className="mb-2 flex flex-col items-center justify-center gap-y-4 hover:bg-gray-50 p-3 group "
            >
              <a href="" target="_blank" className="group">
                <img
                  src={Kimica}
                  alt=""
                  target="_blank"
                  className="group-hover:scale-105 duration-500"
                />
              </a>

              <div className="flex flex-col justify-center items-center">
                <p className="text-center text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Distinctio exercitationem eum ipsa
                </p>
              </div>
            </motion.div>
            <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 lg:block" />
          </motion.div> */}

          {/* <motion.div
            variants={fadeIn("right", "tween", 0.4, 1.3)}
            className="relative mb-12 px-3 lg:mb-0"
          >
            <motion.div
              variants={fadeIn("right", "tween", 0.4, 1.4)}
              className="mb-2 flex flex-col items-center justify-center gap-y-4 hover:bg-gray-50 p-3 group "
            >
              <a href="" target="_blank" className="group">
                <img
                  src={Kimica}
                  alt=""
                  target="_blank"
                  className="group-hover:scale-105 duration-500"
                />
              </a>

              <div className="flex flex-col justify-center items-center">
                <p className="text-center text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Distinctio exercitationem eum ipsa
                </p>
              </div>
            </motion.div>
            <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 lg:block" />
          </motion.div> */}

          {/* <motion.div
            variants={fadeIn("right", "tween", 0.4, 1.3)}
            className="relative mb-12 px-3 lg:mb-0"
          >
            <motion.div
              variants={fadeIn("right", "tween", 0.4, 1.4)}
              className="mb-2 flex flex-col items-center justify-center gap-y-4 hover:bg-gray-50 p-3 group "
            >
              <a href="" target="_blank" className="group">
                <img
                  src={Kimica}
                  alt=""
                  target="_blank"
                  className="group-hover:scale-105 duration-500"
                />
              </a>

              <div className="flex flex-col justify-center items-center">
                <p className="text-center text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Distinctio exercitationem eum ipsa
                </p>
              </div>
            </motion.div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Alianzas;
