import React            from 'react'

import Primeiro         from './Primeiro'
import ComParametro     from './ComParametro'
import Fragmento        from './Fragmento'
import Aleatorio  from './Aleatorio'

//Quando default, não é necessário usar nome (pode ser função anônima)
//export default function(props) {
//Usar '_' underscore, quando a função tiver apenas 1 parametro
//arrow function podem omitir parenteses e return()

export default _ =>
    <div id='app'>
        <h1>Fundamentos React</h1>
        <Aleatorio
            min={ 1 }
            max={ 60 }
        />
        <hr/>
        <Fragmento/>
        <hr/>
        <ComParametro
            titulo='Situação do Aluno'
            aluno='Pedro Silva'
            nota={ 9.3 }
        />
        <hr/>
        <Primeiro></Primeiro>
    </div>

/*
export default _ => {
    return (
        <div id='app'>
            <h1>Fundamentos React</h1>
            <Fragmento></Fragmento>
            <ComParametro
                titulo='Situação do Aluno'
                aluno='Pedro Silva'
                nota={ 9.3 }
            />
            <Primeiro></Primeiro>
        </div>
    )
}
*/