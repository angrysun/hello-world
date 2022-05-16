import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import HelloWorldApp from './components/HelloWorldApp';
import { Box } from './components/Box';
import { Input } from './components/Input';

export default function App() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputPetName, setInputPetName] = useState('');
  const [inputPetBday, setInputPetBday] = useState('');
  const [inputBreed, setInputBreed] = useState('');
  const [inputToy, setInputToy] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container} >
      {/* <HelloWorldApp />
      <Box color="blue" />
      <StatusBar style="auto" /> */}
      <Input
        label="Email"
        val={inputEmail}
        setVal={setInputEmail}
        holder={'Input your email here'}
      />
      <Input
        label="Password"
        val={inputPassword}
        setVal={setInputPassword}
        holder={'Input your password here'}
        secure={true}
      />
      <Input
        label="Re-enter Password"
        val={inputPassword}
        setVal={setInputPassword}
        holder={'Re-input your password here'}
        secure={true}
      />
      <Input
        label="Pet's name"
        val={inputPetName}
        setVal={setInputPetName}
        holder={"Input your pet's name here"}
      />
      <Input
        label="Pet's date of birth"
        val={inputPetBday}
        setVal={setInputPetBday}
        holder={"Input your pet's birthday here"}
      />
      <Input
        label="Breed"
        val={inputBreed}
        setVal={setInputBreed}
        holder={"Input your pet's breed here"}
      />
      <Input
        label="Favorite Toy"
        val={inputToy}
        setVal={setInputToy}
        holder={"Input your pet's favorite toy here"}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
