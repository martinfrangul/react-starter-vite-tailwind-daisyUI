import { createContext, useState } from "react";

const TramosContext = createContext();

const TramosProvider = ({children}) => {

    const [tramos, setTramos] = useState([]);
    const [longEquivalente, setLongEquivalente] = useState(null);



    return (
        <TramosContext.Provider value={{tramos, setTramos, longEquivalente, setLongEquivalente}}>        
            {children}
    
        </TramosContext.Provider>
    );
}


export { TramosProvider, TramosContext}

