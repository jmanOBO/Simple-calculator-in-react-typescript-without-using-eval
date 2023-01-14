import TextInput from "./components/TextInput"
import TypingArea from "./components/TypingArea"
import CalcProvider from "./context/CalcProvider"


const App = () => {
  return (
     <CalcProvider>
          <div className="container">

           <TextInput/>
           <TypingArea/>
         </div>
     </CalcProvider>

  )
}

export default App