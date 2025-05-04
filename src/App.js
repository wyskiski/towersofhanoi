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

  const handleRingClick = (index, slot, event) => {
    event.stopPropagation();

    // if (index === 0) {
    console.log(slot);
    setSelectedRing(slot);
    // }
  };

  const handlePegClick = (pegIndex) => {
    if (updatedRing) {
      const targetPeg = pegState[pegIndex];

      const lastRingIndex = targetPeg.findIndex((slot) => slot !== "");
      const lastRing = lastRingIndex !== -1 ? targetPeg[lastRingIndex] : null;

      if (!lastRing || selectedRing < lastRing) {
        let updatedPegs = pegState.map((peg, index) => {
          return peg.map((slot) => {
            return slot === selectedRing ? "" : slot;
          });
        });

        const targetPeg = updatedPegs[pegIndex];
        const emptyIndex = targetPeg.lastIndexOf("");
        if (emptyIndex !== -1) {
          targetPeg[emptyIndex] = selectedRing;
        }

        setSelectedRing(null);
        setPegState(updatedPegs);
      }
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
                      onClick={(event) =>
                        handleRingClick(index, slot, event)
                      }></div>
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
