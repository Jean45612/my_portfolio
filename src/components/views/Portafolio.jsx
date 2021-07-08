import React from "react";
import { useState } from "react";
import "../../assets/css/portafolio.css";
import ModalPortafolio from "../../components/common/ModalPortafolio";
import proyectos from "../../utils/portafolio.json";

import imgEncuestas from "../../assets/images/portafolio/encuestas/encuestas.PNG";
import imgHistoria from "../../assets/images/portafolio/historia_clinica/paciente.PNG";
import imgProducto from "../../assets/images/portafolio/logistico/producto.PNG";
import imgPedido from "../../assets/images/portafolio/pedidos/pedido.PNG";
import imgProyecto from "../../assets/images/portafolio/proyectos/tarea.PNG";
import imgTarjetas from "../../assets/images/portafolio/tarjetas/tar1.PNG";

function Portafolio() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);

  return (
    <div id="portafolio">
      <h3 className="text-center">Portafolio</h3>
      <div className="row mt-4 mx-0">
        {/* {proyectos.map((p) => {
          return (
            <div className="col-lg-4 col-sm-6 proyecto" onClick={handleShow}>
              <img
                src={p.imagen}
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
        })} */}
        <div className="col-lg-4 col-sm-6 proyecto" onClick={handleShow}>
          <img
            src={imgEncuestas}
            alt=""
            loading="lazy"
            data-aos="zoom-in"
            data-aos-duration="500"
          />
          <div className="text-image">
            <h4>Encuestas</h4>
            <h5>Angular / Laravel</h5>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 proyecto" onClick={handleShow}>
          <img
            src={imgHistoria}
            alt=""
            loading="lazy"
            data-aos="zoom-in"
            data-aos-duration="500"
          />
          <div className="text-image">
            <h4>Historia clínica</h4>
            <h5>Laravel</h5>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 proyecto" onClick={handleShow}>
          <img
            src={imgProducto}
            alt=""
            loading="lazy"
            data-aos="zoom-in"
            data-aos-duration="500"
          />
          <div className="text-image">
            <h4>Sistema logístico</h4>
            <h5>Vue / Laravel</h5>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 proyecto" onClick={handleShow}>
          <img
            src={imgTarjetas}
            alt=""
            loading="lazy"
            data-aos="zoom-in"
            data-aos-duration="500"
          />
          <div className="text-image">
            <h4>Tarjetas digitales</h4>
            <h5>Angular / Laravel</h5>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 proyecto" onClick={handleShow}>
          <img
            src={imgProyecto}
            alt=""
            loading="lazy"
            data-aos="zoom-in"
            data-aos-duration="500"
          />
          <div className="text-image">
            <h4>Gestión de proyectos</h4>
            <h5>Vue / Laravel</h5>
          </div>
        </div>

        <div className="col-lg-4 col-sm-6 proyecto" onClick={handleShow}>
          <img
            src={imgPedido}
            alt=""
            loading="lazy"
            data-aos="zoom-in"
            data-aos-duration="500"
          />
          <div className="text-image">
            <h4>Pedidos</h4>
            <h5>Angular / Laravel</h5>
          </div>
        </div>
      </div>
      <ModalPortafolio showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Portafolio;
