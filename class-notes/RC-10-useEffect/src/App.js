import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import LifeCycleMethods from "./components/LifeCycleMethods";
import Clock from "./components/Clock";
import UseEffectAxiosFetch from "./components/UseEffectAxiosFetch";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="contaier text-center mt-4">
      {/* <button className="btn btn-danger" onClick={() => setShow(!show)}>
        SHOW
      </button> */}

      {/* {show && <LifeCycleMethods />} */}
      {/* {show && <Clock />} */}
      <UseEffectAxiosFetch />
    </div>
  );
};

export default App;
