import React from "react";
import { useState } from "react";
import "../../assets/css/portafolio.css";
import ModalPortafolio from "../../components/common/ModalPortafolio";
import proyectos from "../../utils/portafolio.json";

function Portafolio() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);

  const requestImageFile = require.context(
    "../../assets/images/portafolio",
    true
  );

  return (
    <div id="portafolio">
      <h3 className="text-center">Portafolio</h3>
      <div className="row mt-4 mx-0">
        {proyectos.map((p) => {
          return (
            <div
              className="col-lg-4 col-sm-6 proyecto"
              onClick={handleShow}
              key={p.id}
            >
              <img
                src={requestImageFile(`./${p.imagen}`).default}
                alt=""
                loading="lazy"
                data-aos="zoom-in"
                data-aos-duration="500"
              />
              <div className="text-image">
                <h4>{p.nombre}</h4>
                <h5>{p.descripcion}</h5>
              </div>
            </div>
          );
        })}
      </div>
      <ModalPortafolio showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Portafolio;
