import React,{ createContext, useState } from "react";
import { ChildrenProps } from "../interfaces/ChildrenProps";

interface ContextType{
  calcStr: string,
  setCalcStr:  React.Dispatch<React.SetStateAction<string>>,
}

export const CalcContext=createContext({} as ContextType);


const CalcProvider = ({children}: ChildrenProps) => {
  const [calcStr, setCalcStr]=useState<string>("");
   return (
    <CalcContext.Provider value={{calcStr,setCalcStr}}>
      {children}
    </CalcContext.Provider>
  )
}

export default CalcProvider