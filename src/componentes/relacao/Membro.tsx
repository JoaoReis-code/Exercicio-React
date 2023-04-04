import React, { Children } from "react";
import { Text } from "react-native/types";
import Padrao from "../../estilos/Padrao";

export default (props: any) => (
    <>
        <Text>{props.nome}</Text>
        <Text>{props.sobrenome}</Text> 
    </>
)