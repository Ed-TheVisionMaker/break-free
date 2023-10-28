import { useState, useEffect } from "react";
import { ClickAwayListener } from "@mui/base";

export default function ScoreInput(props) {
  const [scoreInput, setScoreInput] = useState({
    shortTermBenefit: 0,
    longTermCost: 0,
  });

  const location = props.location;

  function handleScore(e, location) {
    if (location === "shortTermBenefit")
      setScoreInput({ ...scoreInput, shortTermBenefit: e.target.value });

    if (location === "longTermCost")
      setScoreInput({ ...scoreInput, longTermCost: e.target.value });
  }


  useEffect(() => {
    return setScoreInput({
      shortTermBenefit: 0,
      longTermCost: 0,
    });
  }, []);

  return (
      <div>
        <input
          type={"number"}
          min={"0"}
          max={"10"}
          value={
            location === "shortTermBenefit"
              ? scoreInput.shortTermBenefit
              : scoreInput.longTermCost
          }
          onChange={(e) => handleScore(e, location)}
        />
      </div>
  );
}
