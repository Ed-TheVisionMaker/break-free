export default function SubmitDataButton(props) {
    return (
        <div>
            <button onClick={(e) => props.handleSubmit(e)}>Submit</button>
        </div>
    )
}