import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import style from './Style'

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
      <View style={styles.container}>
        <Text style={styles.title}>오늘, 당신의 하루는?</Text>
      </View>
    );
  }
}
