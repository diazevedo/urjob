import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Main from '~/pages/Main';
import Favorites from '~/pages/Favorites';

import '~/config/ReactotronConfig';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const styles = {
  safeArea: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f3f5f9',
  },
};

const Bottom = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#000AFF',
        inactiveTintColor: '#000',
        style: {
          backgroundColor: '#fff',
        },
        keyboardHidesTabBar: true,
        headerStyle: {
          height: 85,
          backgroundColor: '#025bbf',
        },
        headerLeft: ({ onPress }) => (
          <TouchableOpacity onPress={() => onPress()}>
            <Icon name="chevron-left" size={30} color="#FFF" />
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

const App = () => (
  <SafeAreaView style={styles.safeArea}>
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator headerMode="none">
        {/* <Stack.Screen name="Home" component={Main} /> */}
        <Stack.Screen name="Main" component={Bottom} />
        {/* <Stack.Screen name="Favorite" component={Bottom} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);

export default App;
