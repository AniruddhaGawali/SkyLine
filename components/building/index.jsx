import React from "react";

// import Hooks
import useWindowDimensions from "../../hook/useWindowDimensions";

//import styles
import "./style.css";

const Buliding1 = (props) => {
  const { width } = useWindowDimensions();

  return (
    <div
      className="building"
      style={{
        backgroundColor: props.dayPercent > 60 ? "#E5E4E2" : props.color,
        width: width / 9.8,
      }}
    >
      {new Array(props.height).fill(0).map((_, index) => (
        <span
          className={props.dayPercent > 60 ? " glass dark" : "glass"}
          key={index}
        ></span>
      ))}
    </div>
  );
};

export default Buliding1;
