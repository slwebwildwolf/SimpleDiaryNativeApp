import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import style from '../style'

const styles = StyleSheet.create(style);

export default class Diary extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Diary',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/images/diary.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Diary</Text>
      </View>
    );
  }
}
