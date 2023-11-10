import {createContext, useContext, useState } from "react";

//Create the context
const pointsState = createContext()
//export the context
export function usePointsState(){
    return useContext(pointsState)
}


const setPointsState = createContext()

export function useSetPointState(){
    return useContext(setPointsState)
}


export function PointsContextProvider ({children}) {

    const [points, setPoints] = useState(1)


    return (
        <pointsState.Provider value={points}>
            <setPointsState.Provider value={setPoints}>
                {children}
            </setPointsState.Provider>
        </pointsState.Provider>
    )
}