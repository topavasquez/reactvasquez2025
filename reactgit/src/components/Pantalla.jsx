import { useRef, useState } from "react";
import Posit from "./Posit";

export default function Pantalla() {
  const [listado, setListado] = useState([
    { id: 1, titulo: "Fortnite", descripcion: "Jugar fortnite de 1 a 9" },
    { id: 2, titulo: "Estudiar", descripcion: "Estudiar un rato nomas" },
    { id: 3, titulo: "Partido", descripcion: "Ver el partido de futbol" },
    { id: 4, titulo: "Tarea", descripcion: "Hacer la tarea de react" },
  ]);

  const inputTitulo = useRef();
  const inputDescripcion = useRef();

  const agregarPostit = (e) => {
    e.preventDefault();
    const titulo = inputTitulo.current.value;
    const descripcion = inputDescripcion.current.value;

    setListado((prevListado) => {
      const nuevoPostit = {
        titulo: titulo,
        descripcion: descripcion,
      };
      return [...prevListado, nuevoPostit];
    });

    inputTitulo.current.value = "";
    inputDescripcion.current.value = "";
  };

  const elimnarPostit = (id) => {
    setListado((prevListado) =>
      prevListado.filter((postit) => postit.id !== id)
    );
  };

  return (
    <div className="m-4">
      <h1>Post it simulator!</h1>
      <form onSubmit={agregarPostit} className="">
        <div className="d-flex flex-inline gap-2 ">
          <input
            ref={inputTitulo}
            type="text"
            className="form-control"
            placeholder="Título"
          />
          <input
            ref={inputDescripcion}
            type="text"
            className="form-control"
            placeholder="Descripción"
          />
          <button type="submit" className="btn btn-dark">
            Agregar
          </button>
        </div>
      </form>
      <div className="row">
        <ul className="mt-5">
          {listado.map((postitActual) => (
            <Posit
              postit={postitActual}
              key={postitActual.id}
              eliminarPostit={elimnarPostit}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
