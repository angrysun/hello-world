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
    fontSize: 16,
    margin: 4,
    marginBottom: 12
  },
  title: {
    fontWeight: 700,
    fontSize: 12
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
    margin: 6,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 85,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#f0eef2'
  },
  title: {},
});

const WoofPost = (props) => (
  <View style={woofPostStyles.layout}>
    <Image source={{ uri: props.image }} style={woofPostStyles.image} />
    <View style={woofPostStyles.content}>
      <Text style={woofPostStyles.title}>{props.title}</Text>
      <Text style={woofPostStyles.description}>{props.description}</Text>
    </View>
  </View>
);

const woofPostStyles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
    margin: 6
  },
  image: {
    flex: 1,
    height: 70,
    width: 40,
    borderRadius: 10,
  },
  content: {
    flex: 2,
    flexDirection: 'column',
    margin: 8
  },
  title: {
    fontWeight: 700,
    fontSize: 12,
    marginBottom: 4
  },
  description: {
    fontSize: 12
  },
});

// The screen rendering everything
const HomeScreen = () => (
  <ScrollView style={{ margin: 14 }}>
    <Heading>Trending Woofs</Heading>
    <ScrollView horizontal>
      {woofs}
    </ScrollView>
    <Heading>New Woof Posts</Heading>
    <ScrollView>
      {posts}
    </ScrollView>
  </ScrollView>
);

const App = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#FAF9FA' }}>
    <HomeScreen />
  </SafeAreaView>
);

export default App;
