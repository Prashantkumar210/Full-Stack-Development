import React from "react";
import { createContext } from "react";

export const hindikahani = createContext() 
function Story({children}){

    let kahani = {
        name:"Magarmach ke aanshu",
        storyline:"bjcbjen s cjbnwsj  cs jbjws d sjbddw s d"
    }
    return(
        <>
        <hindikahani.Provider value={kahani}>
            {children}
        </hindikahani.Provider>
        </>
    )
}

export default Story