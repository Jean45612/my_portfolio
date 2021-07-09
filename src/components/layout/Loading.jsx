import React from "react";
import "../../assets/css/loading.css";

const Loading = (props) => {
  const styles = { animation: `fadein ${props.duration}s` };

  return (
    <div className="loader">
      <div className="datos" style={styles}>
        <p>Hola mundo</p>
      </div>
    </div>
  );
};

export default Loading;
