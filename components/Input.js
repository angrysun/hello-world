import { View, Text, TextInput } from "react-native";

export const Input = (props) => (
  <View style={{ padding: 16 }}>
    <Text style={{ padding: 8, fontSize: 18 }}>
      {props.label}
    </Text>
    <TextInput
      style={{ padding: 8, backgroundColor: '#f5f5f5', fontSize: 18 }}
      placeholder={props.holder}
      value={props.val}
      onChangeText={props.setVal}
      secureTextEntry={props.secure}
    />
  </View>
);
