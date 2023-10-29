export default function SubmitDataButton(props) {
    return (
        <div>
            <button className="border border-white p-2 rounded-lg" onClick={(e) => props.handleSubmit(e)}>Submit</button>
        </div>
    )
}