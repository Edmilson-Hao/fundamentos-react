import React            from 'react'

import DiretaPai        from './comunicacao/DiretaPai'
import UsuarioInfo      from './condicional/UsuarioInfo'
import ParOuImpar       from './condicional/ParOuImpar'
import TabelaProdutos   from './repeticao/TabelaProdutos'
import ListaAlunos      from './repeticao/ListaAlunos'
import Familia          from './basicos/Familia'
import FamiliaMembro    from './basicos/FamiliaMembro'
import Card             from './layout/Card'
import Aleatorio        from './basicos/Aleatorio'
import Fragmento        from './basicos/Fragmento'
import ComParametro     from './basicos/ComParametro'
import Primeiro         from './basicos/Primeiro'

import './App.css'

//Quando default, não é necessário usar nome (pode ser função anônima)
//export default function(props) {
//Usar '_' underscore, quando a função tiver apenas 1 parametro
//arrow function podem omitir parenteses e return()

export default _ =>
    <div className='App'>
        <h1>Fundamentos React</h1>

        <div className='Cards'>

            <Card titulo='09# - Comunicação Direta' color='#59323C'>
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo='#8 - Renderização Condicional' color='#982395'>
                <ParOuImpar numero={ 20 }></ParOuImpar>
                <UsuarioInfo usuario={ { nome: 'Fernando' } } />
                <UsuarioInfo usuario={{}} />
            </Card>

            <Card titulo='#7 - Repetição - Tabela Produtos' color ='#3A9AD9'>
                <TabelaProdutos />
            </Card>

            <Card titulo='#6 - Repetição' color='#FF4C65'>
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo='#5 - Componente com Filhos' color='#00C8F8'>
                <Familia sobrenome='Ferreira'>
                    <FamiliaMembro nome='Pedro' />
                    <FamiliaMembro nome='Ana' />
                    <FamiliaMembro nome='Gustavo' />
                </Familia>
            </Card>

            <Card titulo='#4 - Desafio Aleatório' color='#FA6900'>
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo='#3 - Fragmento' color='#E94C6F'>
                <Fragmento/>
            </Card>
            
            <Card titulo='#2 - Com Parâmetro' color='#E8B71A'>
                <ComParametro
                    titulo='Situação do Aluno'
                    aluno='Pedro Silva'
                    nota={ 9.3 }
                />
            </Card>

            <Card titulo='#01 - Primeiro Componente' color='#588C73'>
                <Primeiro/>
            </Card>
        </div>
    </div>