export default function SubmitDataButton(props) {
    return (
        <div>
            <button className="p-2 rounded-lg border-[3px] border-[#553800] hover:bg-slate-600" onClick={(e) => props.handleSubmit(e)}>Tap and break free from</button>
        </div>
    )
}