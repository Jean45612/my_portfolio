import React, { useState } from "react";
import Loading from "./components/Loading";
import Header from "./views/Header";
import Portafolio from "./views/Portafolio";
import Nav from "./components/Nav";
import Acerca from "./views/Acerca";
import Contacto from "./views/Contacto";

function App() {
  const [isLoading, setisLoading] = useState(true);

  if (isLoading) {
    return <Loading setisLoading={setisLoading} />
  } else {
    return (
      <React.Fragment>
        <Nav></Nav>
        <Header />
        <Acerca />
        <Portafolio />
        <Contacto />
      </React.Fragment>
    );
  }
}

export default App;
