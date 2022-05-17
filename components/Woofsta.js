import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

// Basic reusable components
const Avatar = (props) => (
  <Image
    style={styles.avatar}
    source={{ uri: props.url }}
  />
);

const Heading = (props) => (
  <Text style={styles.heading}>
    {props.children}
  </Text>
);

const Title = (props) => (
  <Text style={styles.title}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 75
  },
  heading: {
    fontWeight: 800,
    fontSize: 20
  },
  title: {
    fontWeight: 600,
    fontSize: 14
  },
});
