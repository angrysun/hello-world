import React, { useState } from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import sun from './assets/sun.png';

const HelloWorldApp = () => {
  const [pressedCount, setPressedCount] = useState(0);
  const [name, setName] = useState('');

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
      <Text style={{ margin: 16 }}>
        {pressedCount > 0
          ? `The button was pressed ${pressedCount} times!`
          : "The button isn't pressed yet"}
      </Text>
      <Button title="Press me" onPress={() => setPressedCount(pressedCount + 1)} disabled={pressedCount >= 3 ? true : false} />
      <View style={{
        padding: 16,
      }}>
        <Text style={{ marginVertical: 16 }}>
          {name ? `Hi ${name}!` : 'What is your name?'}
        </Text>
        <TextInput
          style={{ padding: 8, backgroundColor: '#f5f5f5' }}
          onChangeText={setName}
          secureTextEntry={true}
        />
      </View>
      <View style={{ height: 400, backgroundColor: '#e5e5e5' }}>
        <ScrollView horizontal>
          <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://picsum.photos/100/100' }}></Image>
          {/* <Image style={{ width: 100, height: 100 }} source={require('./react-native.jpg')}></Image> */}
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
        </ScrollView>
      </View>
    </View>
  )
}
export default HelloWorldApp;
