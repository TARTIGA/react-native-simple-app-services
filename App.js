import React from 'react'
import { HomeScreen, CardScreen, AdditionalInfoScreen } from './screens'
import { NotificationsScreen, SettingsScreen } from './screens'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const RootStack = createDrawerNavigator();

const MainStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#2a86ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        title: 'HomeScreen',
      }} />
      <Stack.Screen name="Card" component={CardScreen} options={{ title: 'Card' }} />
      <Stack.Screen name="AdditionalInfo" component={AdditionalInfoScreen} options={{ title: 'Information' }} />
    </Stack.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none" initialRouteName="Home" drawerPosition="right" >
        <RootStack.Screen name="Home" component={MainStackScreen} />
        <RootStack.Screen name="Settings" component={SettingsScreen} options={{ title: 'SettingsScreen' }} />
        <RootStack.Screen name="Notifications" component={NotificationsScreen} options={{ title: 'NotificationsScreen' }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
