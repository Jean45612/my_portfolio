import React, { useState } from "react";
import Loading from "./components/layout/Loading";
import Header from "./components/views/Header";
import Portafolio from "./components/views/Portafolio";
import Nav from "./components/layout/Nav";
import Acerca from "./components/views/Acerca";
import Contacto from "./components/views/Contacto";
import { useEffect } from "react";
import Aos from "aos"; //LIBRERIA PARA ANIMACIONES EN EL SCROLL//

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const durationLoading = 5;

  useEffect(() => {
    Aos.init({ duration: 1000 }); //INICIALIZO LA ANIMACION//
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, durationLoading * 1000);
  });

  if (isLoading) {
    return <Loading duration={durationLoading} />
  } else {
    return (
      <React.Fragment>
        <Nav />
        <Header />
        <Acerca />
        <Portafolio />
        <Contacto />
      </React.Fragment>
    );
  }
}

export default App;
