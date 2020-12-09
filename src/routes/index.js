import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import Header from '~/components/JobHeader';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import '~/config/ReactotronConfig';

const Stack = createStackNavigator();

import Job from '~/pages/Job';

import Bottom from './bottomTabs';

const MainStack = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" />
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Bottom}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Job"
        component={Job}
        options={{
          headerTitleAlign: 'left',
          headerTitle: (props) => <Header {...props} />,
          headerShown: true,
          headerStyle: {
            shadowColor: 'transparent',
            height: 70,
            borderBottomColor: '#EBF0FF',
            borderBottomWidth: 1,
          },
          headerLeft: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStack;
