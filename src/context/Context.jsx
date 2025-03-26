import React, { createContext, useState } from 'react'

export let shanta = createContext(0) 

export default function Context({children}) {
    
    
    function GetDataInp(e) {
        setDataInp(e.target.value);
    }
    const [DataInp, setDataInp] = useState("");
    let show = DataInp ? "search" : "discover";

        return <shanta.Provider value={{DataInp,setDataInp,show,GetDataInp}}>


{children}

  </shanta.Provider>
}
