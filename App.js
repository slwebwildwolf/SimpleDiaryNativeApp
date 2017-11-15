import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Diary from './pages/Diary'
import Write from './pages/Write'
import Setting from './pages/Setting'


const App = TabNavigator({
  Diary: {
    screen: Diary,
  },
  Write: {
    screen: Write,
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
      borderTopWidth: 0,
      paddingBottom: 20
    },
  },
});

export default App;
