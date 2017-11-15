import React from 'react';
import { StyleSheet, Image, View, Text, TextInput } from 'react-native';
import axios from 'axios'
import style from './Style'

const WEATHER_APP_KEY = '8e910f9c-3965-3d3c-91aa-dda9db46227f';

const styles = StyleSheet.create(style.commonStyle);

export default class Write extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: '',
      skyData: [],
      geoData: {
        lat: '',
        lot: '',

      },
    };
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

  componentDidMount() {
    axios.get(`http://apis.skplanetx.com/weather/current/minutely?version=1&lat=37&lon=127`, {
      headers: {
        appKey: WEATHER_APP_KEY,
      }
    })
    .then(res => {
      this.setState({
        skyData: res.data.weather.minutely[0].sky,
        geoData: {
          lat: res.data.weather.minutely[0].station.latitude,
          lot: res.data.weather.minutely[0].station.longitude,
        }
      })
    })
    .catch(error => {
      console.error(error)
    })
  }
  

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
        <Text>{this.state.skyData.name}</Text>
        <Text>{this.state.geoData.lat}{this.state.geoData.lot}</Text>
      </View>
    );
  }
}
