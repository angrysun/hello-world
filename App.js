import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import HelloWorldApp from './components/HelloWorldApp';
import { Box } from './components/Box';
import { Input } from './components/Input';
import { Formik } from 'formik'

export default function App() {
  const [inputEmail, setInputEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputPetName, setInputPetName] = useState('');
  const [inputPetBday, setInputPetBday] = useState('');
  const [inputBreed, setInputBreed] = useState('');
  const [inputToy, setInputToy] = useState('');

  return (
    <Formik
      initialValues={{ email: '', password: '', name: '', birthday: '', breed: '', toy: '' }}
      onSubmit={values => console.log(values)}
    >
      <ScrollView contentContainerStyle={styles.scroll} >
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
          val={password}
          setVal={setPassword}
          holder={'Input your password here'}
          secureTextEntry
        />
        <Input
          label="Confirm password"
          holder={'Re-input your password here'}
          onSubmitEditing={(e) => {
            confirmPasswordsMatch(e.nativeEvent.text, password);
          }}
          secureTextEntry
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
          label="Favorite toy"
          val={inputToy}
          setVal={setInputToy}
          holder={"Input your pet's favorite toy here"}
        />
      </ScrollView>
    </Formik>
  );
}

function confirmPasswordsMatch(confirmationPassword, originalPassword) {
  if (confirmationPassword !== originalPassword) {
    alert('Passwords do not match, please try again.');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    flex: 1,
    justifyContent: 'center',
    // padding: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});
