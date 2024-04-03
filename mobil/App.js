// Laczkó Bálint II/2/N 2024.04.03
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HangszerekScreen from './components/HangszerekScreen';
import NevjegyScreen from './components/NevjegyScreen';


const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Hangszerek" component={HangszerekScreen} />
        <Tab.Screen name="Névjegy" component={NevjegyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



