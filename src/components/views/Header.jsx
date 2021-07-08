import React from "react";
import video from "../../assets/videos/fondo.mov";
import "../../assets/css/header.css";
import photo from "../../assets/images/photo.jpeg";

function Header() {
  return (
    <header className="v-header">
      <div className="video-container">
        <video autoPlay muted loop src={video}></video>
      </div>
      <div className="header-overlay"></div>
      <div className="header-content">
        <img src={photo} alt="" loading="lazy" />
        <p>Jean Pierre Acosta</p>
        <p>Desarrollador Front-end</p>
      </div>
    </header>
  );
}

export default Header;
