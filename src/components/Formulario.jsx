import { useState, useEffect } from "react";
import ErrorForm from "./ErrorForm";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('enviando');

    // Validación
    if ([nombre, apellidos, email, telefono, mensaje].includes("")) {
      console.log("hay campos vacíos");
      setError(true);
      return;
    }

    setError(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-3 lg:p-5 p-4 rounded-lg"
      >
        {error && (
          <ErrorForm 
            mensaje='Todos los campos son Obligatorios'
          />
        )}
        <div className="flex flex-col lg:flex-row gap-5 mb-5">
          <div className="flex-1 flex-col">
            <label htmlFor="">Nombre:</label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              type="text"
              className="w-full outline-none border-b-[1px] p-2 placeholder:italic focus:ring-primary focus:border-blue-500"
              placeholder="Ingresa tu Nombre"
            />
          </div>
          <div className="flex-1 flex-col">
            <label htmlFor="">Apellidos:</label>
            <input
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
              type="text"
              className="w-full outline-none border-b-[1px] p-2 placeholder:italic"
              placeholder="Ingresa tu Nombre"
            />
          </div>
        </div>
        <div className="flex gap-x-5 mb-5">
          <div className="flex-1 flex-col">
            <label htmlFor="">Email:</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full outline-none border-b-[1px] p-2 placeholder:italic"
              placeholder="Ingresa tu Nombre"
            />
          </div>
          <div className="flex-1 flex-col">
            <label htmlFor="">Teléfono:</label>
            <input
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              type="text"
              className="w-full outline-none border-b-[1px] p-2 placeholder:italic"
              placeholder="Ingresa tu Nombre"
            />
          </div>
        </div>
        {/* <div className="flex justify-between gap-x-5">
          <div className="flex-1 flex-col">
            <label htmlFor="solicitud text-[11px]">Tipo de Solicitud:</label>

            <select
              onChange={(e) => setSolicitud(e.target.value)}
              id="solicitud"
              placeholder="Solicitud"
              className="w-full outline-none border-b-[1px] p-2"
            >
              <option value="">Información sobre Algas</option>
              <option value="">Información sobre Algas</option>
              <option value="">Información sobre Algas</option>
              <option value="">Información sobre Algas</option>
            </select>
          </div>
        </div> */}
        <div className="flex justify-between gap-x-5">
          <div className="flex-1 flex-col">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="4"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Necesito información sobre..."
              className="w-full outline-none  p-2 placeholder:italic mt-4"
            />
          </div>
        </div>
        <div className="flex items-center mt-5">
          <input
            type="submit"
            className="px-4 py-3 bg-primary text-white w-full lg:max-w-[250px] cursor-pointer uppp
          font-semibold"
            value="Enviar"
          />
        </div>
      </form>
    </>
  );
};

export default Formulario;
