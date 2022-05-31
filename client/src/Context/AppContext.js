import { createContext, useState } from "react";

export const AppContext=createContext(null)

export default function Context({children}){
    const [cuser, setCuser] = useState(null)
    return(
        <AppContext.Provider value={{cuser,setCuser}}>
            {children}
        </AppContext.Provider>
    )
}