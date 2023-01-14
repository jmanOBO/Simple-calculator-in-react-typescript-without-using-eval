import useCalc from "../hooks/useCalc"


const TextInput = () => {
    const {calcStr}=useCalc();
  return (
    <div className="TextInput">
        <textarea value={calcStr} readOnly className="TextArea"/>


    </div>
  )
}

export default TextInput