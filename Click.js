import { StatusBar } from 'expo-status-bar';
import { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//Context
import { useClicks, useClicksUpdate } from './ClickContext';
import { useAutoClicks, useAutoClicksUpdate } from './AutoClickContext';


const Click = ({navigation}) => {

    const clickMultiplier = useClicks()
    const increaseClickMultiplier = useClicksUpdate()

    const autoClickMultiplier = useAutoClicks()
    const increaseAutoClickMultiplier = useAutoClicksUpdate()


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
        <Button 
          title='click me'
          onPress={updateClicks}
        />
        <Text>You have clicked {clicks} times</Text>
        
        <Text></Text>
        

        <Text></Text>
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
