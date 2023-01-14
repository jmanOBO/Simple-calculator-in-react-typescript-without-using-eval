import OpBtn from "./OpBtn";

const OpsBtn = () => {
    const ops=["+","-","*","/"];
  return (
    <div className="opsArea">
    {
      ops.map((v)=>{

        return <OpBtn op={v} key={v}/>
    
    })
    }
    </div>
  )
  
}

export default OpsBtn