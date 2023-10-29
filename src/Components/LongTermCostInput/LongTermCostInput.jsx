import ScoreInput from "../ScoreInput/ScoreInput";

export default function LongTermCostInput(props) {
  const {longTermInput, handleLongTermInput, scoreInput, handleScore} = props
  return (
    <div>
      <div>
        <p>What is the long term cost?</p>
        <input value={longTermInput} onChange={(e) => handleLongTermInput(e)} />
      </div>
      <div>
        <p>Out of 10, how important is this cost right now?</p>
        <ScoreInput location={"longTermCost"} scoreInput={scoreInput} handleScore={handleScore} />
      </div>
    </div>
  );
}
