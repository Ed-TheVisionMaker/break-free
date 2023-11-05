import ScoreInput from "../ScoreInput/ScoreInput";

export default function LongTermCostInput(props) {
  const {longTermInput, handleLongTermInput, scoreInput, handleScore} = props
  return (
    <div>
        <div className="flex flex-col items-center justify-center m-3">
        <p className='w-full bg-[#ffdd99] rounded-md'>What is the long term cost?</p>
        <input value={longTermInput} onChange={(e) => handleLongTermInput(e)} />
      </div>
        <div className="flex flex-col text-center items-center justify-center m-3">
        <p className='w-full bg-[#ffdd99] rounded-md'> Out of 10, how important is this<br></br>cost right now?</p>
        <ScoreInput location={"longTermCost"} scoreInput={scoreInput} handleScore={handleScore} />
      </div>
    </div>
  );
}
