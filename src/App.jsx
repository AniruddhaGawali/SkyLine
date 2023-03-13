import React from "react";
import { motion } from "framer-motion";

// import Hooks
import useWindowDimensions from "../hook/useWindowDimensions";

// import styles
import "./App.css";
import Buliding1 from "../components/building";
import Cloud from "../components/cloud";

function App() {
  const [dayPercent, setDayPercent] = React.useState(0);
  const constraintsRef = React.useRef(null);

  const { width } = useWindowDimensions();

  React.useEffect(() => {
    if (dayPercent < 20) {
      document.body.style.backgroundColor = "#FFE57720";
      document.getElementsByClassName("planet")[0].style.backgroundColor =
        "#FFE577";
      document.getElementsByClassName("planet")[0].style.boxShadow =
        "0 0 50px #FFE577";
    }

    if (dayPercent > 20 && dayPercent < 50) {
      document.body.style.backgroundColor = "#FEC05120";
      document.getElementsByClassName("planet")[0].style.backgroundColor =
        "#FEC051";
      document.getElementsByClassName("planet")[0].style.boxShadow =
        "0 0 100px #FEC051";
    }

    if (dayPercent > 50 && dayPercent < 55) {
      document.body.style.backgroundColor = "#FD605115";
      document.getElementsByClassName("planet")[0].style.backgroundColor =
        "#FF8866";
      document.getElementsByClassName("planet")[0].style.boxShadow =
        "0 0 70px #FF8866";
    }
    if (dayPercent > 55 && dayPercent < 60) {
      document.body.style.backgroundColor = "#FD605115";
      document.getElementsByClassName("planet")[0].style.backgroundColor =
        "#FD6051";

      document.getElementsByClassName("planet")[0].style.boxShadow =
        "0 0 50px #FD6051";
    }

    if (dayPercent > 60) {
      document.body.style.backgroundColor = "#1e1e1e";
      document.getElementsByClassName("planet")[0].style.backgroundColor =
        "#eee";

      document.getElementsByClassName("planet")[0].style.boxShadow =
        " 0 0 100px #fff";
    }
  }, [dayPercent]);

  return (
    <main>
      <motion.div className="path" ref={constraintsRef}>
        <motion.div
          className="planet"
          drag="x"
          dragConstraints={constraintsRef}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
          onDrag={(event, info) => {
            setDayPercent((info.point.x / width) * 100);
          }}
          whileDrag={{ cursor: "grabbing" }}
        ></motion.div>
      </motion.div>

      <Cloud />

      <div className="city">
        <Buliding1 dayPercent={dayPercent} color="#d87093" height={12} />
        <Buliding1 dayPercent={dayPercent} color="#1dace6" height={21} />
        <Buliding1 dayPercent={dayPercent} color="#ffd938" height={18} />
        <Buliding1 dayPercent={dayPercent} color="#35a8a1" height={9} />
        <Buliding1 dayPercent={dayPercent} color="#d87093" height={6} />
        <Buliding1 dayPercent={dayPercent} color="#ee5f35" height={15} />
        <Buliding1 dayPercent={dayPercent} color="#1dace6" height={18} />
        <Buliding1 dayPercent={dayPercent} color="#ffd938" height={12} />
        <Buliding1 dayPercent={dayPercent} color="#35a8a1" height={15} />
      </div>
    </main>
  );
}

export default App;
