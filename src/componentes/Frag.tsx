import React from "react";
import { View, Text, ProgressViewIOSComponent } from "react-native";
import Padrao from "../estilos/Padrao";


export default (props: any) => (
    <>
        <Text style={Padrao.txt6}>{props.titulo}</Text>
        <Text>{props.subTitulo}</Text>
    </>
)

