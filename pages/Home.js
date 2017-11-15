import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import style from '../style'

const styles = StyleSheet.create(style);

export default class Home extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/images/home.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home</Text>
      </View>
    );
  }
}
