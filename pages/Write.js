import React from 'react';
import { StyleSheet, Image, View, Text, TextInput, Checkbox, Button, AsyncStorage } from 'react-native';
import CheckBox from 'react-native-checkbox';
import axios from 'axios'

import style from './Style'

const styles = StyleSheet.create(style.commonStyle);
const writeStyles = StyleSheet.create(style.writeStyle);
const WEATHER_APP_KEY = '8e910f9c-3965-3d3c-91aa-dda9db46227f';


export default class Write extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      article: '',
      skyData: [],
      geoData: {lat: '', lot: ''},
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
    this._getCurrentGeolocation()
  }
  
  _getCurrentGeolocation = () => {
    navigator.geolocation.getCurrentPosition( success = (position) => {
      let lat = position.coords.latitude
      let lot = position.coords.longitude
      console.log(position.coords.latitude, position.coords.longitude)
    });
  }

  _getWeatherInfoFromApi = (latitude, longitude) => {
    this.setState({
      geoData: {
        lat: latitude,
        lot: longitude,
      }
    })
    axios.get(`http://apis.skplanetx.com/weather/current/minutely?version=1&lat=${latitude}&lon=${longitude}`, {
      headers: {
        appKey: WEATHER_APP_KEY,
      }
    })
    .then(res => {
      this.setState({
        skyData: res.data.weather.minutely[0].sky,
      })
    })
    .catch(error => {
      console.error(error)
    })
  }

  _conditionCheckHandle = (value, checked) => {
    console.log(value, checked)
  }

  _setDataToAsyncStorage = (e) => {
    if (e.target === 83){
      console.log('임시저장 버튼 클릭')
    } else if (e.target === 87) {
      console.log('일기 작성완료 버튼 클릭')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>오늘, 당신의 하루는?</Text>
        <TextInput
          editable = {true}
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
          placeholder={'당신의 오늘을 한 줄로 적어주세요.'}
          style={{width: '90%', height: 40, borderBottomWidth: 1, borderBottomColor: '#FF5733', color: '#888', fontSize: 13}}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(article) => this.setState({article})}
          editable = {true}
          placeholder={'오늘은 어떤 일이 있었는지 적어주세요.'}
          value={this.state.article}
          multiline = {true}
          numberOfLines = {10}
          maxHeight = {300}
        />
        <View style={{marginTop: 16, display: 'flex', flex: 1, width: '90%'}}>
          <CheckBox
            label='행복해'
            onChange={(checked) => console.log('I am checked', checked)}
            value='happy'
          />
          <CheckBox
            label='우울해'
            onChange={(checked) => console.log('I am checked', checked)}
            value='gloomy'
          />
          <CheckBox
            label='심란해'
            onChange={(checked) => console.log('I am checked', checked)}
            value='confuse'
          />
          <Button
            onPress={e => this._setDataToAsyncStorage(e)}
            title="임시저장"
            color="#ccc"
            accessibilityLabel="임시저장 하시겠습니까?"
          />
          <Button
            onPress={e => this._setDataToAsyncStorage(e)}
            title="일기 작성완료"
            color="#FF5733"
            accessibilityLabel="작성된 일기를 저장 하시겠습니까?"
          />
        </View>
      </View>
    );
  }
}
