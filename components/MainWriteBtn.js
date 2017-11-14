import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MainWriteBtn extends React.Component {
  render() {
    return (
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: '#CD5C5C',
    width: 60,
    height: 60,
    borderRadius: 60,
    marginTop: 60,
  },
  buttonText: {
    backgroundColor: 'transparent',
    color: '#fff',
    lineHeight: 55,
    fontSize: 36,
    fontWeight: '200',
    textAlign: 'center',
  }
});
