import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '~/pages/Main';

import '~/config/ReactotronConfig';

const Stack = createStackNavigator();

const styles = {
  safeArea: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f3f5f9',
  },
};

const App = () => (
  <SafeAreaView style={styles.safeArea}>
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);

export default App;
