import React from "react";
import {Text} from "react-native";
import Padrao from "../estilos/Padrao";

function getParImpar(num: any){


    const resultado = num % 2 == 0 ? 'Par' : 'Impar'

    return <Text style={Padrao.parimpar}>{resultado}</Text>
}

export default (props: any) => (
    <>
        {
            getParImpar(props.numero)
        }
    </>
)
    