import { StatusBar } from "react-native";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import Cadastro from "./Cadastro";

// const LoginScreen = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     // implementar lógica de validação do lado do cliente e armazenamento de dados
//   };
// };


const Login = ({navigation}) => {
  return (
    // <View style={styles.container}>

    // </View>
    <View style={styles.container}>
      {/* <TextInput style={styles.inputEmail} placeholder="E-mail" onChangeText={(text) => setEmail(text)} value={email} /> */}
      <TextInput style={styles.inputEmail} placeholder="E-mail" />
      {/* <TextInput style={styles.inputPassword} placeholder="Senha" onChangeText={(text) => setPassword(text)} value={password} /> */}
      <TextInput style={styles.inputPassword} placeholder="Senha" />

      <TouchableOpacity style={styles.btnLogin}>
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnCadastro} onPress={() => navigation.navigate('Cadastrar')}>
        <Text>Cadastrar-se</Text>
        {/* <Button style={styles.btnCadastro} title="Cadastrar"
        onPress={() => this.props.navigation.navigate('Cadastrar')}/> */}
      </TouchableOpacity>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 253,
    height: 300,
    top: 0,
    left: 0,
    backgroundColor: "#B6D1D1",
  },
  inputEmail: {
    width: 191,
    height: 26,
    top: 340,
    left: 31,
    borderRadius: 5,
  },
  inputPassword: {
    width: 191,
    height: 26,
    top: 377,
    left: 31,
    borderRadius: 5,
  },
  btnLogin: {
    width: 129,
    height: 38,
    top: 438,
    left: 62,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "grey",
    color: "black",
    textAlign: "center",
  },
  btnCadastro: {
    width: 129,
    height: 38,
    top: 492,
    left: 62,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "grey",
    color: "black",
    textAlign: "center",
  },
  // textLogin: {
  //     fontFamily: 'Inter',
  //     height: 17,
  //     top: 448,
  //     left: 104,
  //     fontSize: 14,
  //     fontWeight: 700,
  // },
  // textCadastro: {
  //     fontFamily: 'Inter',
  //     fontSize: 14,
  //     fontWeight: 700,
  //     width: 91,
  //     height: 17,
  //     top: 502,
  //     left: 81
  // }
});
