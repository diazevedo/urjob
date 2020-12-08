import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import '~/config/ReactotronConfig';

const Stack = createStackNavigator();
import Bottom from './bottomTabs';

const MainStack = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main" component={Bottom} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStack;
