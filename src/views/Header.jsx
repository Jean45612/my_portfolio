import React from "react";
import video from "./../assets/videos/fondo.mov";
import "./../assets/css/header.css";
import photo from "./../assets/images/photo.jpeg";

function Header() {
  return (
    <header className="v-header">
      <div className="video-container">
        <video autoPlay muted loop src={video}></video>
      </div>
      <div className="header-overlay"></div>
      <div className="header-content">
        <div className="header-nav">
          <label>Acerca de mí</label>
          <label>Portafolio Web</label>
          <label>Contáctame</label>
        </div>
        <div className="photo">
          <img src={photo} alt="" />
          <p>Jean Pierre Acosta</p>
          <p>Desarrollador Front-end</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
