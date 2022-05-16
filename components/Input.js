import { View, Text, TextInput } from "react-native";

export const Input = (props) => (
  <View style={{ padding: 10 }}>
    <Text>
      {props.label}
    </Text>
    <TextInput
      style={{ padding: 8, backgroundColor: '#f5f5f5' }}
      placeholder={props.holder}
      value={props.val}
      onChangeText={props.setVal}
      secureTextEntry={props.secure}
    />
  </View>
);
