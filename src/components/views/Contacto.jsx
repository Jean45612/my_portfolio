import React from "react";
import { useState } from "react";
import useSimpleReactValidator from "../../hooks/useSimpleReactValidator";
import swal from "../../utils/swal";
import emailjs from "emailjs-com";
import mailConfig from "../../config/mail.json";

function CorreoEnviado(props) {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [validator] = useSimpleReactValidator({
    autoForceUpdate: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validator.allValid()) {
      emailjs
        .sendForm(
          mailConfig.serviceId,
          mailConfig.templatePortafolioId,
          e.target,
          mailConfig.userId
        )
        .then(
          (result) => {
            swal.alerta("Su correo fue enviado correctamente", "success");
            limpiar();
          },
          (error) => {
            console.log(error.text);
            limpiar();
          }
        );
    } else {
      validator.showMessages();
    }
  };

  const limpiar = () => {
    setForm({
      nombre: "",
      email: "",
      mensaje: "",
    });
    props.setIsSent(true);
  };

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-sm-6">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              onChange={handleInputChange}
              value={form.nombre}
              onBlur={() => validator.showMessageFor("nombre")}
            />
            {validator.message("nombre", form.nombre, "required")}
          </div>
          <div className="form-group col-sm-6">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleInputChange}
              value={form.email}
              onBlur={() => validator.showMessageFor("email")}
            />
            {validator.message("email", form.email, "required|email")}
          </div>
        </div>

        <div className="form-group">
          <label>Mensaje</label>
          <textarea
            className="form-control"
            rows="3"
            name="mensaje"
            onChange={handleInputChange}
            value={form.mensaje}
            onBlur={() => validator.showMessageFor("mensaje")}
          ></textarea>
          {validator.message("mensaje", form.mensaje, "required")}
        </div>
        <button type="submit" className="btn btn-dark px-4">
          Enviar
        </button>
      </form>
    </React.Fragment>
  );
}

function CorreoNoEnviado() {
  return (
    <React.Fragment>
      <div className="alert alert-light" role="alert">
        <h5 className="alert-heading">Saludos</h5>
        <p>Pronto me pondre en contacto con usted.</p>
      </div>
    </React.Fragment>
  );
}

function Contacto() {
  const [isSent, setIsSent] = useState(false);

  return (
    <div id="contactame">
      <div className="bg-info">
        <h3 className="text-center py-4">Contacto</h3>
        <div className="container pb-4" data-aos="fade-in">
          {!isSent ? (
            <CorreoEnviado setIsSent={setIsSent} />
          ) : (
            <CorreoNoEnviado />
          )}
        </div>
      </div>

      <div className="derechos">
        <p>Desarrollado y diseñado por Jean Pierre Acosta Tomaylla</p>
        <span> ©2021. Todos los derechos reservados.</span>
      </div>
    </div>
  );
}

export default Contacto;
