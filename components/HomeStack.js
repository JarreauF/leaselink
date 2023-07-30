import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomesRoute from './HomesRoute';
import HomeDetails from './HomeDetails';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomesRoute" component={HomesRoute} />
      <HomeStack.Screen name="HomeDetails" component={HomeDetails} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;