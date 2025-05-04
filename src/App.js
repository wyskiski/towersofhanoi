import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const initialPegState = [
    ["sml", "md", "lg"],
    ["", "", ""],
    ["", "", ""],
  ];
  const [selectedRing, setSelectedRing] = useState(null);
  const [pegs, setPegs] = useState(initialPegState);

  return (
    <div className="App">
      {pegs.map((peg, index) => {
        return (
          <div className="peg" key={`peg${index}`}>
            {peg.map((slot, index) => {
              return (
                <div className="slot" key={`slot${index}`}>
                  {slot !== "" && <div className={`ring ${slot}`}></div>}
                </div>
              );
            })}
            <div className="platform"></div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
