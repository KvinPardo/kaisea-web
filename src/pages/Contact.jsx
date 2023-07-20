import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { contact } from "../data";
import { AiFillHome, AiOutlineMail, AiFillPhone } from "react-icons/ai";
import Faqs from "../components/Faqs";

const Contact = () => {
  // destructure
  const { title, subtitle, address } = contact;

  return (
    <>
      <section className="section lg:py-[200px] my-[80px] bg-wavecontacto bg-center bg-no-repeat w-full h-full bg-cover">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-full h-full gap-x-10">
            {/* text */}
            <div className="flex-1 flex flex-col gap-y-2">
              {/* title */}
              <h2 className="text-2xl font-semibold uppercase">{title}</h2>
              <p>{subtitle}</p>
              <div className="flex">
                <p>{address}</p>
                <p>{address}</p>
              </div>
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
            <div className="flex-1 flex flex-col h-full shadow-2xl py-10 px-12">
              <h3 className="text-[20px] font-semibold lg:text-2xl uppercase mb-10">
                Completa el Formulario
              </h3>
              <form action="" className="flex flex-col gap-y-3 p-10 rounded-lg">
                <div className="flex flex-col lg:flex-row gap-5 mb-5">
                  <div className="flex-1 flex-col">
                    <label htmlFor="">Nombre:</label>
                    <input
                      type="text"
                      className="w-full outline-none border-b-[1px] p-2 placeholder:italic focus:ring-primary focus:border-blue-500"
                      placeholder="Ingresa tu Nombre"
                      required
                    />
                  </div>
                  <div className="flex-1 flex-col">
                    <label htmlFor="">Apellidos:</label>
                    <input
                      type="text"
                      className="w-full outline-none border-b-[1px] p-2 placeholder:italic"
                      placeholder="Ingresa tu Nombre"
                      required
                    />
                  </div>
                </div>
                <div className="flex gap-x-5 mb-5">
                  <div className="flex-1 flex-col">
                    <label htmlFor="">Email:</label>
                    <input
                      type="text"
                      className="w-full outline-none border-b-[1px] p-2 placeholder:italic"
                      placeholder="Ingresa tu Nombre"
                      required
                    />
                  </div>
                  <div className="flex-1 flex-col">
                    <label htmlFor="">Teléfono:</label>
                    <input
                      type="text"
                      className="w-full outline-none border-b-[1px] p-2 placeholder:italic"
                      placeholder="Ingresa tu Nombre"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-x-5">
                  <div className="flex-1 flex-col">
                    <label htmlFor="">Email:</label>
                    <input
                      type="text"
                      className="w-full outline-none border-b-[1px] p-2 placeholder:italic"
                      placeholder="contacto@ejemplo.com"
                      required
                    />
                  </div>
                  <div className="flex-1 flex-col">
                    <label htmlFor="solicitud">Tipo de Solicitud:</label>
                    <select
                      id="solicitud"
                      placeholder="Solicitud"
                      className="w-full outline-none border-b-[1px] p-2 placeholder:italic"
                      required
                    >
                      <option value="">Información sobre Algas</option>
                      <option value="">Información sobre Algas</option>
                      <option value="">Información sobre Algas</option>
                      <option value="">Información sobre Algas</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center mt-5">
                  <button
                    type="submit"
                    className="px-4 py-3 bg-primary text-white w-full lg:max-w-[250px]"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="">
          <Faqs />
        </div>
      </section>
    </>
  );
};

export default Contact;
