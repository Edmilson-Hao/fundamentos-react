import React from 'react'

import './Mega.css'

export default props => {

    const { qtde, min, max } = props

    let arrayMega = []
    
    const generateNumber = (min, max, array) => {
        const randomNumber = parseInt((Math.random() * (max+1-min))+min)
        return arrayMega.includes(randomNumber) ? generateNumber(min, max, array) : randomNumber
    }

    const generateSequence = qtde => {
        const numbers = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = generateNumber(min, max, nums)
                return [...nums, novoNumero]
            },[])
            .sort((n1, n2) => n1 - n2)
        return numbers
    }

    const generateList = generateSequence(qtde).map((item, index) => {
        return <li>{ index+1 }°: { item } </li>
    })
    
    
    return (
        <div>
            { generateList }
        </div>
    )
}