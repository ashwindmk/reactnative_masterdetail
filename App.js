/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Master from './src/components/Master';
import Detail from './src/components/Detail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Master'>
        <Stack.Screen name='Master' component={ Master } options={{ title: 'Master' }}/>
        <Stack.Screen name='Detail' component={ Detail } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
