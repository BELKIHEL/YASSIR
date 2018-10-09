
import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { navigationOptions,Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
export class FAQ extends Component {
  render() {
  return (

    <View style={styles.container}>
      {

  list.map((item, i) => (
      <ListItem
        key={i}
        title={item.title}
        titleStyle={{ color: 'black' }}
        chevronColor="black"
        onPress={() => this.props.navigation.navigate(item.screenName)}


      />
    ))
  }
    </View>
  );
}
}
const list = [
  {
    title: "C'est Quoi Yassir",
    screenName : 'CQYassirScreen',
  },
  {
    title: 'Pourquoi utiliser Yassir',
    screenName : 'ThirdActivity',
  },
  {
    title: "Comment télécharger l'application",
    screenName : 'FourthActi',

  },
  ]

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor:'#ffffff'

  },


})

export default FAQ;
