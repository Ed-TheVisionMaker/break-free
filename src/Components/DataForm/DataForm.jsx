import ShortTermBenefitInput from "../ShortTermBenefitInput/ShortTermBenefitInput";
import LongTermCostInput from "../LongTermCostInput/LongTermCostInput";
import DisplayResult from "../DisplayResult/DisplayResult";
import SubmitDataButton from "../SubmitDataButton/SubmitDataButton";
import { useState, useEffect } from "react";

export default function DataForm() {
  const [habitInput, setHabitInput] = useState("");
  const [shortTermInput, setShortTermInput] = useState("");
  const [longTermInput, setLongTermInput] = useState("");
  const [scoreInput, setScoreInput] = useState({
    shortTermScore: 0,
    longTermScore: 0,
  });
  const [showBattery, setShowBattery] = useState(false);
  const [shortTermPercentage, setShortTermPercentage] = useState(0);
  const [longTermPercentage, setLongTermPercentage] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const shortTermPercentage =
      (scoreInput.shortTermScore /
        (scoreInput.shortTermScore + scoreInput.longTermScore)) *
      100;
    const longTermPercentage =
      (scoreInput.longTermScore /
        (scoreInput.shortTermScore + scoreInput.longTermScore)) *
      100;
    setShortTermPercentage(shortTermPercentage);
    setLongTermPercentage(longTermPercentage);
    setShowBattery(true);
  }

  function handleHabitInput(e) {
    setHabitInput(e.target.value);
  }

  function handleShortTermInput(e) {
    setShortTermInput(e.target.value);
  }

  function handleLongTermInput(e) {
    setLongTermInput(e.target.value);
  }

  function handleScore(e, location) {
    console.log(scoreInput, "score input");
    const stringToNumber = parseInt(e.target.value);
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
      setHabitInput("");
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center px-6 py-12">
      <h2 className="text-3xl w-full border-b pb-4 mb-4">BREAK FREE</h2>
      <form className='w-full text-lg'>
        <div className="flex flex-col items-center justify-center m-3">
          <p className='w-full bg-[#ffdd99] rounded-md'>The habit I am breaking free from</p>
          <input onChange={handleHabitInput} value={habitInput} />
        </div>
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
      {showBattery && (
        <>
          <div className="m-3 bg-[#ffdd99] text-black text-3xl p-3 rounded-lg">
            {habitInput}
          </div>
          <div className={"flex items-center w-[300px] h-[150px] m-3"}>
            <div className={`flex w-full h-full`}>
              <div
                style={{ width: `${shortTermPercentage}%` }}
                className={`h-full flex items-center justify-center border bg-green-400`}
              >
                <div className={`text-black`}>{shortTermInput}</div>
              </div>
              <div
                style={{ width: `${longTermPercentage}%` }}
                className={`h-full flex items-center justify-center border bg-red-400 `}
              >
                <div className={`text-black`}>{longTermInput}</div>
              </div>
            </div>
            <div className={`w-2 h-1/4 border border-white`}></div>
          </div>
        </>
      )}
    </div>
  );
}
