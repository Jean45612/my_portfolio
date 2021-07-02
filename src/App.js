import React, { useState } from "react";
import Loading from "./components/Loading";
import ReactPageScroller from 'react-page-scroller';
import Header from "./views/Header";
import Portafolio from "./views/Portafolio";

function App() {
  const [isLoading, setisLoading] = useState(true);

  if (isLoading) {
    return <Loading setisLoading={setisLoading} />
  } else {
    return (
      <React.Fragment>
        <ReactPageScroller>
          <Header />
          <Portafolio />
        </ReactPageScroller>
      </React.Fragment>
    );
  }
}

export default App;
