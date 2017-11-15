import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import style from './Style'

const styles = StyleSheet.create(style.commonStyle);
const diaryStyles = StyleSheet.create(style.diaryStyle);
const dummyData = [
  {
    id: 1,
    title: '日本旅行1日目 東京',
    date: '2017/11/01'
  },
  {
    id: 2,
    title: '日本旅行3日目 東京',
    date: '2017/11/03'
  }
]

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
        <Text style={styles.title}>추억더미</Text>
        {dummyData.map((item, index) => (
          <View 
            style={diaryStyles.list}
            key={index}
            >
            <Text style={diaryStyles.listTitle}>{item.title}</Text>
            <Text style={diaryStyles.listDate}>{item.date}</Text>
          </View>

        ))}
      </View>
    );
  }
}
