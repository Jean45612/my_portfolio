import React from "react";
import { useEffect } from "react";

import "../assets/css/loading.css";

const Loading = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.setisLoading(false);
    }, 5000);
  });

  return (
    <div className="loader">
      <div className="datos">
        <p>Jean Pierre Acosta Tomaylla</p>
        <p>Desarrollador Front-End</p>
      </div>
    </div>
  );
};

export default Loading;
