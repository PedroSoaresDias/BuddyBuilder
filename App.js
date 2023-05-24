import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Login from "./Pages/Components/Login";
// import Cadastro from "./Pages/Components/Cadastro";

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <TextInput style={styles.inputEmail} placeholder="E-mail" onChangeText={(text) => setEmail(text)} value={email} /> */}
      <TextInput style={styles.inputEmail} placeholder="E-mail" />
      {/* <TextInput style={styles.inputPassword} placeholder="Senha" onChangeText={(text) => setPassword(text)} value={password} /> */}
      <TextInput style={styles.inputPassword} placeholder="Senha" />

      <TouchableOpacity style={styles.btnLogin}>
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnCadastro}
        onPress={() => navigation.navigate("Cadastrar")}
      >
        <Text>Cadastrar-se</Text>
        {/* <Button style={styles.btnCadastro} title="Cadastrar"
        onPress={() => this.props.navigation.navigate('Cadastrar')}/> */}
      </TouchableOpacity>
    </View>
  );
}

function Cadastro(navigation) {
  return (
    <View style={styles.container}>
      <Text style={styles.textNickname}>Apelido</Text>
      {/* <TextInput style={styles.nicknameInput} placeholder="Apelido" onChangeText={text => setNickname(text)} value={nickname} /> */}
      <TextInput style={styles.nicknameInput} placeholder="Apelido" />

      <Text style={styles.textEmail}>E-mail</Text>
      {/* <TextInput style={styles.emailInput} placeholder="E-mail" onChangeText={text => setEmail(text)} value={email} /> */}
      <TextInput style={styles.emailInput} placeholder="E-mail" />

      <Text style={styles.textPassword}>Senha</Text>
      {/* <TextInput placeholder="Senha" onChangeText={text => setPassword(text)} value={password} /> */}
      <TextInput style={styles.passwordInput} placeholder="Senha" />

      <Text style={styles.textConfirm}>Confirmar senha</Text>
      {/* <TextInput style={styles.confirmPasswordInput} placeholder="Confirmar senha" onChangeText={text => setConfirmPassWord(text)} value={confirmPassword} /> */}
      <TextInput
        style={styles.confirmPasswordInput}
        placeholder="Confirmar senha"
      />

      <TouchableOpacity style={styles.btnCadastro} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.textCadastro}>Concluir cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}

// function IMC() {
//   const [peso, setPeso] = useState('');
//   const [altura, setAltura] = useState('');
//   const [imc, setIMC] = useState('');
//   let impressaoIMC;

//   const calcularIMC = () => {
//       const p = parseFloat(peso);
//       const a = parseFloat(altura) / 100;
//       const resultado = p / (a * a);
//       setIMC(resultado.toFixed(2))
      

//       if (resultado < 18.5) {
//           impressaoIMC = "Está em situação de Magreza"
//       } else if (resultado >= 18.5 && resultado <= 24.9) {
//           impressaoIMC = "Está no peso ideal"
//       } else if (resultado >= 25 && resultado <= 29.9) {
//           impressaoIMC = "Está com sobrepeso"
//       } else if (resultado >= 30 && resultado <= 39.9) {
//           impressaoIMC = "Está com obesidade"
//       } else {
//           impressaoIMC = "Está com obesidade grave"
//       }
//   }

//   return (
//       <View>
//           <Text>Peso</Text>
//           <TextInput placeholder="Peso" onChangeText={text => setPeso(text)} value={peso} />
//           <Text>Altura</Text>
//           <TextInput placeholder="Altura" onChangeText={text => setAltura(text)} value={altura}/>
//           <TouchableOpacity onPress={calcularIMC}><Text>Calcular IMC</Text></TouchableOpacity>

//           {imc !== '' && (
//               <Text>Seu IMC é: {imc} = {impressaoIMC}</Text>
//           )}
//       </View>
//   )
// }

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastrar" component={Cadastro} />
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
});
