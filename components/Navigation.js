import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const FeedScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>First screen</Text>
  </View>
)

const CatalogScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Catalog Screen</Text>
  </View>
);

const Stack = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="Catalog" component={CatalogScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
});
