import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import First from './screens/First';
import FAQ from './screens/FAQ';
import CQYassir from './screens/CQYassir';

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{position: 'absolute', left: 0, right: 0, justifyContent: 'center',marginBottom:20, alignItems: 'center'}}>
<Text style={{color :'white',fontSize:20}}>FAQ</Text>
</View>
    );
  }
}


const AppNavigator1 = createStackNavigator({

  FirstScreen: { screen: First,
    navigationOptions: {
          header: null,
        } },
  FAQScreen: { screen: FAQ,
    navigationOptions: {
        headerTitle: <LogoTitle/>,
        headerStyle: {
           backgroundColor: 'black',
       },
       

        }},
  ThirdScreen: { screen: FAQ},
  CQYassirScreen: { screen: CQYassir,
    navigationOptions: {
          header: null,
        } },

});



export default class App extends Component {
  render() {
    return (

     <AppNavigator1 />

    );
  }
}
