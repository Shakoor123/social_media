import { createContext, useEffect, useState } from "react";

export const AppContext = createContext(null)

export default function Context({ children }) {

    const [cuser, setCuser] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("user");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
    
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(cuser))

    }, [cuser])

    return (
        <AppContext.Provider value={{ cuser, setCuser }}>
            {children}
        </AppContext.Provider>
    )
}