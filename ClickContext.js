import { createContext, useContext, useState } from "react";

//Create the contexts to use
const OnClickContext = createContext()
const UpdateOnClickContext = createContext()

//Access the first context - the UseState 
export function useClicks() {
    return useContext(OnClickContext)
}

//Access the second context - updating the UseState
export function useClicksUpdate() {
    return useContext(UpdateOnClickContext)
}


//Create the provider to access later
export function ClickContextProvider ({children}) {
    const [onClickMultiplier, setOnClickMultiplier] = useState(1)

    function updateClicks(){
        setOnClickMultiplier(onClickMultiplier + 1)
    }

    //The values to be returned from the provider
    return (
        <OnClickContext.Provider value={onClickMultiplier}>
            <UpdateOnClickContext.Provider value={updateClicks} >
                {children}
            </UpdateOnClickContext.Provider>
        </OnClickContext.Provider>
    )
}
