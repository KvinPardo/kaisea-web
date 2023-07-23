import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Profesionales = ({ item }) => {
  const { name, cargo, experience, image } = item;

  return (
    <motion.div
      variants={fadeIn("right", "tween", 0.5, 1.2)}
      className="flex flex-col lg:flex-row w-full h-full shadow-md p-8 hover:scale-105 "
    >
      <div className="flex justify-center items-center">
        <img src={`/img/perfil/${image}.webp`} alt="" />
      </div>
      <div className="flex flex-col w-full h-full px-4 text-center lg:text-start">
        <h3 className="text-[20px]">{name}</h3>
        <p className="text-secondary font-bold">{cargo}</p>
        <p className="text-[15px] pt-2">{experience.slice(0, 100)}</p>
      </div>
    </motion.div>
  );
};

export default Profesionales;
