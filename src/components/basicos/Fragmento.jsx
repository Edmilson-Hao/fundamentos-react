import React from 'react'

//React.Fragmento -> Componentes React podem retornar apenas 1 unica tag
    //para contornar isso usa-se '<> </>' para encapsular todas as tags
    //OU '<React.Fragment> </React.Fragmento>' quando é necessário inserir propriedade na tag
export default function Fragmento(props){
    return (
        <>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </>
    )
}