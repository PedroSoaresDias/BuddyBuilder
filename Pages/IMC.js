import React from "react";
import { TextInput, Text, View, TouchableOpacity } from "react-native-web";
import { useState } from "react";


function IMC() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setIMC] = useState('');
    let impressaoIMC;

    const calcularIMC = () => {
        const p = parseFloat(peso);
        const a = parseFloat(altura) / 100;
        const resultado = p / (a * a);
        setIMC(resultado.toFixed(2))
        

        if (resultado < 18.5) {
            impressaoIMC = "Está em situação de Magreza"
        } else if (resultado >= 18.5 && resultado <= 24.9) {
            impressaoIMC = "Está no peso ideal"
        } else if (resultado >= 25 && resultado <= 29.9) {
            impressaoIMC = "Está com sobrepeso"
        } else if (resultado >= 30 && resultado <= 39.9) {
            impressaoIMC = "Está com obesidade"
        } else {
            impressaoIMC = "Está com obesidade grave"
        }
    }

    return (
        <View>
            <Text>Peso</Text>
            <TextInput placeholder="Peso" onChangeText={text => setPeso(text)} value={peso} />
            <Text>Altura</Text>
            <TextInput placeholder="Altura" onChangeText={text => setAltura(text)} value={altura}/>
            <TouchableOpacity onPress={calcularIMC}><Text>Calcular IMC</Text></TouchableOpacity>

            {imc !== '' && (
                <Text>Seu IMC é: {imc} = {impressaoIMC}</Text>
            )}
        </View>
    )
}

export default IMC;