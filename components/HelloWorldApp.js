import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import sun from './assets/sun.png';

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world!</Text>
      <Text>My name is <Text style={{ fontWeight: 'bold'}}>Steven!</Text></Text>
      <Image source={sun} style={{width: 150, height: 150}} />
      <TouchableOpacity
        onPress={() => alert('Oh it\'s hot!')}
        style={{ backgroundColor: 'red' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Touch here</Text>
      </TouchableOpacity>
      <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://picsum.photos/100/100' }}></Image>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red'
        }}>
      </View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'green'
        }}>
      </View>
    </View>
  )
}
export default HelloWorldApp;
