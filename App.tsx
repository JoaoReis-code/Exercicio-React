import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";
import DigiteSeuNome from "./src/componentes/DigiteSeuNome";


export default class App extends Component{
  render() {
    return (
      <View style={estilos.container}>
        <DigiteSeuNome placeholder="Digite seu nome"/>
      </View>
    );      
  }
}
  
  const estilos = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    fonte: {
      fontSize: 50,
    },
  });

 