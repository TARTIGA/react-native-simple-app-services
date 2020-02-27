import React from 'react'
import { HomeScreen, CardScreen } from './screens'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#2a86ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
          title: 'HomeScreen',
        }} />
        <Stack.Screen name="CardScreen" component={CardScreen} options={{ title: 'Card', }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
