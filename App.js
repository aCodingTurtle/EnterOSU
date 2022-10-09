import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet,Button, Text } from 'react-native';
import { Appbar, BottomNavigation, Card} from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Constants from 'expo-constants';

//import { registerRootComponent } from 'expo';
import Home from './Pages/Home.js';
import Setting from './Pages/Setting.js';
import Building from './Pages/Building.js';
import LogIn from './Pages/LogIn.js';
import Splash from './Pages/Splash.js';

import styles from './Pages/styles.js';
import { registerRootComponent } from 'expo';

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Splash'>
        <Stack.Screen name = 'Splash' component={Splash}/>
        <Stack.Screen name = 'LogIn' component = {LogIn}/>
        <Stack.Screen name = 'Home' component = {Home}/>
        <Stack.Screen name = 'Setting' component = {Setting}/>
        <Stack.Screen name = 'Building' component = {Building}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*       <View style = {styles.loadingPage}>  
<Text style = {styles.title}>
enterOSU
</Text>
</View>
*/