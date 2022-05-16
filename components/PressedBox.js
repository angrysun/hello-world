import { View } from "react-native";

export const PressedBox = (props) => (
  <View style={[styles.box, props.pressed && { backgroundColor: 'blue' }]} />
);
