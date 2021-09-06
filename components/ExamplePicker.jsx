import examplePrograms from "../lib/examplePrograms"

const ExamplePicker = ({setEditorContent}) => {

    const changeHandler = (e) => {
        const program = examplePrograms[e.target.value]
        if (program) {
            setEditorContent(program)
        }
    }

    return <span>Examples: <select className="text-black bg-white py-px rounded-sm border-b-2 border-purple-500" onChange={changeHandler}>
        {Object.keys(examplePrograms).map((key) => <option value={key}>{key}</option>)}
    </select></span>
}

export default ExamplePicker