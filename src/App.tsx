import "./App.css";
import { Carto, Info, Intro } from "./components";

function App() {
  return (
    <>
      <Intro />
      <div className="content">
        <Carto />
        <Info />
      </div>
    </>
  );
}

export default App;
