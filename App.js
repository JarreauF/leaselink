import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './components/signup/signupscreen';
import HomeScreen from './components/home/home'; 

import MyTabs from './components/home/home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}


