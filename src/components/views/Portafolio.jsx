import React from "react";
import { useState } from "react";
import "../../assets/css/portafolio.css";
import ModalPortafolio from "../../components/common/ModalPortafolio";
import proyectos from "../../utils/portafolio.json";
import imgProyectos from "../../utils/imagenPortafolio.json";
import requestImageFile from "../../utils/requestImageFile";

function Portafolio() {
  const [showModal, setShowModal] = useState(false);
  const [proyecto, setProyecto] = useState({ nombre: null });
  const [imagenes, setImagenes] = useState([]);

  const handleShow = (id) => {
    setProyecto(proyectos.find((p) => p.id === id));
    setShowModal(true);
    setImagenes(
      imgProyectos.filter((i) => i.proyecto_id === id).map((i) => i.imagen)
    );
  };

  return (
    <div id="portafolio">
      <h3 className="text-center">Portafolio</h3>
      <div className="row mt-4 mx-0">
        {proyectos.map((p) => {
          return (
            <div
              className="col-lg-4 col-sm-6 proyecto"
              onClick={() => handleShow(p.id)}
              key={p.id}
            >
              <img
                src={requestImageFile(`./portafolio/${p.imagen}`).default}
                alt=""
                loading="lazy"
                data-aos="zoom-in"
                data-aos-duration="500"
              />
              <div className="text-image">
                <h4>{p.nombre}</h4>
                <h5>{p.herramientas}</h5>
              </div>
            </div>
          );
        })}
      </div>
      <ModalPortafolio
        showModal={showModal}
        setShowModal={setShowModal}
        proyecto={proyecto}
        imagenes={imagenes}
      />
    </div>
  );
}

export default Portafolio;
