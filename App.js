import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Context
import {ClickContextProvider} from './ClickContext'
import { AutoClickContextProvider } from "./AutoClickContext";

//components
import Click from "./Click";
import Upgrades from "./Upgrades";

const App = () => {

  const Stack = createNativeStackNavigator()

  return (
    <ClickContextProvider>
      <AutoClickContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Click" >
            
            <Stack.Screen name="Click" component={Click} />
            <Stack.Screen name="Upgrades" component={Upgrades} />

          </Stack.Navigator>  
        </NavigationContainer>
      </AutoClickContextProvider>
    </ClickContextProvider>
  )
}

export default App;