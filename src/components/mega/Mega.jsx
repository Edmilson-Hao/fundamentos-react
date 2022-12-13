import React from 'react'

import './Mega.css'

export default props => {

    function gerarNumeroNaoContido(min,max,array){
        const aleatorio = parseInt(Math.random()*(max-min))+min
        return array.includes(aleatorio) ?
            gerarNumeroNaoContido(min,max,array) :
            aleatorio
    }

    function gerarNumeros(qtde){
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(min, max, nums)
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)
        return numeros
    }

   
    return (
    )
}