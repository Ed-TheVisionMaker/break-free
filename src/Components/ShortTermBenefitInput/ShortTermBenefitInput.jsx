import { useState, useEffect } from "react";
import ScoreInput from "../ScoreInput/ScoreInput";

export default function ShortTermBenefitInput(props) {
  const { shortTermInput, handleShortTermInput, scoreInput, handleScore } = props;

  return (
    <div>
      <div>
        <p>What is the short term benefit?</p>
        <input
          value={shortTermInput}
          onChange={(e) => handleShortTermInput(e)}
        />
      </div>
      <div>
        <p>Out of 10, how important is this benefit right now?</p>
        <ScoreInput location={"shortTermBenefit"} scoreInput={scoreInput} handleScore={handleScore} />
      </div>
    </div>
  );
}
