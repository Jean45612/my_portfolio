import React from "react";
import Slider from "infinite-react-carousel";
import imgPrueba from "./../assets/images/portafolio/prueba.jpeg";

function Portafolio() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: 40,
    duration: 500,
    overScan: 1,
    rows: 2,
    slidesToShow: 4,
  };
  return (
    <div id="portafolio">
      <Slider {...settings}>
        <div>
          <img src={imgPrueba} alt="" loading="lazy"/>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
        <div>
          <h3>10</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Portafolio;
