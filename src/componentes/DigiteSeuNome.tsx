import React, { useState} from 'react';
import { View, TextInput } from 'react-native';
import Padrao from "../estilos/Padrao";

export default (props:any) =>{

    let [texto, setNome] =  useState('')

    return (
        <>
            <TextInput
                style={Padrao.input}
                placeholder={props.placeholder}
                value={texto}
                onChangeText={texto => setNome(texto)}
            />
        </>
    )
}