import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

import '~/config/ReactotronConfig';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

import Favourites from '~/pages/Favourites';
import JobsPages from './jobsPages';
import Header from '~/components/JobHeader';

/**
 * TODO
 * Create an specific stack navigator to Main, Job and JobWebView
 */

const MainStack = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" />

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
          tabBarIcon: ({ color }) => (
            <Icon name="grid" size={26} color={color} />
          ),
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
  </NavigationContainer>
);

export default MainStack;
