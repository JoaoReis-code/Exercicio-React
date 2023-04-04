import React from "react";
import { ProgressViewIOSComponent, Text } from "react-native";
import { Children } from "react";
import Padrao from "../../estilos/Padrao";

export default (props: any) => {
    return (
        <>
            <Text style={Padrao.txt6}>Membros Familia</Text>
            {props.children}
        </>
    )
}