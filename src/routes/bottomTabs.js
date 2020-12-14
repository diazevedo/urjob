import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

import Main from '~/pages/Main';
import Favorites from '~/pages/Favorites';

const Tabs = createBottomTabNavigator();

const Bottom = () => {
  return (
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
        component={Main}
        options={{
          tabBarLabel: 'home',
          tabBarVisible: true,
          tabBarIcon: ({ color }) => (
            <Icon name="grid" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'favorites',
          tabBarVisible: true,
          tabBarIcon: ({ color }) => (
            <Icon name="heart" size={26} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default Bottom;
