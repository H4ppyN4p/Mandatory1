import { StatusBar } from 'expo-status-bar';
import { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

//Context
import { useClicks, useClicksUpdate, useAutoClicks, useAutoClicksUpdate } from './Contexts/ClickContext';
//import { useAutoClicks, useAutoClicksUpdate } from './Contexts/UpgradeContext';
import {usePointsState, useSetPointState} from './Contexts/PointsContext';

//firebase
import { app, database } from './firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, doc } from "firebase/firestore";


const Click = ({navigation}) => {


      
    const [values, loading, error] = useCollection(collection(database, 'Clicker'))
    const data = values?.docs.map((doc) => ({...doc.data(), id: doc.id}))


    
    const clickMultiplier = useClicks()

    const autoClickMultiplier = useAutoClicks()

    const points = usePointsState();
    const setPoints = useSetPointState()

    useEffect(() => {
        const interval = setInterval(() => {
            setPoints(points + (1 * autoClickMultiplier))
    }, 1000);

        return () => clearInterval(interval);
    })

    function updateClicks() {
        setPoints(points + (1 * clickMultiplier))
    }

 

  return (
    <View style={styles.container}>
        <Button 
          title='click me'
          onPress={updateClicks}
        />
        <Text>You have {points} points</Text>
        
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
