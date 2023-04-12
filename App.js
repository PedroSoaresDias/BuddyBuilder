import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Pages/Login.js';
import Cadastro from './Pages/Cadastro.js';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name='Profile' component={Cadastro}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.font}>Open up App.js to start working on your app!</Text>
    //   <Text style={styles.font}>Bad</Text>
    //   <StatusBar style="auto" />
    //   <Index />
    // </View>
    <Index/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  font: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});