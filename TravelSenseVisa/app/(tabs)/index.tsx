// HomeScreen.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Visa1 from './visa1';
import Visa2 from './visa2';
import Profile from './profile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Visa1">
        <Stack.Screen name="Visa1" component={Visa1} />
        <Stack.Screen name="Visa2" component={Visa2} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
