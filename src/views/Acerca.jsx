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
import imgCV from "./../assets/images/informacion/cv.png";
import imgLinkedin from "./../assets/images/informacion/linkedin.png";
import imgGithub from "./../assets/images/informacion/github.png";
import imgCorreo from "./../assets/images/informacion/correo.png";

function ToolComponent(props) {
  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={<Tooltip id="button-tooltip">{props.name}</Tooltip>}
    >
      {props.link ? (
        <a href={props.link} target="_blank" rel="noreferrer">
          <img src={props.img} alt="" loading="lazy" />
        </a>
      ) : (
        <img src={props.img} alt="" loading="lazy" />
      )}
    </OverlayTrigger>
  );
}

function Acerca() {
  return (
    <div className="acerca container" id="acerca">
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
          <br />
          <div className="informacion">
            <h5>Más informacion</h5>
            <ToolComponent
              name="CV"
              img={imgCV}
              link="https://drive.google.com/file/d/1jK9poohSrQMPdu4TZCqoZPckOe-QWSaE/view"
            ></ToolComponent>
            <ToolComponent
              name="LinkedIn"
              img={imgLinkedin}
              link="https://www.linkedin.com/in/jp-acosta"
            ></ToolComponent>
            <ToolComponent
              name="Github"
              img={imgGithub}
              link="https://github.com/Jean45612"
            ></ToolComponent>
            <ToolComponent
              name="Contacto"
              img={imgCorreo}
              link="mailto:jpacostatomaylla@gmail.com"
            ></ToolComponent>
          </div>
        </div>

        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <img src={photo} alt="" className="foto" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

export default Acerca;
