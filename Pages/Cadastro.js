import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, TextInput, Image, TouchableOpacity } from "react-native";

// const SignUpScreen = () => {
//     const [nickname, setNickname] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');

//     const handleSignUp = () => {
//         // implementar lógica de validação do lado do cliente e armazenamento de dados
//     };
// }

export default function Cadastro() {
    return (
        <View style={styles.container}>
            <Text style={styles.textNickname}>Apelido</Text>
            {/* <TextInput style={styles.nicknameInput} placeholder="Apelido" onChangeText={text => setNickname(text)} value={nickname} /> */}
            <TextInput style={styles.nicknameInput} placeholder="Apelido"/>

            <Text style={styles.textEmail}>E-mail</Text>
            {/* <TextInput style={styles.emailInput} placeholder="E-mail" onChangeText={text => setEmail(text)} value={email} /> */}
            <TextInput style={styles.emailInput} placeholder="E-mail"/>

            <Text style={styles.textPassword}>Senha</Text>
            {/* <TextInput placeholder="Senha" onChangeText={text => setPassword(text)} value={password} /> */}
            <TextInput style={styles.passwordInput} placeholder="Senha"/>

            <Text style={styles.textConfirm}>Confirmar senha</Text>
            {/* <TextInput style={styles.confirmPasswordInput} placeholder="Confirmar senha" onChangeText={text => setConfirmPassWord(text)} value={confirmPassword} /> */}
            <TextInput style={styles.confirmPasswordInput} placeholder="Confirmar senha"/>

            <TouchableOpacity style={styles.btnCadastro}><Text style={styles.textCadastro}>Concluir cadastro</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        alignItems: 'center',
        justifyContent: 'center',
    },
    nicknameInput: {
        width: 191,
        height: 26,
        top: 143,
        left: 31,
        borderRadius: 5,
    },
    emailInput: {
        width: 191,
        height: 26,
        top: 213,
        left: 31,
        borderRadius: 5,
    },
    passwordInput: {
        width: 191,
        height: 26,
        top: 283,
        left: 31,
        borderRadius: 5,
    },
    confirmPasswordInput: {
        width: 191,
        height: 36,
        top: 353,
        left: 31,
        borderRadius: 5,
    },
    btnCadastro: {
        width: 191,
        height: 36,
        top: 403,
        left: 44,
        borderRadius: 8
    },
    textNickname: {
        fontSize: 14,
        fontFamily: 'Inter',
        fontWeight: 400,
        width: 50,
        height: 17,
        top: 123,
        left: 31,
    },
    textEmail: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 400,
        width: 42,
        height: 17,
        top: 193,
        left: 31,
    },
    textPassword: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 400,
        width: 42,
        height: 17,
        top: 263,
        left: 31,
    },
    textConfirm: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 400,
        width: 111,
        height: 17,
        top: 333,
        left: 31,
    },
    textCadastro: {
        width: 122,
        height: 17,
        top: 413,
        left: 65,
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 700,
    }
})