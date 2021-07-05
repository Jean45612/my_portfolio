import React from "react";
import "../assets/css/acerca.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import imgHtml from "./../assets/images/habilidades/html.png";
import imgCss from "./../assets/images/habilidades/css.png";
import imgJavascript from "./../assets/images/habilidades/javascript.png";
import imgPhp from "./../assets/images/habilidades/php.png";
import imgLaravel from "./../assets/images/habilidades/laravel.png";
import imgAngular from "./../assets/images/habilidades/angular.png";
import imgVue from "./../assets/images/habilidades/vue.png";
import imgReact from "./../assets/images/habilidades/react.png";
import photo from "./../assets/images/photo.jpeg";

function ToolComponent(props) {
  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={<Tooltip id="button-tooltip">{props.name}</Tooltip>}
    >
      <img src={props.img} alt="" />
    </OverlayTrigger>
  );
}

function Acerca() {
  return (
    <div className="acerca container">
      <div className="acerca-container row">
        <div className="col-md-7">
          <h2 className="text-center">Hola, mi nombre es Jean Pierre Acosta</h2>
          <p className="text-justify">
            Soy egresado de la carrera de Ingeniería de Sistemas en la
            Universidad César Vallejo.
          </p>
          <p className="text-justify">
            Me especializo en el desarrollo web front-end, me gusta mantenerme
            actualizado con respecto a las últimas tendencias tecnológicas en el
            campo del desarrollo web. Trabajo con frameworks tales como Vue.Js,
            Angular, React y Laravel.
          </p>

          <h4 className="text-center">Habilidades tecnológicas</h4>
          <div className="habilidades">
            <ToolComponent name="HTML" img={imgHtml}></ToolComponent>
            <ToolComponent name="CSS" img={imgCss}></ToolComponent>
            <ToolComponent
              name="JavaScript"
              img={imgJavascript}
            ></ToolComponent>
            <ToolComponent name="PHP" img={imgPhp}></ToolComponent>
            <ToolComponent name="Laravel" img={imgLaravel}></ToolComponent>
            <ToolComponent name="Angular" img={imgAngular}></ToolComponent>
            <ToolComponent name="Vue" img={imgVue}></ToolComponent>
            <ToolComponent name="React" img={imgReact}></ToolComponent>
          </div>
        </div>

        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <img src={photo} alt="" className="foto" />
        </div>
      </div>
    </div>
  );
}

export default Acerca;
