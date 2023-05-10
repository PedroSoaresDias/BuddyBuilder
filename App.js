import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Pages/Login.js";
import Cadastro from "./Pages/Cadastro.js";
import IMC from "./Pages/IMC.js";

const Stack = createNativeStackNavigator();

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Login"
//           component={Login}
//         />
//         <Stack.Screen name="Cadastro" component={Cadastro} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

export default function App() {
  return (
    // <View style={styles.container}>
    //   <MyStack />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastrar" component={Cadastro} />
        <Stack.Screen name="IMC" component={IMC}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   font: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });
