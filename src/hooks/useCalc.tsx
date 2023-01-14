import { useContext } from "react"
import { CalcContext } from "../context/CalcProvider"


const useCalc = () => {

  return useContext(CalcContext);
  
}

export default useCalc