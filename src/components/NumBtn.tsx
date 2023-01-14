import useCalc from "../hooks/useCalc";

interface NumTpe{
    num: number
}
const NumBtn = ({num}:NumTpe) => {
    const {calcStr,setCalcStr}=useCalc();
    const handleOnClick=()=>{
      if(num==0&&calcStr.length<1) return;
      setCalcStr((str)=>str+num);
    }
  return (
    <button className="numBtn" onClick={handleOnClick}>{num}</button>
  )
}

export default NumBtn