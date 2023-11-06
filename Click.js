import { StatusBar } from 'expo-status-bar';
import { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//Context
import { useClicks, useClicksUpdate } from './ClickContext';


const Click = ({navigation}) => {

    const clickMultiplier = useClicks()
    const increaseClickMultiplier = useClicksUpdate()

    const autoClickMultiplier = 1

    const [clicks, setClicks] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setClicks(clicks + (1 * autoClickMultiplier))
    }, 1000);

        return () => clearInterval(interval);
    })

    function updateClicks() {
        setClicks(clicks + (1 * clickMultiplier))
    }

 

  return (
    <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button 
        title='click me'
        onPress={updateClicks}
        />
        <Text>You have clicked {clicks} times</Text>
        <Text>Current click value is {clickMultiplier}</Text>
        <Button 
        title='increase click value'
        onPress={increaseClickMultiplier}
        />

        <Button 
        title='Go to upgrades'
        onPress={() => navigation.navigate('Upgrades')}
        />
        <StatusBar style="auto" />
    </View>
  );
}

export default Click;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
