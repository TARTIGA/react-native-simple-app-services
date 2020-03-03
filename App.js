import React from 'react'
import { HomeScreen, CardScreen, AdditionalInfoScreen } from './screens'
import { NotificationsScreen, SettingsScreen } from './screens'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function App() {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName="HomeScreen" drawerPosition="right" drawerContentOptions={{
        activeTintColor: '#2a86ff',
        itemStyle: { lineHeight: 15, color: '#fff' },
      }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator> */}
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
    </NavigationContainer>
  );
}

export default App;
