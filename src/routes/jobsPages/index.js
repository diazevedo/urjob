import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import JobHeader from '~/components/JobHeader';

const Stack = createStackNavigator();

import Main from '~/pages/Main';
import Job from '~/pages/Job';
import JobWebView from '~/pages/JobWebView';

export default function JobsPages() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          shadowColor: 'transparent',
          height: 70,
          borderBottomColor: '#EBF0FF',
          borderBottomWidth: 1,
        },
        headerLeft: false,
        headerTitleAlign: 'left',
      }}>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Job"
        component={Job}
        options={{
          headerTitle: (props) => <JobHeader {...props} />,
        }}
      />
      <Stack.Screen
        name="JobWebView"
        component={JobWebView}
        options={{
          headerTitle: (props) => <JobHeader {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}
