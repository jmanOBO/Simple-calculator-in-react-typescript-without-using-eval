import useCalc from "../hooks/useCalc";

const EqualsBtn = () => {
    const {setCalcStr}=useCalc();
    const equalsFunc=(str: string)=>{
        //Algorithm to solve the math problem instead of of using eval() because eval isnt secure and you shouldnt use it!
        const reg=/\+|-|\*|\//;
        //I used a reg expression with the split function to easily get all the digits!
        const nums: number[]=str.split(reg).map((num)=>parseInt(num));
        const ops: string[]=[];
        for(let i=0; i<str.length; i++){
            if(!parseInt(str[i])&&str[i]!=="0") ops.push(str[i]);
        }

      let solution=nums[0];
      for(let j=0; j<ops.length; j++){
       if(ops[j]==="+") solution+=nums[j+1];
       if(ops[j]==="*") solution*=nums[j+1];
       if(ops[j]==="-") solution+=nums[j+1];
       if(ops[j]==="/") solution/=nums[j+1];
      }
      return ""+solution;
    }
  return (
    <button className="equalsBtn" onClick={()=>setCalcStr(str=>equalsFunc(str))}>=</button>
  )
}

export default EqualsBtn