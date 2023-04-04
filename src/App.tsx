import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native/types";
import Simples from "./componentes/Simples";
import Padrao from "./estilos/Padrao";
import Frag from "./componentes/Frag";
import Parimpar from "./componentes/Parimpar";
import Familia from "./componentes/relacao/Familia";
import Membro from "./componentes/relacao/Membro";


export default class App extends Component{
  render() {
    return (
      <View style={estilos.container}>
        <Familia>
          <Membro nome="Joao" sobrenome="Reis"/>
        </Familia>
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

 