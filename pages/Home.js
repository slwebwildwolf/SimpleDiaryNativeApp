import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';


export default class Home extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/images/home.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});


// import MainTitle from '../components/MainTitle'

// export default class Home extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       isLoading: true
//     }
//   }
//   render() {
//     const { isLoading } = this.state;
//     return (
//       <View style={styles.container}>
//         <MainTitle/>
//         { isLoading ? <ActivityIndicator style={styles.loader}/> : <View style={styles.loader}/> }
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   loader: {
//     marginTop: 24,
//     flex: 1,
//   }
// });


