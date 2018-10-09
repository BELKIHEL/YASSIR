import React, { Component } from 'react';
import {AppRegistry,Image , StyleSheet,  View, Text, Button } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import Communications from 'react-native-communications';


class First extends Component {

  onPressItem = (page) => {
    if(page=='AppelScreen'){
 Communications.phonecall('0123456789', true);
 }else if (page=='FAQScreen') {

   this.props.navigation.navigate('FAQScreen')
 }
 }

  render() {
  let pic = {
    uri: 'https://www.lscoiffure.fr/images/assistance.jpg'
  };
  return (

    <View style={styles.container}>
    <View>
      <Image source={require('/Users/meriem/MeriemYassir/images/Assistance.jpg')} style={{width: 350, height: 200}}
      />
      <View style={{position: 'absolute', top: 0,margin:10}}>
      <Icon

      name="chevron-left"
         onPress={() => this.props.navigation.navigate('FAQScreen')}
            size={35} color="white"/>
        </View>
      <View style={{position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'center',marginBottom:20, alignItems: 'center'}}>
<Text style={{color :'#ffffff',fontSize:24}}>Assistance</Text>
</View>
</View>

      {

  list.map((item, i) => (
      <ListItem
        key={i}
        title={item.title}
        titleStyle={{ color: 'black' }}
        chevronColor="black"
        leftIcon={{ name: item.icon ,color:'black'}}
        onPress={() => this.onPressItem(item.page)}
      />
    ))
  }
    </View>
  );
}
}
const list = [
  {
    title: 'Appeler le service clientèle',
    icon: 'perm-phone-msg',
    page:'AppelScreen',

  },
  {
    title: 'FAQ',
    icon: 'help',
    page:'FAQScreen'
  },
  {
    title: 'Conditions et mentions légales',
    icon :'error',


  },
  ]


const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor:'#ffffff'

  },


})


export default First;
