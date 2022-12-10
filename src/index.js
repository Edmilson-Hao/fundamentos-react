import './index.css'
import ReactDOM from 'react-dom'
import React    from 'react'

import Primeiro     from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento    from './components/basicos/Fragmento'
const root = document.getElementById('root')
//const tag = <strong>Olá React!!!</strong>
//ReactDOM.render('Olá React!!!', el)

//ReactDOM.render(
//    'Olá React!!!',
//   el
//)

ReactDOM.render(
    <div id='app'>
        <Primeiro></Primeiro>
        <ComParametro
            titulo='Situação do Aluno'
            aluno='Pedro Silva'
            nota={ 9.3 }
        />
        <Fragmento></Fragmento>
    </div>,
    root
)