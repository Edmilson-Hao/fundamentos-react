import React from 'react'

import produtos from '../../data/produtos'
import './TabelaProdutos.css'

export default props => {
    const produtosTD = produtos.map((produto, i) =>{
        return (
            <tr key={ produto.id } className={ i % 2 === 0 ? 'Par' : 'Impar' }>
                <td>{produto.id}</td>
                <td>{produto.name}</td>
                <td>${produto.price}</td>
            </tr>
        )
    })

    return (
        <div id='tableWrapper'>
            <table>
                <thead>
                    <tr>
                        <th colspan="3">Lista de Produtos</th>
                    </tr>

                    <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                
                <tbody>
                    { produtosTD }
                </tbody>
            </table>
        </div>
    )
}