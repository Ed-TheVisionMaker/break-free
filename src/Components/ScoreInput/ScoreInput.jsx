import { useState, useEffect } from "react";

export default function ScoreInput(props) {
  const {location, handleScore, scoreInput} = props;
  const { shortTermBenefit, longTermCost } = scoreInput;

  return (
    <div>
      <input
        className='w-1/4 text-center'
        type="number"
        min="0"
        max="10"
        value={
          location === "shortTermBenefit" ? shortTermBenefit : longTermCost
        }
        onChange={(e) => handleScore(e, location)}
      />
    </div>
  );
}
