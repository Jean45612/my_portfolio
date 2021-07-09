import React from "react";
import { useState } from "react";
import useSimpleReactValidator from "../../hooks/useSimpleReactValidator";
import swal from "../../utils/swal";

function Contacto() {
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
      console.log("submitear", form);
      swal.alerta("Bienvenido", "success");
    } else {
      console.log("error");
      validator.showMessages();
    }
  };

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-info" id="contactame">
      <h3 className="text-center py-4">Contacto</h3>
      <form
        className="container bg-info"
        data-aos="fade-in"
        onSubmit={handleSubmit}
      >
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
    </div>
  );
}

export default Contacto;
