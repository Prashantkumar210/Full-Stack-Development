import React, { useState } from 'react'
import axios from "axios"
import './App.css'

function App() {

  let [username, setUsername] = useState(null)
  let [age, setAge] = useState(null)
  let [city, setCity] = useState(null)

  async function getRes(){
    // with help of Axios
    axios.post("http://localhost:8000/",{
      username,
      age,
      city
    })
    .then((e)=>{
      console.log(e.data)
    })
     .catch((e)=>{
      console.log(e)
    })

  }

  return (
    <>
      <input type='text' placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}></input>
      <input type='text' placeholder='age' value={age} onChange={(e)=>setAge(e.target.value)}></input>
      <input type='text' placeholder='city' value={city} onChange={(e)=>setCity(e.target.value)}></input>

      <button onClick={()=>getRes()}>send</button>
    </>
  )
}

export default App
