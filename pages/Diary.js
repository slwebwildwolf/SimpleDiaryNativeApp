import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import style from './Style'

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
      <View style={styles.container}>
        <Text style={styles.title}>오늘은 어떤 추억을 담으시겠어요?</Text>
      </View>
    );
  }
}
