import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import MainTitle from '../components/MainTitle'
import MainWriteBtn from '../components/MainWriteBtn'

export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLoading: false
    }
  }
  render() {
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
        <MainTitle />
        { isLoading ? <ActivityIndicator style={styles.loader}/> : <View style={styles.loader}/> }
        <MainWriteBtn />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    marginTop: 24,
    flex: 1,
  }
});
