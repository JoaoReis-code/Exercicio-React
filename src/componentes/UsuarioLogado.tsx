import React from "react";
import { Text } from "react-native";
import Padrao from "../estilos/Padrao";
import If from "./if";

export default (props: any) => {
    const usuario = props.usuario || {}

    return (
        <>
        <If valido={usuario && usuario.nome && usuario.email}>
            <Text style={Padrao.txt6}>
                Usuario Logado
            </Text>
            <Text style={Padrao.txt6}>
                {usuario.nome} - {usuario.email}
            </Text>
        </If> 
        </>
    )

}
