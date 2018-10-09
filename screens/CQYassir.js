import React, { Component } from 'react';
import {StyleSheet, View, Text,ScrollView,Image } from 'react-native';
import { Button } from 'react-native';
import { ListItem } from 'react-native-elements';
import { navigationOptions,Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';



export class CQYassir extends Component {


  render() {
    let pic = {
      uri: 'https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2016/08/11966069343_24750b395e_k-770x514.jpg'
    };
    return (

      <View style={styles.container}>

      <ScrollView>

      <View style= {{backgroundColor:'black'}}>
        <Image source={pic} style={{width: 350, height: 200}}
        />

<View style={{position: 'absolute', top: 0,margin:10}}>
<Icon

name="chevron-left"
   onPress={() => this.props.navigation.navigate('FAQScreen')}
      size={35} color="white"/>
  </View>

</View>
<View>
<View style={{position: 'absolute', left: 0, right: 0,  justifyContent: 'center', alignItems: 'center',padding:10}}>
<Text style={{color :'black',fontSize:24}}>C'est quoi Yassir?</Text>'



<Text style={{color :'#333333',fontSize:14 ,margin:15,fontStyle:'normal', alignItems: 'center'}}>You may be able to use your iPhone or iPad (Wi-Fi + Cellular models) to connect your Mac to the Internet.
First, on your iPhone or iPad, go to Settings &gt; Personal Hotspot, then turn on Personal Hotspot.
 Next, on your Mac, click the Wi-Fi icon  in the menu bar, then choose your Personal Hotspot.
Click the Wi-Fi icon  in the menu bar at the top of the screen, then choose a network, or choose Join Other Network.
If you have access to an Ethernet network, connect an Ethernet cable to the Ethernet.</Text>
</View>
</View>

<View style={ styles.header }>
        </View>

</ScrollView>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor:'#ffffff'

  },


})
export default CQYassir;
