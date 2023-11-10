import { Button, Text, View } from "react-native";
import { useState } from "react";


//Context
import { useClicks, useClicksUpdate } from './Contexts/ClickContext';
import { useAutoClicks, useAutoClicksUpdate } from './Contexts/AutoClickContext';
import { usePointsState, useSetPointState } from "./Contexts/PointsContext";

const Upgrades = ({navigation}) => {

    //Imported from context
    const clickMultiplier = useClicks()
    const setClickMultiplier = useClicksUpdate()

    const autoClickMultiplier = useAutoClicks()
    const increaseAutoClickMultiplier = useAutoClicksUpdate()

    const points = usePointsState()
    const setPoints = useSetPointState()

     
    //Only on this page
    const [clickerPrice, setClickerPrice] = useState(4)
    const [autoClickerPrice, setAutoClickerPrice] = useState(30)

    function buyAndUpgradeClicker(){
        if (points > clickerPrice){
            setClickMultiplier(clickMultiplier + 1)//doesn't work, need to change context
            setPoints(points - clickerPrice)
            setClickerPrice(clickerPrice * (clickerPrice / 2))
        } else {
            alert('you dont have enough points ')
        }
    }
    

    return (
        <View>
            <Text>This is the upgrades page</Text>
            <Text></Text>
            <Text>It cost {clickerPrice} to upgrade the click value</Text>
            <Text>Upgrade click value (current value is {clickMultiplier}):</Text>
            <Button 
            title='increase click value'
            onPress={buyAndUpgradeClicker}
            />

            <Text></Text>
            <Text>Upgrade auto-click value (Current autoclick value is {autoClickMultiplier})</Text>
            <Button 
            title='increase autoclick value'
            onPress={increaseAutoClickMultiplier}
            />
        </View>
    )
}

export default Upgrades;