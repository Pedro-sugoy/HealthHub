import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaHome from './screens/TelaHome';
import TelaDevs from './screens/TelaDevs';
import TelaLogin from './screens/TelaLogin';
import TelaSobreAju from './screens/TelaSobreAju';
import TelaQuestio from './screens/TelaQuestio';
import TelaConfig from './screens/TelaConfig';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={TelaHome} />
        <Stack.Screen name="Devs" component={TelaDevs} />
        <Stack.Screen name="Logout" component={TelaLogin} />
        <Stack.Screen name="SobreAju" component={TelaSobreAju} />
        <Stack.Screen name="Questionario" component={TelaQuestio} />
        <Stack.Screen name="Config" component={TelaConfig} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
