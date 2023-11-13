import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Context
import { ClickContextProvider } from "./Contexts/ClickContext";
import { PointsContextProvider } from "./Contexts/PointsContext";
import { UpgradeContextProvider } from "./Contexts/UpgradeContext";
//components
import Click from "./Click";
import Upgrades from "./Upgrades";

const App = () => {

  const Stack = createNativeStackNavigator()

  return (
    <ClickContextProvider>
        <PointsContextProvider>
          <UpgradeContextProvider>
            
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Click" >
                
                <Stack.Screen name="Click" component={Click} />
                <Stack.Screen name="Upgrades" component={Upgrades} />

              </Stack.Navigator>  
            </NavigationContainer>

          </UpgradeContextProvider>
        </PointsContextProvider>
    </ClickContextProvider>
  )
}

export default App;