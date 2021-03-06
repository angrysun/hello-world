import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Pressable } from 'react-native';
import HelloWorldApp from './components/HelloWorldApp';
import { Box } from './components/Box';
import { Input } from './components/Input';
import { PressedBox } from './components/PressedBox';
import { Formik } from 'formik'

export default function App() {
  // const [inputEmail, setInputEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [inputPetName, setInputPetName] = useState('');
  // const [inputPetBday, setInputPetBday] = useState('');
  // const [inputBreed, setInputBreed] = useState('');
  // const [inputToy, setInputToy] = useState('');

  return (
    // <View style={styles.layout}>
    //   <Pressable>
    //     {(state) => <Box pressed={state.pressed} />}
    //   </Pressable>
    // </View>
    <Formik
      initialValues={{ email: '', password: '', name: '', birthday: '', breed: '', toy: '' }}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <ScrollView contentContainerStyle={styles.scroll} >
          {/* <HelloWorldApp />
          <Box color="blue" />
          <StatusBar style="auto" /> */}
          <Input
            label="Email"
            // val={inputEmail}
            // setVal={setInputEmail}
            val={values.email}
            setVal={handleChange('email')}
            onBlur={handleBlur('email')}
            holder={'Input your email here'}
          />
          <Input
            label="Password"
            val={values.password}
            setVal={handleChange('password')}
            onBlur={handleBlur('password')}
            holder={'Input your password here'}
            secureTextEntry
          />
          <Input
            label="Confirm password"
            holder={'Re-input your password here'}
            onSubmitEditing={(e) => {
              confirmPasswordsMatch(e.nativeEvent.text, values.password);
            }}
            secureTextEntry
          />
          <Input
            label="Pet's name"
            val={values.name}
            setVal={handleChange('name')}
            onBlur={handleBlur('name')}
            holder={"Input your pet's name here"}
          />
          <Input
            label="Pet's date of birth"
            val={values.birthday}
            setVal={handleChange('birthday')}
            onBlur={handleBlur('birthday')}
            holder={"Input your pet's birthday here"}
          />
          <Input
            label="Breed"
            val={values.breed}
            setVal={handleChange('breed')}
            onBlur={handleBlur('breed')}
            holder={"Input your pet's breed here"}
          />
          <Input
            label="Favorite toy"
            val={values.toy}
            setVal={handleChange('toy')}
            onBlur={handleBlur('toy')}
            holder={"Input your pet's favorite toy here"}
          />
          <Button
            onPress={handleSubmit}
            title="Submit"
            accessible={true}
            accessibilityLabel="Press to Submit"
            accessibilityHint="This will submit your form and you can continue"
          />
        </ScrollView>
      )}
    </Formik>
  );
}

function confirmPasswordsMatch(confirmationPassword, originalPassword) {
  if (confirmationPassword !== originalPassword) {
    alert('Passwords do not match, please try again.');
  }
}

// function validateEmail(value) {
//   let error;
//   if (!value) {
//     error = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
//     error = 'Invalid email address';
//   }
//   return error;
// }

// function validateUsername(value) {
//   let error;
//   if (value === 'admin') {
//     error = 'Nice try!';
//   }
//   return error;
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // justifyContent: 'flex-end'
  },
  scroll: {
    flex: 1,
    justifyContent: 'center',
    // padding: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 2,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: { height: 1, width: 0.3 }
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});
