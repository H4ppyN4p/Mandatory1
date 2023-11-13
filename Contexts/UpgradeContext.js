import { useState, useContext, createContext } from "react";

const ClickerUpgradeCostState = createContext()
export function clickerCostState(){
    return useContext(ClickerUpgradeCostState)
}

const ClickerSetUpgradeCostState = createContext()
export function clickerSetCostState(){
    return useContext(ClickerSetUpgradeCostState)
}

const AutoClickerUpgradeCostState = createContext()
export function autoClickerCostState(){
    return useContext(AutoClickerUpgradeCostState)
}

const AutoClickerSetUpgradeCostState = createContext()
export function autoClickerSetCostState(){
    return useContext(AutoClickerSetUpgradeCostState)
}



export function UpgradeContextProvider({children}){

    const [clickerCost, setClickerCost] = useState(5)
    const [autoClickerCost, setAutoClickerCost] = useState(30)

    return(
        <ClickerUpgradeCostState.Provider value={clickerCost}>
            <ClickerSetUpgradeCostState.Provider value={setClickerCost}>

                <AutoClickerUpgradeCostState.Provider value={autoClickerCost}>
                    <AutoClickerSetUpgradeCostState.Provider value={setAutoClickerCost}>
                        {children}
                    </AutoClickerSetUpgradeCostState.Provider>
                </AutoClickerUpgradeCostState.Provider>

            </ClickerSetUpgradeCostState.Provider>
        </ClickerUpgradeCostState.Provider>
    )
}