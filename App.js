import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Context
//import {ClickContextProvider} from '.Contexts/ClickContext'
//import { AutoClickContextProvider } from ".Contexts/AutoClickContext";
import { ClickContextProvider } from "./Contexts/ClickContext";
import { AutoClickContextProvider } from "./Contexts/AutoClickContext";
import { PointsContextProvider } from "./Contexts/PointsContext";
//components
import Click from "./Click";
import Upgrades from "./Upgrades";

const App = () => {

  const Stack = createNativeStackNavigator()

  return (
    <ClickContextProvider>
      <AutoClickContextProvider>
        <PointsContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Click" >
            
            <Stack.Screen name="Click" component={Click} />
            <Stack.Screen name="Upgrades" component={Upgrades} />

          </Stack.Navigator>  
        </NavigationContainer>

        </PointsContextProvider>
      </AutoClickContextProvider>
    </ClickContextProvider>
  )
}

export default App;