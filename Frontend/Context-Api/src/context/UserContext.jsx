import React from "react";
import { createContext } from "react";

// To make the Global variable
export  const data = createContext()

function UserContext({children}){
    let username = "Prashant Kumar";
    return(
        <>
           <div>
            <data.Provider value = {username}>
                {children}
            </data.Provider>
           </div>
        </>
    )
}

export default UserContext