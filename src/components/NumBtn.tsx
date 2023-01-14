import useCalc from "../hooks/useCalc";

interface NumTpe{
    num: number
}
const NumBtn = ({num}:NumTpe) => {
    const {setCalcStr}=useCalc();
    const handleOnClick=()=>{
      setCalcStr((str)=>str+num);
    }
  return (
    <button className="numBtn" onClick={handleOnClick}>{num}</button>
  )
}

export default NumBtn