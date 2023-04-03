import React from "react";
import {Text} from "react-native";
import Padrao from "../estilos/Padrao";

export default (props: any) => (
    <>
        {
            props.numero % 2 == 0
            ? <Text style={Padrao.parimpar}>Par</Text>
            : <Text style={Padrao.parimpar}>Impar</Text>
        }
    </>
)
    