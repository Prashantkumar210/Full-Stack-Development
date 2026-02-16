import { useContext } from 'react'
import './App.css'
import { data } from './context/UserContext'

function App() {
  // To recieve the gloval data by using data-context

  let name = useContext(data)
  // to recieve the data and insert in the new name variable
  console.log(name)
  return (
    <>
      Hii This is Prashant Kumar
    </>
  )
}

export default App
