import { useState } from "react";
import "./App.css";
import { Carto, Info, Intro } from "./components";
import { MapContext } from "./mapContext";

function App() {
  const [currentProjection, setCurrentProjection] = useState("equalearth");
  return (
    <>
      <MapContext.Provider value={{ currentProjection, setCurrentProjection }}>
        <Intro />
        <div className="content">
          <Carto />
          <Info />
        </div>
      </MapContext.Provider>
    </>
  );
}

export default App;
