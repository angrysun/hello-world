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

// App-specific components

const WoofCard = (props) => (
  <View style={woofCardStyles.card}>
    <Avatar url={props.url} />
    <View style={{ textAlign: 'center' }}>
      <Title>{props.name}</Title>
    </View>
  </View>
);

const woofCardStyles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 85,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#f0eef2'
  },
  title: {

  },
});
