import { useState, useEffect } from "react";
import ScoreInput from "../ScoreInput/ScoreInput";

export default function LongTermCostInput() {
  const [LongTermCostInput, setLongTermCostInput] = useState("");

  function handleChange(e) {
    setLongTermCostInput(e.target.value);
  }

  useEffect(() => {
    return setLongTermCostInput("");
  }, []);

  return (
    <div>
      <div>
        <p>What is the long term cost?</p>
        <input value={LongTermCostInput} onChange={(e) => handleChange(e, location)} />
      </div>
      <div>
        <p>Out of 10, how important is this cost right now?</p>
        <ScoreInput location={"longTermCost"} />
      </div>
    </div>
  );
}
