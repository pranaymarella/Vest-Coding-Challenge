import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Dashboard from './app/screens/dashboard.js';
import Reports from './app/screens/reports.js';
import More from './app/screens/more.js';

const RootStack = createBottomTabNavigator(
  {
    Dashboard: Dashboard,
    Reports: Reports,
    More: More,
  },
  {
    initialRouteName: 'Reports'
  }
);

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}
