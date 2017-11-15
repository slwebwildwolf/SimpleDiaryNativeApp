import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Home from './pages/Home'
import Diary from './pages/Diary'
import Setting from './pages/Setting'


const App = TabNavigator({
  Home: {
    screen: Home,
  },
  Diary: {
    screen: Diary,
  },
  Setting: {
    screen: Setting,
  },
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#FF5733',
    showLabel: false,
    style: {
      backgroundColor: 'transparent',
    },
  },
});

export default App;
