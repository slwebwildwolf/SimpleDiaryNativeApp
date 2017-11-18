import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import store from '../stores/Store'
import { observer } from 'mobx-react'
import style from './Style'

const styles = StyleSheet.create(style.commonStyle);


@observer
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
      <View style={styles.container} store={store}>
        <Text style={styles.title}>당신에게 가장 잘 맞는 설정은 무엇인가요?</Text>
      </View>
    );
  }
}
