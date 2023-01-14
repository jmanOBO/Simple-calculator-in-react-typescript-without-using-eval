import useCalc from "../hooks/useCalc";

const ClearBtn = () => {
    const {setCalcStr}=useCalc();

    const handleOnClick=()=>{
        setCalcStr(str=>str.slice(0,-1));
    }

  return (
    <button className="cBtn" onClick={handleOnClick}>C</button>
  )
}

export default ClearBtn