import { createContext, useState } from "react";

const TramosContext = createContext();

const TramosProvider = ({children}) => {

    const [tramos, setTramos] = useState([]);



    return (
        <TramosContext.Provider value={{tramos, setTramos}}>        
            {children}
    
        </TramosContext.Provider>
    );
}


export { TramosProvider, TramosContext}

