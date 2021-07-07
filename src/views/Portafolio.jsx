import React from "react";
import "../assets/css/portafolio.css";

import imgEncuestas from "./../assets/images/portafolio/encuestas/encuestas.PNG";
import imgHistoria from "./../assets/images/portafolio/historia_clinica/paciente.PNG";
import imgProducto from "./../assets/images/portafolio/logistico/producto.PNG";
import imgPedido from "./../assets/images/portafolio/pedidos/pedido.PNG";
import imgProyecto from "./../assets/images/portafolio/proyectos/tarea.PNG";
import imgTarjetas from "./../assets/images/portafolio/tarjetas/tar1.PNG";

function Portafolio() {
  return (
    <div id="portafolio">
      <h3 className="text-center">Portafolio</h3>
      <div className="row mt-4 mx-0">
        <img
          className="col-lg-4 col-sm-6 "
          src={imgEncuestas}
          alt=""
          loading="lazy"
          data-aos="zoom-in"
          data-aos-duration="500"
        />
        <img
          className="col-lg-4 col-sm-6"
          src={imgHistoria}
          alt=""
          loading="lazy"
          data-aos="zoom-in"
          data-aos-duration="500"
        />
        <img
          className="col-lg-4 col-sm-6"
          src={imgProducto}
          alt=""
          loading="lazy"
          data-aos="zoom-in"
          data-aos-duration="500"
        />
        <img
          className="col-lg-4 col-sm-6"
          src={imgTarjetas}
          alt=""
          loading="lazy"
          data-aos="zoom-in"
          data-aos-duration="500"
        />
        <img
          className="col-lg-4 col-sm-6"
          src={imgProyecto}
          alt=""
          loading="lazy"
          data-aos="zoom-in"
          data-aos-duration="500"
        />
        <img
          className="col-lg-4 col-sm-6"
          src={imgPedido}
          alt=""
          loading="lazy"
          data-aos="zoom-in"
          data-aos-duration="500"
        />
      </div>
    </div>
  );
}

export default Portafolio;
