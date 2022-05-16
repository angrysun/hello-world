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
      <Input label="email" />
      <Input label="password" />
      <Input label="pet's name" />
      <Input label="pet's date of birth" />
      <Input label="breed" />
      <Input label="favorite toy" />
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
