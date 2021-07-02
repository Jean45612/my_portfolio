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
        <p>Hola mundo</p>
      </div>
    </div>
  );
};

export default Loading;
