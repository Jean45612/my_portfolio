import React from "react";

function Nav(props) {
  const acerca = () => {
    props.handlePageChange(1);
  };

  const portafolio = () => {
    props.handlePageChange(2);
  };

  const contactame = () => {
    props.handlePageChange(3);
  };

  return (
    <div className="header-nav">
      <label onClick={acerca}>Acerca de mí</label>
      <label onClick={portafolio}>| Portafolio Web</label>
      <label onClick={contactame}>| Contáctame</label>
    </div>
  );
}

export default Nav;
