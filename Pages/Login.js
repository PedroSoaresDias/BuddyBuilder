import { StatusBar } from "react-native";
import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // implementar lógica de validação do lado do cliente e armazenamento de dados
  };
};

export default function Login() {
  return (
    // <View style={styles.container}>

    // </View>
    <View>
        <Text>E-mail</Text>
        <TextInput style={styles.inputEmail} placeholder="E-mail" onChangeText={(text) => setEmail(text)} value={email} />

        <Text>Senha</Text>
        <TextInput style={styles.inputPassword} placeholder="Senha" onChangeText={(text) => setPassword(text)} value={password} />

        <TouchableOpacity style={styles.btnLogin}><Text>Login</Text></TouchableOpacity>
            
        <TouchableOpacity style={styles.btnCadastro}><Text>Cadastrar-se</Text></TouchableOpacity>
    </View>
  );
}

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
        borderRadius: 5
    },
    btnLogin: {
        width: 129,
        height: 38,
        top: 438,
        left: 62,
        borderRadius: 8,
    },
    btnCadastro: {
        width: 129,
        height: 38,
        top: 492,
        left: 62,
        borderRadius: 8,
    },
    textLogin: {
        fontFamily: 'Inter',
        height: 17,
        top: 448,
        left: 104,
        fontSize: 14,
        fontWeight: 700,
    },
    textCadastro: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 700,
        width: 91,
        height: 17,
        top: 502,
        left: 81
    }
});
