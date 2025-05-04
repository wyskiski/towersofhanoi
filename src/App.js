import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const initialPegState = [
    ["r1", "r2", "r3"],
    ["", "", ""],
    ["", "", ""],
  ];
  const [selectedRing, setSelectedRing] = useState(null);
  const [pegState, setPegState] = useState(initialPegState);
  const [updatedRing, setUpdatedRing] = useState(false);

  const handleRingClick = (slot, event) => {
    event.stopPropagation();
    console.log(slot);
    setSelectedRing(slot);
  };

  const handlePegClick = (index) => {
    if (updatedRing) {
      console.log("IN");
      let updatedPegs = [...pegState];

      const newPegs = updatedPegs.map((peg) => {
        console.log(peg);
        return peg.map((slot) => {
          return slot === selectedRing ? "" : slot;
        });
      });
      console.log("OUT");
      console.log(newPegs);
    }
  };

  useEffect(() => {
    if (selectedRing) {
      console.log("HERE " + selectedRing);
      setUpdatedRing(true);
    }
  }, [selectedRing]);

  return (
    <div className="App">
      {pegState.map((peg, index) => {
        return (
          <div
            className="peg"
            key={`peg${index}`}
            onClick={() => handlePegClick(index)}>
            {peg.map((slot, index) => {
              return (
                <div className="slot" key={`slot${index}`}>
                  {slot !== "" && (
                    <div
                      className={`ring ${slot}`}
                      onClick={(event) => handleRingClick(slot, event)}></div>
                  )}
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
