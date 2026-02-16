import { useEffect, useState } from 'react'
import './App.css'

// UseState Function 

// function App() {

//   let [count, setCount] = useState(0)
//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={()=>{
//         setCount(++count)
//       }} >Increment</button>
//     </>
//   )
// }


// UseEffect Function
function App(){
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);

  useEffect(()=>{
    console.log("Count2 is Render");
  }, [count1])

  return(
    <>
    <h1>{count1}</h1>
    <h2>{count2}</h2>
    <button onClick={()=>setCount1(++count1)}>count1</button>
    <button onClick={()=>setCount2(++count2)} >count2</button>
    </>
  )
}

export default App
