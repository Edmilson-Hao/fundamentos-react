import React            from 'react'

import Card             from './layout/Card'
import Aleatorio        from './basicos/Aleatorio'
import Fragmento        from './basicos/Fragmento'
import ComParametro     from './basicos/ComParametro'
import Primeiro         from './basicos/Primeiro'

//Quando default, não é necessário usar nome (pode ser função anônima)
//export default function(props) {
//Usar '_' underscore, quando a função tiver apenas 1 parametro
//arrow function podem omitir parenteses e return()

export default _ =>
    <div id='app'>
        <h1>Fundamentos React</h1>

        <Card titulo='#5 - Desafio Aleatório'>
            <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo='#4 - Fragmento'>
            <Fragmento/>
        </Card>
        
        <Card titulo='#2 - Com Parâmetro'>
            <ComParametro
                titulo='Situação do Aluno'
                aluno='Pedro Silva'
                nota={ 9.3 }
            />
        </Card>

        <Card titulo='#01 - Primeiro Componente'>
            <Primeiro/>
        </Card>
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