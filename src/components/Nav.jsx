import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Nav(props) {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="header-nav">
      <Link to="acerca" spy={true} smooth={true} duration={500}>
        Acerca de mí
      </Link>
      <Link to="portafolio" spy={true} smooth={true} duration={500}>
        | Portafolio Web
      </Link>
      <Link to="contactame" spy={true} smooth={true} duration={500}>
        | Contáctame
      </Link>
    </div>
  );
}

export default Nav;
