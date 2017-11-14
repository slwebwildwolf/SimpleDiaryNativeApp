import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MainTitle extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}> 
        <Text style={styles.title}>새벽 1시</Text>
        <Text style={styles.subtitle}>오늘 하루도 고생했어 :)</Text>
      </View>
        
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    paddingTop: 120,
    flex: 1
  },
  title: {
    textAlign: 'center',
    color: '#CD5C5C',
    fontWeight: '200',
    fontSize: 24
  },
  subtitle: {
    color: '#999',
    fontWeight: '200',
    marginTop: 16
  }
});
