import { useState, useEffect } from "react";
import ScoreInput from "../ScoreInput/ScoreInput";

export default function ShortTermBenefitInput() {
  const [shortTermInput, setShortTermInput] = useState("");
  const [shortTermScore, setShortTermScore] = useState(0);

  function handleChange(e) {
    setShortTermInput(e.target.value);
  }

  useEffect(() => {
    console.log("useEffect");
    return setShortTermInput("");
  }, []);

  return (
    <div>
      <div>
        <p>What is the short term benefit?</p>
        <input value={shortTermInput} onChange={(e) => handleChange(e)} />
      </div>
      <div>
        <p>Out of 10, how important is this benefit right now?</p>
        <ScoreInput location={"shortTermBenefit"} />
      </div>
    </div>
  );
}
