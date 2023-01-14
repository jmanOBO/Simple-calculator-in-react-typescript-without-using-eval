import useCalc from "../hooks/useCalc"

interface OpProps{
 op: string
}
const OpBtn = ({op}: OpProps) => {
    const ops=["+","-","*","/"];
    const {calcStr,setCalcStr}=useCalc();

    const handleOnClick=()=>{
        if(ops.indexOf(calcStr[calcStr.length-1])!==-1 || calcStr.length<=0) return;
        setCalcStr(str=>str+op);
    }
  return (
    <button className="opBtn" onClick={handleOnClick}>{op}</button>
  )
}

export default OpBtn