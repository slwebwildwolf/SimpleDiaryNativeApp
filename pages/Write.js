import React from 'react';
import { StyleSheet, Image, View, Text, TextInput } from 'react-native';
import style from './Style'

const styles = StyleSheet.create(style.commonStyle);

export default class Write extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/images/pen.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>오늘, 당신의 하루는?</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          editable = {true}
          value={this.state.text}
        />
      </View>
    );
  }
}
