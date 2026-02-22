import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";


function App(){
    return(
        <Routes>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}

export default App