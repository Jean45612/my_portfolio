import React, { useState } from "react";
import Loading from "./components/Loading";
import ReactPageScroller from 'react-page-scroller';
import Header from "./views/Header";
import Portafolio from "./views/Portafolio";
import Nav from "./components/Nav";
import Acerca from "./components/Acerca";
import Contacto from "./components/Contacto";

function App() {
  const [isLoading, setisLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(null);

  const handlePageChange = number => {
    setCurrentPage(number);
  };

  if (isLoading) {
    return <Loading setisLoading={setisLoading} />
  } else {
    return (
      <React.Fragment>
        <ReactPageScroller
          pageOnChange={handlePageChange}
          customPageNumber={currentPage}>
          <Header />
          <Acerca />
          <Portafolio />
          <Contacto />
        </ReactPageScroller>
        <Nav handlePageChange={handlePageChange}></Nav>
      </React.Fragment>
    );
  }
}

export default App;
