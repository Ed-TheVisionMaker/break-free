export default function DisplayResult(props) {
    const {shortTermInput, longTermInput, scoreInput} = props;
    const {shortTermCost, longTermCost} = scoreInput;

    return (
        <div className={'flex flex-col items-center w-[150px] h-[300px] border border-white'}>
            <div className={`w-full h-full`}>
            <div className={`h-${(shortTermCost /(shortTermCost + longTermCost))} w-full border border-green-400`}></div>
            <div className={`w-${(longTermCost /(shortTermCost + longTermCost))}`}></div>
            </div>
            <div></div>
        </div>
    )
}