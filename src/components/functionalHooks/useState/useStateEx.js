import { useState } from "react";

const UseStateExample = () => {
  const initialState = 10;   
    const[count,setCount]=useState(initialState)

    //const incrementHandler=()=>{
    //    setCount((count)=>count+1)
    //    setCount((count)=>count+1)
    //    setCount((count)=>count+1)
    //    //setCount(count+1)
    //};
    //const decrementHandler=()=>{
    //  if (count>0) {
    //  setCount((count)=>count-1)
    //  }
    //}
    //const resteHandler=()=>{
    //  setCount(0)
    //}

    const counterHandler=(type,scale)=>{
      switch(type) {
        case "INCREMENT":
          setCount((count) => count + scale)
          break;
          case "DECREMENT":
            if (count>0){
          setCount((count) => count - scale)
            }
          break;
          case "RESET":
          setCount(0)
          break;
          default:
          break;
      }
    }

    return(
        <>
          <h2>{count}</h2>
          <button onClick={()=>counterHandler("INCREMENT",10)}>Increment</button>
          <button onClick={()=>counterHandler("DECREMENT",10)}>decrement</button>
          <button onClick={()=>counterHandler("RESET")}>reset</button>
        </>
    )
}
export default UseStateExample;