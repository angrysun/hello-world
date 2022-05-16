import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorldApp from './components/HelloWorldApp';
import { Box } from './components/Box';
import { Input } from './components/Input';

export default function App() {
  const[inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputPetName, setInputPetName] = useState('');
  const [inputPetBday, setInputPetBday] = useState('');
  const [inputBreed, setInputBreed] = useState('');
  const [inputToy, setInputToy] = useState('');

  return (
    <View style={styles.container}>
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
      />
      <Input
        label="pet's name"
        val={inputPetName}
        setVal={setInputPetName}
        holder={"Input your pet's name here"}
      />
      <Input
        label="pet's date of birth"
        val={inputEmail}
        setVal={setInputEmail}
      />
      <Input
        label="breed"
        val={inputEmail}
        setVal={setInputEmail}
      />
      <Input
        label="favorite toy"
        val={inputEmail}
        setVal={setInputEmail}
      />
    </View>
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
