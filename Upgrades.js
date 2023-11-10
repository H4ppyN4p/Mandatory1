import { Button, Text, View } from "react-native";


//Context
import { useClicks, useClicksUpdate } from './ClickContext';
import { useAutoClicks, useAutoClicksUpdate } from './AutoClickContext';

const Upgrades = ({navigation}) => {

    const clickMultiplier = useClicks()
    const increaseClickMultiplier = useClicksUpdate()

    const autoClickMultiplier = useAutoClicks()
    const increaseAutoClickMultiplier = useAutoClicksUpdate()
    

    return (
        <View>
            <Text>This is the upgrades page</Text>
            <Text>Upgrade click value (current value is {clickMultiplier}):</Text>
            <Button 
            title='increase click value'
            onPress={increaseClickMultiplier}
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