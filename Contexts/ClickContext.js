import { createContext, useContext, useState } from "react";

//Create a context
const OnClickContext = createContext()
//Create custom hook to access that context
export function useClicks() {
    return useContext(OnClickContext)
}

//Creates another context
const UpdateOnClickContext = createContext()
//Creates another custom hook to access the data in the context
export function useClicksUpdate() {
    return useContext(UpdateOnClickContext)
}

const OnAutoClickContext = createContext()
export function useAutoClicks() {
    return useContext(OnAutoClickContext)
}

const UpdateOnAutoClickContext = createContext()
export function useAutoClicksUpdate(){
    return useContext(UpdateOnAutoClickContext)
}

//Create the provider to access later
export function ClickContextProvider ({children}) {

    //1.0) 
    //These values before the return part can be passed on to the provider for later usage
    const [clickMultiplier, setClickMultiplier] = useState(1)
    const [autoClickMultiplier, setAutoClickMultiplier] = useState(1)



    //The values to be returned from the provider
    return (
        //value passed into the Provider is taken from the variables a 1.0)
        <OnClickContext.Provider value={clickMultiplier}>
            <UpdateOnClickContext.Provider value={setClickMultiplier} >
                <OnAutoClickContext.Provider value={autoClickMultiplier}>
                    <UpdateOnAutoClickContext.Provider value={setAutoClickMultiplier}>
                        {children}
                    </UpdateOnAutoClickContext.Provider>
                </OnAutoClickContext.Provider>
            </UpdateOnClickContext.Provider>
        </OnClickContext.Provider>
    )
}
