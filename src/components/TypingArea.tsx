import ClearBtn from "./ClearBtn";
import EqualsBtn from "./EqualsBtn";
import NumBtn from "./NumBtn"
import OpsBtn from "./OpsBtn";


const TypingArea = () => {

    const btns=[];
     
    for(let i=0; i<=9; i++){
        btns.push(i);
    }
  return (
    <>
    <ClearBtn/>
    <OpsBtn/>
    <div className="typingArea">
        {
          btns.map((btnNum)=>{
            return <NumBtn num={btnNum} key={btnNum}/>
          })
          
        }
        <EqualsBtn/>
        
        
   
    </div>
    </>
  )
}

export default TypingArea