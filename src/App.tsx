import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";
import Simples from "./componentes/Simples";
import Padrao from "./estilos/Padrao";
import Frag from "./componentes/Frag";
import Parimpar from "./componentes/Parimpar";


export default class App extends Component{
  render() {
    return (
      <View style={estilos.container}>
        {/*<Frag titulo="Cadastro" subTitulo="Tela de cadastro do produto">ddfbf</Frag>*/}
        <Parimpar numero="2"/>
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

 