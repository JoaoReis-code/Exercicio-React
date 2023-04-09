import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native/types";
import UsuarioLogado from "./componentes/UsuarioLogado";


export default class App extends Component{
  render() {
    return (
      <View style={estilos.container}>
        <UsuarioLogado usuario={{nome:'teste', email:'teste@testemail.com'}}/>
        <UsuarioLogado usuario={{nome:'teste 2'}}/>
        <UsuarioLogado usuario={{email:'teste@testemail.com'}}/>
        <UsuarioLogado usuario={null}/>
        <UsuarioLogado usuario={{}}/>
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

 