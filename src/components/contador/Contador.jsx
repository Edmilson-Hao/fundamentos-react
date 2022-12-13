import React from 'react'

import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

import './Contador.css'

export default class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return(
            <div className='Contador'>
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={ this.state.passo } setPasso={this.setPasso} />
                <Botoes setInc={this.inc} setDec={this.dec}></Botoes>
            </div>
        )
    }
}