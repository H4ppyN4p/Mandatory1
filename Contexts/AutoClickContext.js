import { createContext, useContext, useState } from "react";

//Create context
const onAutoClickContext = createContext()
//Access context
export function useAutoClicks(){
    return useContext(onAutoClickContext)
}

//Create context
const updateOnAutoClickContext = createContext()
//Access context
export function useAutoClicksUpdate(){
    return useContext(updateOnAutoClickContext)
}

export function AutoClickContextProvider ({children}) {

    const [autoClickMultiplier, setAutoClickMultiplier] = useState(1)

    function updateAutoClicks(){
        setAutoClickMultiplier(autoClickMultiplier + 1)
    }

    return (
        <onAutoClickContext.Provider value={autoClickMultiplier}>
            <updateOnAutoClickContext.Provider value={updateAutoClicks}>
                {children}
            </updateOnAutoClickContext.Provider>
        </onAutoClickContext.Provider>
    )
}