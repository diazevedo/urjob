import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

import '~/config/ReactotronConfig';

const Tabs = createBottomTabNavigator();

import Favourites from '~/pages/Favourites';
import JobsPages from './jobsPages';

const MainStack = () => (
  <Tabs.Navigator
    tabBarOptions={{
      activeTintColor: '#6379E9',
      inactiveTintColor: '#fff',
      style: {
        backgroundColor: '#272727',
        paddingTop: 5,
        paddingBottom: 10,
        height: 70,
      },
      keyboardHidesTabBar: true,
    }}>
    <Tabs.Screen
      name="Main"
      component={JobsPages}
      options={{
        tabBarLabel: 'Home',
        tabBarVisible: true,
        tabBarIcon: ({ color }) => <Icon name="grid" size={26} color={color} />,
      }}
    />
    <Tabs.Screen
      name="Favourites"
      component={Favourites}
      options={{
        headerShown: true,
        tabBarLabel: 'Favourites',
        tabBarVisible: true,
        tabBarIcon: ({ color }) => (
          <Icon name="heart" size={26} color={color} />
        ),
      }}
    />
  </Tabs.Navigator>
);

export default MainStack;
