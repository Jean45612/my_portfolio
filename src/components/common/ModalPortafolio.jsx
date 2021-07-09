import React from "react";
import { Button, Modal } from "react-bootstrap";
import requestImageFile from "../../utils/requestImageFile";

const ModalPortafolio = (props) => {
  const handleClose = () => props.setShowModal(false);

  return (
    <div>
      <Modal show={props.showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="text-center">
            {props.proyecto.nombre}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.proyecto.descripcion}</p>
          {props.imagenes.map((i, index) => {
            return (
              <img
                src={requestImageFile(`./portafolio/${i}`).default}
                alt=""
                key={index}
                className="img-fluid mb-3"
              />
            );
          })}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalPortafolio;
