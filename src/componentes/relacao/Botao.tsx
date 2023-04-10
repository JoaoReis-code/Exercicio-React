import React from "react";
import { Button } from "react-native/types";

export default (props: any) => {
    function executar(){
        console.warn('Botao Acionado!')
    }

    return(
        <Button
            title="executar"
            onPress={executar}
        />
    )
}