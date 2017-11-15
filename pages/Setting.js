import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import style from '../style'

const styles = StyleSheet.create(style);

export default class Setting extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Setting',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/images/setting.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Setting</Text>
      </View>
    );
  }
}
