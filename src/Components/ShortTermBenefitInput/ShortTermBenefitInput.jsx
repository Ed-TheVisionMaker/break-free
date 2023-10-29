import { useState, useEffect } from "react";
import ScoreInput from "../ScoreInput/ScoreInput";

export default function ShortTermBenefitInput(props) {
  const { shortTermInput, handleShortTermInput, scoreInput, handleScore } = props;

  return (
    <div>
        <div className="flex flex-col items-center justify-center m-3">
        <p>What is the short term benefit?</p>
        <input
          value={shortTermInput}
          onChange={(e) => handleShortTermInput(e)}
        />
      </div>
        <div className="flex flex-col text-center items-center justify-center m-3">
        <p>Out of 10, how important is this<br></br>benefit right now?</p>
        <ScoreInput location={"shortTermBenefit"} scoreInput={scoreInput} handleScore={handleScore} />
      </div>
    </div>
  );
}
