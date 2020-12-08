import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Main from '~/pages/Main';
import Favorites from '~/pages/Favorites';

const Tabs = createBottomTabNavigator();

const Bottom = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#000AFF',
        inactiveTintColor: '#000',
        style: {
          backgroundColor: '#fff',
          paddingTop: 5,
          paddingBottom: 10,
          height: 70,
        },
        keyboardHidesTabBar: true,
        // headerStyle: {
        //   height: 200,
        //   backgroundColor: '#025bbf',
        // },
        headerLeft: ({ onPress }) => (
          <TouchableOpacity onPress={() => onPress()}>
            <Icon name="chevron-left" size={30} color="#eeee88" />
          </TouchableOpacity>
        ),
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
          tabBarLabel: 'favorite',
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
