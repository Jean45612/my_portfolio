import React from "react";
import { useEffect } from "react";

import "../../assets/css/loading.css";

const Loading = (props) => {
  const duration = 5;
  const styles = { animation: `fadein ${duration}s`};

  useEffect(() => {
    setTimeout(() => {
      props.setisLoading(false);
    }, duration * 1000);
  });

  return (
    <div className="loader">
      <div className="datos" style={styles}>
        <p>Hola mundo</p>
      </div>
    </div>
  );
};

export default Loading;
