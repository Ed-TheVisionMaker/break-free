import ShortTermBenefitInput from "../ShortTermBenefitInput/ShortTermBenefitInput";
import LongTermCostInput from "../LongTermCostInput/LongTermCostInput";
import DisplayResult from "../DisplayResult/DisplayResult";
import SubmitDataButton from "../SubmitDataButton/SubmitDataButton";
import { useState, useEffect } from "react";

export default function DataForm() {
  const [shortTermInput, setShortTermInput] = useState("");
  const [longTermInput, setLongTermInput] = useState("");
  const [scoreInput, setScoreInput] = useState({
    shortTermScore: 0,
    longTermScore: 0,
  });

  const [shortTermPercentage, setShortTermPercentage] = useState(0)
  const [longTermPercentage, setLongTermPercentage] = useState(0)

  function handleSubmit(e) {
    e.preventDefault();
    const shortTermPercentage = (scoreInput.shortTermScore /(scoreInput.shortTermScore + scoreInput.longTermScore)) * 100
    const longTermPercentage = (scoreInput.longTermScore / (scoreInput.shortTermScore + scoreInput.longTermScore)) * 100;
    console.log(scoreInput.shortTermScore, scoreInput.longTermScore, "sts lts")
    setShortTermPercentage(shortTermPercentage)
    setLongTermPercentage(longTermPercentage)
  }

  function handleShortTermInput(e) {
    setShortTermInput(e.target.value);
  }

  function handleLongTermInput(e) {
    setLongTermInput(e.target.value);
  }

  function handleScore(e, location) {
    console.log(scoreInput, "score input")
    const stringToNumber = parseInt(e.target.value)
    if (location === "shortTermBenefit")
      setScoreInput({ ...scoreInput, shortTermScore: stringToNumber });

    if (location === "longTermCost")
      setScoreInput({ ...scoreInput, longTermScore: stringToNumber });
  }


  useEffect(() => {
    return () => {
      setLongTermInput("");
      setShortTermInput("");
      setScoreInput({
        shortTermScore: 0,
        longTermScore: 0,
      });
    };
  }, []);

  return (
    <>
      <form>
        <ShortTermBenefitInput
          shortTermInput={shortTermInput}
          handleShortTermInput={handleShortTermInput}
          handleScore={handleScore}
          scoreInput={scoreInput}
        />
        <LongTermCostInput
          longTermInput={longTermInput}
          handleLongTermInput={handleLongTermInput}
          handleScore={handleScore}
          scoreInput={scoreInput}
        />
      </form>
      <SubmitDataButton handleSubmit={handleSubmit} />
      <div className={'flex flex-col items-center w-[150px] h-[300px] border border-white'}>
            <div className={`w-1/4 h-4 border border-pink-400`} ></div>
            <div className={`w-full h-full`}>
            <div></div>
            <div style={{height: `${shortTermPercentage}%`}} className={`w-full flex items-center justify-center border bg-green-400`}>
              <div className={`text-black`}>{shortTermInput}</div>
            </div>
            <div style={{height: `${longTermPercentage}%`}} className={`w-full flex items-center justify-center border bg-red-400 `}>
              <div className={`text-black`}>{longTermInput}</div>
            </div>
            </div>
            <div></div>
        </div>
      {/* <DisplayResult
        shortTermInput={shortTermInput}
        longTermInput={longTermInput}
        scoreInput={scoreInput}
      /> */}
    </>
  );
}
