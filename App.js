import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Context
import {ClickContextProvider} from './ClickContext'

//components
import Click from "./Click";
import Upgrades from "./Upgrades";

const App = () => {

  const Stack = createNativeStackNavigator()

  return (
    <ClickContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Click" >
          
          <Stack.Screen name="Click" component={Click} />
          <Stack.Screen name="Upgrades" component={Upgrades} />

        </Stack.Navigator>  
      </NavigationContainer>
    </ClickContextProvider>
  )
}

export default App;