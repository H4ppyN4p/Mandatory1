import { Button, Text, View } from "react-native";
import { useState } from "react";


//Context
import { useClicks, useAutoClicks, useClicksUpdate, useAutoClicksUpdate } from './Contexts/ClickContext';
import { usePointsState, useSetPointState } from "./Contexts/PointsContext";
import { clickerCostState, clickerSetCostState, autoClickerCostState, autoClickerSetCostState } from "./Contexts/UpgradeContext";

const Upgrades = ({navigation}) => {

    //Imported from context
    const clickMultiplier = useClicks()
    const setClickMultiplier = useClicksUpdate()

    const autoClickMultiplier = useAutoClicks()
    const setAutoClickMultiplier = useAutoClicksUpdate()

    const points = usePointsState()
    const setPoints = useSetPointState()

   //clicker costs from contexts
    const clickerPrice = clickerCostState()
    const setClickerPrice = clickerSetCostState()

    const autoClickerPrice = autoClickerCostState()
    const setAutoClickerPrice = autoClickerSetCostState()


    function buyAndUpgradeClicker(){
        if (points > clickerPrice){
            setClickMultiplier(clickMultiplier + 1)
            setPoints(points - clickerPrice)
            setClickerPrice(clickerPrice * 2)
        } else {
            alert('you dont have enough points ')
        }
    }
    
    function buyAndUpgradeAutoClicker(){
        if (points > autoClickerPrice){
            setAutoClickMultiplier(autoClickMultiplier + 1)
            setPoints(points - autoClickerPrice)
            setAutoClickerPrice(autoClickerPrice * 2)
        } else {
            alert('you dont have enough points ')
        }
    }

    return (
        <View>
            <Text>This is the upgrades page</Text>
            <Text></Text>
            <Text>You have {points} points</Text>
            <Text></Text>
            <Text>It cost {clickerPrice} to upgrade the click value</Text>
            <Text>Upgrade click value (current value is {clickMultiplier}):</Text>
            <Button 
            title='increase click value'
            onPress={buyAndUpgradeClicker}
            />

            <Text></Text>
            <Text>It cost {autoClickerPrice} to upgrade the click value</Text>
            <Text>Upgrade auto-click value (Current autoclick value is {autoClickMultiplier})</Text>
            <Button 
            title='increase autoclick value'
            onPress={buyAndUpgradeAutoClicker}
            />
        </View>
    )
}

export default Upgrades;